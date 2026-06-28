import React from "react";
import "../assets/stylesheets/pages/resume.css";
import { Mail, Phone, MapPin, ExternalLink, Award, Globe } from 'lucide-react';

export default function ResumePage() {
  return (
    <div className="content_wrap">
      <h1 className="page_header">Resume</h1>

      <div className="resume-container">
        <div className="resume-card">

          <header className="resume-header">
            <h1>Dane Willms</h1>
            <div className="resume-contact">
              <span><MapPin size={16} /> Tampa, FL</span>
              <span>•</span>
              <span><Phone size={16} /> (813) 644-2252</span>
              <span>•</span>
              <span><Mail size={16} /> hello@daneondemand.com</span>
              <span>•</span>
              <span><Globe size={16} /> <a href="https://daneondemand.com" target="_blank" rel="noreferrer">daneondemand.com</a></span>
            </div>
          </header>

          <section className="resume-section">
            <h2>Professional Experience</h2>

            <div className="entry">
              <div className="entry-header">
                <span className="entry-title">DART Tech</span>
                <span className="entry-meta">Mar '26 – Present</span>
              </div>
              <span className="entry-org">Cloud & Identity Administrator | Tampa, FL</span>
              <ul className="resume-list">
                <li>Designed and deployed an AI Inventory Tracker integrating Azure Service Bus, Azure Functions, Azure SQL, Azure OpenAI, and Logic Apps — provisioned end-to-end via Terraform to automate client inventory processing workflows.</li>
                <li>Built an Azure Website Uptime Monitor using a timer-triggered Python Azure Function (V2) with Table Storage audit logging and Azure Monitor KQL alert rules tracking availability across 15+ client-facing endpoints.</li>
                <li>Automated cloud cost governance by deploying an Azure Cost Visibility Dashboard via Terraform with Cost Management budget alerts, Logic Apps notifications, and Azure Workbooks backed by Log Analytics, reducing monthly spend by 20%.</li>
                <li>Provisioned geo-redundant backup platform across 3 Azure Blob containers via Terraform with GRS replication, versioning, and 30-day soft-delete; built Logic Apps workflow delivering daily backup confirmation emails to stakeholders.</li>
                <li><strong>Task:</strong> Automated identity lifecycle provisioning for ~2,000 users across 8 client tenants. <strong>Tool:</strong> PowerShell & Microsoft Graph API. <strong>Impact:</strong> Eliminated manual workflows and reduced ticket backlog by standardizing Entra ID attribute management.</li>
                <li><strong>Task:</strong> Administered multi-tenant AVD host pools. <strong>Tool:</strong> Azure Virtual Desktop & Nerdio. <strong>Impact:</strong> Maintained high-availability desktop delivery across 2,000 endpoints while resolving ~30 daily incidents via ConnectWise Manage.</li>
                <li><strong>Task:</strong> Executed cloud mailbox and permissions operations for 8 client tenants. <strong>Tool:</strong> Exchange Online PowerShell. <strong>Impact:</strong> Managed account configurations, delegation, and security changes with zero-error CLI execution.</li>
              </ul>
            </div>

            <div className="entry">
              <div className="entry-header">
                <span className="entry-title">RW Baird</span>
                <span className="entry-meta">Mar '25 – Mar '26</span>
              </div>
              <span className="entry-org">IT Service Desk Technician | Milwaukee, WI</span>
              <ul className="resume-list">
                <li><strong>Task:</strong> Supported Zero Trust identity and access enforcement across a 5,000-user enterprise environment. <strong>Tool:</strong> Entra ID Conditional Access & Zscaler ZPA. <strong>Impact:</strong> Ensured least-privilege network segmentation and secure remote access compliance.</li>
                <li><strong>Task:</strong> Automated Active Directory security group lifecycle audits. <strong>Tool:</strong> PowerShell. <strong>Impact:</strong> Generated IAM compliance telemetry and access governance reporting across 5,000 users.</li>
                <li><strong>Task:</strong> Authored high-fidelity technical documentation and RCA reports. <strong>Tool:</strong> Knowledge Base (KB). <strong>Impact:</strong> Established a standardized troubleshooting benchmark used for team-wide training and improving first-call resolution rates.</li>
              </ul>
            </div>

            <div className="entry">
              <div className="entry-header">
                <span className="entry-title">Helgesen Industries</span>
                <span className="entry-meta">Sep '23 – Mar '25</span>
              </div>
              <span className="entry-org">IT Support Specialist</span>
              <ul className="resume-list">
                <li><strong>Task:</strong> Deployed and configured 40+ Cisco Meraki access points across 2 buildings and 3 sites. <strong>Tool:</strong> Cisco Meraki. <strong>Impact:</strong> Delivered stable wireless connectivity for a 500-user organization and reduced network-related support requests.</li>
                <li><strong>Task:</strong> Administered Microsoft 365 and Exchange Online for ~500 users. <strong>Tool:</strong> Microsoft 365 & Exchange Online. <strong>Impact:</strong> Resolved account issues and maintained operational efficiency across the organization's cloud productivity suite.</li>
                <li><strong>Task:</strong> Managed ~5 daily IT service requests. <strong>Tool:</strong> Zendesk. <strong>Impact:</strong> Provided end-to-end technical support across all departments and documented resolutions to build a reusable knowledge base.</li>
              </ul>
            </div>
          </section>

          <section className="resume-section">
            <h2>Cloud Engineering Projects</h2>

            <div className="entry">
              <div className="entry-header">
                <span className="entry-title">Multi-Site Cloud SIEM</span>
              </div>
              <div className="project-skills">
                {["Splunk", "Terraform", "Azure", "SPL"].map((s) => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
              <ul className="resume-list">
                <li>Automated provisioning of a Splunk Enterprise indexer via Terraform, replacing click-ops with a scalable declarative IaC foundation.</li>
                <li>Engineered custom SPL dashboards to visualize brute-force telemetry and accelerate threat detection.</li>
              </ul>
            </div>

            <div className="entry">
              <div className="entry-header">
                <span className="entry-title">Automated Identity Infrastructure</span>
              </div>
              <div className="project-skills">
                {["Terraform", "Azure", "Active Directory", "Windows Server 2025"].map((s) => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
              <ul className="resume-list">
                <li>Architected a Windows Server 2025 Domain Controller in Azure via Terraform, establishing a hardened, version-controlled cloud identity footprint.</li>
              </ul>
            </div>

            <div className="entry">
              <div className="entry-header">
                <span className="entry-title">Automated Vulnerability Management</span>
              </div>
              <div className="project-skills">
                {["Nessus", "Azure", "PowerShell", "Terraform"].map((s) => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
              <ul className="resume-list">
                <li>Deployed Tenable Nessus into Azure via IaC and PowerShell; executed credentialed scans and automated remediation of high-severity vulnerabilities, reducing organizational attack surface.</li>
              </ul>
            </div>

            <div className="entry">
              <div className="entry-header">
                <span className="entry-title">Azure Cloud Resume Challenge</span>
              </div>
              <div className="project-skills">
                {["Azure Functions", "Cosmos DB", "Blob Storage", "GitHub Actions", "DNS"].map((s) => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
              <ul className="resume-list">
                <li>Architected a globally available serverless static resume website with 100% automated CI/CD deployment via GitHub Actions.</li>
              </ul>
            </div>
          </section>

          <section className="resume-section">
            <h2>Certifications</h2>
            <div className="certifications-grid">
              <a href="/assets/certificates/az104.pdf" target="_blank" rel="noopener noreferrer" className="cert-link">
                <Award size={16} /> Microsoft Certified: Azure Administrator Associate (AZ-104) <ExternalLink size={12} />
              </a>
              <a href="/assets/certificates/security-plus.pdf" target="_blank" rel="noopener noreferrer" className="cert-link">
                <Award size={16} /> CompTIA Security+ <ExternalLink size={12} />
              </a>
              <a href="/assets/certificates/network-plus.pdf" target="_blank" rel="noopener noreferrer" className="cert-link">
                <Award size={16} /> CompTIA Network+ <ExternalLink size={12} />
              </a>
              <a href="/assets/certificates/aws-ccp.pdf" target="_blank" rel="noopener noreferrer" className="cert-link">
                <Award size={16} /> AWS Certified Cloud Practitioner <ExternalLink size={12} />
              </a>
            </div>
          </section>

          <section className="resume-section">
            <h2>Education</h2>
            <div className="entry">
              <div className="entry-header">
                <span className="entry-title">Western Governors University</span>
                <span className="entry-meta">Exp. Dec 2026</span>
              </div>
              <span className="entry-org">B.S. Cloud and Network Engineering (Microsoft Azure Track)</span>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}