import React from 'react';
import dane_willms from '../assets/images/dane-willms-thumb.webp';
import morale_officer from '../assets/images/weenie-hut-jr.webp';

export default function AboutPage() {
  return (
    <div className="content_wrap">
      <h1 className="page_header">About Me</h1>

      <article>
        <div className="about-profiles">
          <div className="profile-group">
            <div className="profile-image-container">
              <img src={dane_willms} alt="Dane Willms" className="profile-image" />
            </div>
            <span className="profile-role">Azure Administrator</span>
          </div>

          <div className="profile-group">
            <div className="profile-image-container">
              <img src={morale_officer} alt="Chief Morale Officer" className="profile-image" />
            </div>
            <span className="profile-role morale-blue">Chief Morale Officer</span>
          </div>
        </div>

        <div className="markdown">
          <h2>Hi, I'm Dane Willms.</h2>

          <p>
            I am an Azure Administrator based in Brandon, FL. I don't just write code; I approach infrastructure with 
            the same grit and practical problem-solving mindset I learned working in the Wisconsin trades.
          </p>

          <h3>The Foundation: From Pavement to Architecture</h3>
          <p>
            I was raised by a family of blue-collar professionals, my father was a mason who went above & beyond his typicaly work 
            building inground pools on the side, and my uncle was a lead foreman on an asphalt crew. My first real job
            was sweeping parking lots, crack filling, and sealing driveways. I worked 7 days a week, 12+ hours a day.
            That environment instilled a permanent rule in me: <strong> If you're not willing to sign your name to your work, 
            you're not doing it right.</strong>
          </p>
          <p>
            I spent years exploring different paths, logistics, transportation, and even considered physical therapy or an NP 
            because I've always been fascinated by pharmacology and human biology. I spent a few years CNC machining, 
            working 12-hour shifts through COVID on government contracts. But I reached a point where the "grind" 
            needed a new direction. 
          </p>

          <h3>The Pivot: Breaking into Tech</h3>
          <p>
            After a life-changing loss and a realization that I wanted more, I tried college for Cybersecurity but 
            dropped out after one semester due to life circumstances. However, that was enough to land my first 
            Help Desk role. I finally found a field that rewarded my tinkering spirit. I dove into everything. TryHackMe, 
            HackTheBox, and Blue Team Level 1. I even started inspecting phishing emails and managing our KnowBe4 platform 
            at my first job.
          </p>
          <p>
            I eventually stumbled upon the Cloud Resume Challenge and struggled immensely. I followed guides by 
            MadeByGPS, picked up Python and Linux books, and started the AZ-104 grind. It wasn't easy, I failed the 
            AZ-104 twice with scores of 659 and 646. But coming from the trades, I don't know how to quit. I finally 
            passed on January 3rd, 2026.
          </p>

          <h3>What I Focus On</h3>
          <ul>
            <li><strong>Cloud Infrastructure:</strong> Designing and automating robust environments in Microsoft Azure.</li>
            <li><strong>Automation & IaC:</strong> Moving away from "Click-Ops" and using Terraform to ensure every deployment is repeatable.</li>
            <li><strong>Proactive Observability:</strong> Using Splunk and Nessus to monitor threat telemetry instead of just reacting to end-user tickets.</li>
          </ul>

          <h3>Beyond the Terminal</h3>
          <p>
            Recently, I moved from Wisconsin to Florida. While I miss the ice fishing and snowboarding, trading the 
            winter for the sunshine has been a massive reset. When I'm not building in Azure, I'm in the gym or 
            cooking healthy, home-cooked meals with my girlfriend. 
          </p>
          <p>
            Keeping the peace at home is our dachshund, the unofficial "Chief Morale Officer." I’m settled in, 
            consistency is back at 100%, and I'm hungry to build more cloud infrastructure.
          </p>
        </div>
      </article>
    </div>
  );
}