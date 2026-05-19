import React from 'react';
import CostDashboard from 'components/CostDashboard';

export default function InfrastructurePage() {
    return (
        <div className="content_wrap">
            <h1 className="page_header">Live Infrastructure</h1>

            <p className="infra-intro">
                This page pulls real-time data from Azure. Every metric shown is live
                cost data from the Azure Cost Management API, updated on each page load.
            </p>

            <section className="infra-section">
                <h2 className="section-title">Monthly Cost Dashboard</h2>
                <CostDashboard />
            </section>
        </div>
    );
}