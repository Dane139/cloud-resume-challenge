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
            <span className="profile-role">Junior Cloud Engineer</span>
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
            I am a Junior Cloud Engineer based in Brandon, FL, with a deep passion for building scalable,
            automated, and secure infrastructure. I don't just write code; I approach infrastructure with 
            the same grit and practical problem-solving mindset I learned working in the trades.
          </p>

          <h3>My Story: From Blue Collar to Tech</h3>
          <p>
            I was born and raised in Wisconsin, surrounded by a family of hardworking, blue-collar professionals. 
            For a long time, that was my world too. I spent years working in trades where you learn the value of 
            a hard day's work and the importance of getting the job done right the first time.
          </p>
          <p>
            But my tech side has always been there. It started when my family got our first home computer when 
            I was eight years old. Whether I was gaming or taking apart PCs to see what made them tick, I never 
            stopped tinkering. After spending years in blue-collar roles, I realized I couldn't ignore that 
            childhood curiosity any longer. I reached a turning point, and I decided to pivot into IT which
            has now led me to where I am today in looking to build a career in cloud engineering.
          </p>

          <h3>My Path to the Cloud</h3>
          <p>
            My transition was a hands-on journey. I started in help desk, dealing with everything from complex 
            network issues to the "dreaded" office printers. While that environment was challenging, it was also 
            where I found my spark. I became obsessed with security, spending my off-hours digging into 
            phishing analysis, threat hunting, and certifications.
          </p>
          <p>
            I briefly explored GRC (Governance, Risk, and Compliance), but I learned quickly that nothing 
            beats the satisfaction of solving technical problems. I missed the build. 
            That’s when I pivoted toward Azure. My daily tasks involved more cloud administration, and I found 
            myself naturally gravitating toward the architecture side of things. 
          </p>
          <p>
            After stumbling across the Cloud Resume Challenge, I was hooked. Seeing entire 
            environments spun up from scratch and fully automated changed my perspective on what engineering 
            could be. That excitement is what led me to WGU to pursue my B.S. in Cloud and Network Engineering.
          </p>

          <h3>What I Focus On</h3>
          <ul>
            <li><strong>Cloud Infrastructure:</strong> Designing, deploying, and managing robust environments in Microsoft Azure.</li>
            <li><strong>Automation & IaC:</strong> Utilizing Terraform and PowerShell to eliminate routine administrative overhead.</li>
            <li><strong>Security & Identity:</strong> Hardening Entra ID (Azure AD), enforcing strict MFA access, and visualizing threat telemetry.</li>
          </ul>

          <h3>Beyond the Terminal</h3>
          <p>
            When I’m not at my computer, I try to keep a balance between the screen and the real world. I’m an avid lifter and love spending time in the kitchen cooking up great food.
            You’ll also frequently find me hanging out with my girlfriend and our dachshund, who serves as the unofficial "Chief Morale Officer" of our home.
          </p>
          <p>
            Since moving to Florida from Wisconsin, I’m still in the process of finding my hobbies. I’m a huge fan of snowboarding and ice fishing,
            so trading those in for Florida sunshine has been quite an adjustment. I still try to get out on the golf course whenever I can, even if my game is still a work in progress
            and I’m currently on the hunt for new outdoor activities to replace the hiking and winter sports I grew up with. 
          </p>
        </div>
      </article>
    </div>
  );
}