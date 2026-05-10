import React from "react";
import "../assets/stylesheets/pages/resume.css"; 
import { Mail, MapPin, Phone, ExternalLink, Award } from 'lucide-react';

export default function ResumePage() {
  return (
    <div className="content_wrap">
      <h1 className="page_header">Resume</h1>

      <div className="resume-container">
        <div className="resume-card">
          
          <header className="resume-header">
            <h1>Dane Willms</h1>
            <div className="resume-contact">
              <span><MapPin size={16} /> Brandon, FL</span>
              <span>•</span>
              <span><Mail size={16} /> dane.willms1@gmail.com</span>
              <span>•</span>
              <span><Phone size={16} /> 414-210-7636</span>
            </div>
          </header>

          <section className="resume-section">
            <h2>Education</h2>
            <div className="entry">
              <div className="entry-header">
                <span className="entry-title">Western Governor's University</span>
                <span className="entry-meta">Millcreek, UT</span>
              </div>
              <div className="entry-header">
                <span className="entry-org">B.S. Cloud and Network Engineering (Azure Track)</span>
                <span className="entry-meta">Exp. Dec 2026</span>
              </div>
            </div>
          </section>

          <section className="resume-section">
            <h2>Certifications</h2>
            <div className="certifications-grid">
              <a href="/assets/certificates/az104.pdf" target="_blank" rel="noopener noreferrer" className="cert-link">
                <Award size={16} /> Azure Administrator Associate (AZ-104) <ExternalLink size={12} />
              </a>
              <a href="/assets/certificates/security-plus.pdf" target="_blank" rel="noopener noreferrer" className="cert-link">
                <Award size={16} /> CompTIA Security+ <ExternalLink size={12} />
              </a>
              <a href="/assets/certificates/network-plus.pdf" target="_blank" rel="noopener noreferrer" className="cert-link">
                <Award size={16} /> CompTIA Network+ <ExternalLink size={12} />
              </a>
            </div>
          </section>

          <section className="resume-section">
            <h2>Professional Experience</h2>
            
            <div className="entry">
              <div className="entry-header">
                <span className="entry-title">DART Tech</span>
                <span className="entry-meta">Mar '26 - Present</span>
              </div>
              <span className="entry-org">IT Support Services | Tampa, FL</span>
              <ul className="resume-list">
                <li>Administered and optimized Azure Virtual Desktop (AVD) host pools utilizing Nerdio Manager, improving compute resource allocation and ensuring high availability for enterprise virtual sessions.</li>
                <li>Remediated complex virtual desktop escalations utilizing FSLogix and Azure Storage Explorer, rapidly resolving hung profiles and file handle conflicts to minimize end-user downtime.</li>
                <li>Governed enterprise identity lifecycles utilizing Microsoft Entra ID, configuring B2B guest provisioning and enforcing MFA policies to maintain strict conditional access compliance.</li>
              </ul>
            </div>

            <div className="entry">
              <div className="entry-header">
                <span className="entry-title">RW Baird</span>
                <span className="entry-meta">Mar '25 - Mar '26</span>
              </div>
              <span className="entry-org">IT Service Desk Technician | Milwaukee, WI</span>
              <ul className="resume-list">
                <li>Troubleshot secure web gateway routing and authentication disruptions utilizing Zscaler and CLI diagnostics, rapidly restoring network connectivity and secure access.</li>
                <li>Automated repetitive security auditing workflows utilizing PowerShell scripting, eliminating manual data gathering and significantly reducing administrative overhead.</li>
                <li>Authored high-fidelity Root Cause Analysis (RCA) reports, establishing a benchmark for technical troubleshooting narratives used in team-wide training.</li>
              </ul>
            </div>
          </section>

          <section className="resume-section">
            <h2>Cloud Engineering Projects</h2>
            
            <div className="entry">
              <div className="entry-header">
                <span className="entry-title">Multi-Site Cloud SIEM</span>
                <span className="entry-meta">Azure | Splunk | Terraform</span>
              </div>
              <ul className="resume-list">
                <li>Automated the infrastructure provisioning of a Splunk Enterprise indexer in Azure utilizing Terraform, establishing a scalable, declarative Infrastructure-as-Code (IaC) foundation.</li>
                <li>Engineered custom security monitoring dashboards utilizing Splunk Processing Language (SPL), visualizing brute-force telemetry to accelerate threat detection and incident response times.</li>
              </ul>
            </div>

            <div className="entry">
              <div className="entry-header">
                <span className="entry-title">Automated Identity Infrastructure</span>
                <span className="entry-meta">Azure | Terraform | Active Directory</span>
              </div>
              <ul className="resume-list">
                <li>Architected a Windows Server 2025 Domain Controller in Azure using Terraform, completely replacing manual "click-ops" with automated, version-controlled IaC deployment.</li>
                <li>Provisioned secure virtual networking components including VNets, Subnets, and NSGs to establish a hardened cloud identity footprint.</li>
              </ul>
            </div>

            <div className="entry">
              <div className="entry-header">
                <span className="entry-title">Automated Vulnerability Management</span>
                <span className="entry-meta">Azure | Nessus | PowerShell</span>
              </div>
              <ul className="resume-list">
                <li>Deployed a Tenable Nessus vulnerability scanner into Azure utilizing Infrastructure-as-Code (IaC), establishing an automated security assessment baseline for cloud-hosted assets.</li>
                <li>Executed credentialed vulnerability scans and leveraged PowerShell for rapid remediation of high-severity vulnerabilities (CVSS 8.8), effectively reducing the organizational attack surface.</li>
              </ul>
            </div>

            <div className="entry">
              <div className="entry-header">
                <span className="entry-title">Azure Cloud Resume Challenge</span>
                <span className="entry-meta">Azure | GitHub Actions | DNS</span>
              </div>
              <ul className="resume-list">
                <li>Architected a highly available, serverless static resume website hosted on Azure Blob Storage with custom DNS routing.</li>
                <li>Integrated CI/CD workflows via GitHub Actions to automate site deployments and content updates.</li>
              </ul>
            </div>
          </section>

          <section className="resume-section">
            <h2>Technical Skills</h2>
            <div className="skills-grid">
              <div className="skill-category">
                  <h3>Cloud & IaC</h3>
                  <ul className="resume-list">
                      <li>Microsoft Azure, Terraform, Azure Virtual Desktop (AVD), Entra ID, Nerdio Manager</li>
                  </ul>
              </div>
              <div className="skill-category">
                  <h3>Security & Networking</h3>
                  <ul className="resume-list">
                      <li>Splunk (SIEM), Tenable Nessus, Zscaler, IAM, TCP/IP, DNS, NSG Configuration</li>
                  </ul>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}