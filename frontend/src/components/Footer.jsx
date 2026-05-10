import React, { useState, useEffect } from 'react';
import 'css/default.css';

const Footer = () => {
    const [lastDeploy, setLastDeploy] = useState("Loading...");
    const currentYear = new Date().getFullYear();

    useEffect(() => {
        fetch('https://api.github.com/repos/Dane139/cloud-resume-challenge/actions/runs?per_page=1&status=success')
            .then(res => res.json())
            .then(data => {
                if (data.workflow_runs && data.workflow_runs.length > 0) {
                    const deployDate = new Date(data.workflow_runs[0].updated_at);
                    setLastDeploy(deployDate.toLocaleString());
                } else {
                    setLastDeploy("Unknown");
                }
            })
            .catch(() => setLastDeploy("Error"));
    }, []);

    return (
        <footer className="site_footer">
            <div className="footer_content">
                <div className="footer_info">
                    <p>© {currentYear} Dane Willms</p>
                    <a href="mailto:hello@daneondemand.com?subject=Reaching out from daneondemand.com" className="footer_email">
                        hello@daneondemand.com
                    </a>
                </div>

                <div className="footer_status_container">
                    <div className="status_item">
                        <span className="status_dot green_glow"></span>
                        <span>Site Status: <strong>Operational</strong></span>
                    </div>
                    <span className="status_divider">|</span>
                    <div className="status_item">
                        <span className="status_dot orange_glow"></span>
                        <span>Last Deployment: <strong>{lastDeploy}</strong></span>
                    </div>
                    <span className="status_divider">|</span>
                    <div className="status_item">
                        <span className="status_dot blue_glow"></span>
                        <span>Azure Region (East US): <strong>Healthy</strong></span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;