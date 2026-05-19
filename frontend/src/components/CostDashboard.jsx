import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const AZURE_BLUE = '#0078d4';
const AZURE_BLUE_LIGHT = '#50a8f0';
const RG_COLORS = ['#0078d4', '#50a8f0', '#00b294', '#ffb900', '#e74856', '#8764b8', '#ef6950', '#00b7c3'];

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div style={{
                background: 'rgba(255,255,255,0.95)',
                border: '1px solid rgba(0,0,0,0.1)',
                borderRadius: '8px',
                padding: '10px 14px',
                fontSize: '0.85rem',
                fontWeight: 600
            }}>
                <p style={{ color: '#111', marginBottom: 4 }}>{payload[0].payload.service || payload[0].payload.resourceGroup}</p>
                {payload[0].payload.resourceGroup && payload[0].payload.service && (
                    <p style={{ color: '#666', marginBottom: 4, fontSize: '0.75rem' }}>{payload[0].payload.resourceGroup}</p>
                )}
                <p style={{ color: AZURE_BLUE }}>${payload[0].value.toFixed(4)}</p>
            </div>
        );
    }
    return null;
};

export default function CostDashboard() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [selectedRG, setSelectedRG] = useState('All');
    const [activeView, setActiveView] = useState('service');

    useEffect(() => {
        fetch('/api/cost_summary')
            .then(res => res.json())
            .then(d => { setData(d); setLoading(false); })
            .catch(() => { setError(true); setLoading(false); });
    }, []);

    const progressPct = data ? Math.min((data.total / data.budget) * 100, 100) : 0;
    const progressColor = progressPct > 80 ? '#ef4444' : progressPct > 50 ? '#f97316' : '#22c55e';

    const filteredServices = data ? (
        selectedRG === 'All'
            ? data.services
            : data.services.filter(s => s.resourceGroup === selectedRG)
    ) : [];

    const resourceGroups = data ? ['All', ...data.resourceGroups.map(rg => rg.resourceGroup)] : ['All'];

    if (loading) return (
        <div className="cost-dashboard-card">
            <div className="cost-loading">Fetching live Azure cost data...</div>
        </div>
    );

    if (error || !data) return (
        <div className="cost-dashboard-card">
            <div className="cost-loading">Cost data temporarily unavailable.</div>
        </div>
    );

    return (
        <div className="cost-dashboard-card">
            <div className="cost-header">
                <h3 className="cost-title">Live Azure Spend</h3>
                <span className="cost-month">{data.month}</span>
            </div>

            <div className="cost-summary-row">
                <div className="cost-stat-box">
                    <span className="cost-stat-label">Current Spend</span>
                    <span className="cost-stat-value">${data.total.toFixed(2)}</span>
                </div>
                <div className="cost-stat-box">
                    <span className="cost-stat-label">Monthly Budget</span>
                    <span className="cost-stat-value">${data.budget}.00</span>
                </div>
                <div className="cost-stat-box">
                    <span className="cost-stat-label">Remaining</span>
                    <span className="cost-stat-value" style={{ color: progressColor }}>
                        ${(data.budget - data.total).toFixed(2)}
                    </span>
                </div>
            </div>

            <div className="cost-progress-wrap">
                <div className="cost-progress-bar">
                    <div
                        className="cost-progress-fill"
                        style={{ width: `${progressPct}%`, background: progressColor }}
                    />
                </div>
                <span className="cost-progress-label">{progressPct.toFixed(1)}% of budget used</span>
            </div>

            <div className="cost-view-toggle">
                <button
                    className={`cost-toggle-btn ${activeView === 'service' ? 'active' : ''}`}
                    onClick={() => setActiveView('service')}
                >
                    By Service
                </button>
                <button
                    className={`cost-toggle-btn ${activeView === 'resourcegroup' ? 'active' : ''}`}
                    onClick={() => setActiveView('resourcegroup')}
                >
                    By Resource Group
                </button>
            </div>

            {activeView === 'service' && (
                <>
                    <div className="cost-filter-row">
                        <span className="cost-filter-label">Filter by Resource Group</span>
                        <div className="cost-filter-pills">
                            {resourceGroups.map(rg => (
                                <button
                                    key={rg}
                                    className={`cost-pill ${selectedRG === rg ? 'active' : ''}`}
                                    onClick={() => setSelectedRG(rg)}
                                >
                                    {rg}
                                </button>
                            ))}
                        </div>
                    </div>

                    {filteredServices.length > 0 && (
                        <div className="cost-chart-wrap">
                            <p className="cost-chart-title">
                                Spend by Service {selectedRG !== 'All' ? `— ${selectedRG}` : ''}
                            </p>
                            <ResponsiveContainer width="100%" height={240}>
                                <BarChart data={filteredServices} margin={{ top: 5, right: 10, left: 0, bottom: 70 }}>
                                    <XAxis
                                        dataKey="service"
                                        tick={{ fontSize: 11, fill: '#555' }}
                                        angle={-35}
                                        textAnchor="end"
                                        interval={0}
                                    />
                                    <YAxis
                                        tick={{ fontSize: 11, fill: '#555' }}
                                        tickFormatter={v => `$${v}`}
                                    />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Bar dataKey="cost" radius={[4, 4, 0, 0]}>
                                        {filteredServices.map((_, i) => (
                                            <Cell
                                                key={i}
                                                fill={i === 0 ? AZURE_BLUE : AZURE_BLUE_LIGHT}
                                                opacity={1 - i * 0.06}
                                            />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    )}
                </>
            )}

            {activeView === 'resourcegroup' && data.resourceGroups.length > 0 && (
                <div className="cost-chart-wrap">
                    <p className="cost-chart-title">Spend by Resource Group</p>
                    <ResponsiveContainer width="100%" height={240}>
                        <BarChart data={data.resourceGroups} margin={{ top: 5, right: 10, left: 0, bottom: 70 }}>
                            <XAxis
                                dataKey="resourceGroup"
                                tick={{ fontSize: 11, fill: '#555' }}
                                angle={-35}
                                textAnchor="end"
                                interval={0}
                            />
                            <YAxis
                                tick={{ fontSize: 11, fill: '#555' }}
                                tickFormatter={v => `$${v}`}
                            />
                            <Tooltip content={<CustomTooltip />} />
                            <Bar dataKey="cost" radius={[4, 4, 0, 0]}>
                                {data.resourceGroups.map((_, i) => (
                                    <Cell
                                        key={i}
                                        fill={RG_COLORS[i % RG_COLORS.length]}
                                    />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>

                    <div className="cost-rg-table">
                        {data.resourceGroups.map((rg, i) => (
                            <div key={rg.resourceGroup} className="cost-rg-row">
                                <span
                                    className="cost-rg-dot"
                                    style={{ background: RG_COLORS[i % RG_COLORS.length] }}
                                />
                                <span className="cost-rg-name">{rg.resourceGroup}</span>
                                <span className="cost-rg-cost">${rg.cost.toFixed(2)}</span>
                                <span className="cost-rg-pct">
                                    {((rg.cost / data.total) * 100).toFixed(1)}%
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <p className="cost-updated">
                Last updated: {new Date(data.updated).toLocaleString()}
            </p>
        </div>
    );
}