import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const AZURE_BLUE = '#0078d4';
const AZURE_BLUE_LIGHT = '#50a8f0';

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
                <p style={{ color: '#111', marginBottom: 4 }}>{payload[0].payload.service}</p>
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

    useEffect(() => {
        fetch('/api/cost_summary')
            .then(res => res.json())
            .then(d => { setData(d); setLoading(false); })
            .catch(() => { setError(true); setLoading(false); });
    }, []);

    const progressPct = data ? Math.min((data.total / data.budget) * 100, 100) : 0;
    const progressColor = progressPct > 80 ? '#ef4444' : progressPct > 50 ? '#f97316' : '#22c55e';

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

            {data.services.length > 0 && (
                <div className="cost-chart-wrap">
                    <p className="cost-chart-title">Spend by Service</p>
                    <ResponsiveContainer width="100%" height={220}>
                        <BarChart data={data.services} margin={{ top: 5, right: 10, left: 0, bottom: 60 }}>
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
                                {data.services.map((_, i) => (
                                    <Cell
                                        key={i}
                                        fill={i === 0 ? AZURE_BLUE : AZURE_BLUE_LIGHT}
                                        opacity={1 - i * 0.08}
                                    />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            )}

            <p className="cost-updated">
                Last updated: {new Date(data.updated).toLocaleString()}
            </p>
        </div>
    );
}