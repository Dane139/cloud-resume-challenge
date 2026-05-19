---
name: "The Bill Doesn't Lie: Building a Live Azure Cost Dashboard"
handle: "azure-cost-dashboard"
date: '2026-05-19T00:00:00-04:00'
---

# The Bill Doesn't Lie: Building a Live Azure Cost Dashboard

If you scroll up to the nav bar, you'll notice something new, an Infrastructure page.
Click it. The numbers you see are real. That's my actual Azure spend, pulled live
from the Cost Management API every time the page loads.

This post is about how I built it, what broke, and why I think every cloud
engineer should understand their bill.

### The Problem Nobody Talks About

Most cloud tutorials teach you how to deploy things. Almost none of them teach
you how to understand what those things cost. I wanted to fix that, starting
with my own environment.

### What I Built

Two things working together.

**Part 1: Azure Cost Visibility Dashboard**

A Terraform deployed system that watches my subscription spend and fires
email alerts at $50, $100, and $200 thresholds. Logic Apps handles the
notification pipeline. Azure Workbooks gives me a portal-side view.

**Part 2: Live Infrastructure Page**

A new page on this site that calls the Azure Cost Management REST API
through an Azure Function and renders real-time spend data. The dashboard
has two views. The first breaks down spend by service with filter pills
that let you isolate costs by resource group. The second view shows total
spend per resource group with a color-coded bar chart and a breakdown
table showing each group's cost and percentage of the total bill.

### What Actually Broke

Nothing goes smoothly. Here's what I ran into.

**The subscription ID format bug.** Terraform's budget resource needs
`/subscriptions/<id>` not just the raw UUID. One line fix, thirty minutes
of confusion.

**PowerShell eating my URLs.** The ampersand characters in the Logic App
callback URL made PowerShell think it was running multiple commands.
Solved by storing the URL in a variable first.

**The Azure Functions runtime ignoring my venv.** Core Tools kept
reaching for the global Python 3.13 install instead of my virtual
environment. Fixed by explicitly pointing the runtime at the venv
Python executable.

**Missing dependencies in requirements.txt.** I installed azure-identity
and requests manually into my local venv but never added them to
requirements.txt. The deployment succeeded but both functions returned
404 in production until I caught it. Always update the file, not just
the environment.

**Cost Management API lag.** The API does not always return data
immediately. Locally it showed $0.00 until the billing pipeline caught up.
Knowing the difference between broken and waiting matters.

### What It Looks Like Now

$48.85 spent this month. Virtual Machines are the biggest line item at
around $33, which makes sense. That is the lab work. Storage and
networking fill out the rest.

Switch to the resource group view and you can see exactly which project
is driving spend. Every resource group I have deployed shows up with its
own bar and a percentage of the total. That is the kind of visibility a
business owner actually needs, not a wall of line items nobody can read.

The dashboard updates on every page load. No caching, no manual updates.
Just a service principal with Cost Management Reader permissions doing
its job quietly in the background.

### Why This Matters Beyond My Site

In a real business environment, cloud cost visibility is a serious problem.
Bills full of line items nobody can read, surprise invoices, no alerting
until it is too late. The same pattern I built here, budgets, alerts,
action groups, a readable dashboard, scales directly to an enterprise
environment.

That is the point. Build it on your own infrastructure first. Understand
every piece. Then you can apply it anywhere.

### What's Next

The Infrastructure page is a foundation. Uptime history, backup status,
deployment metrics. There is a lot more that can live there. I will be
adding panels as I complete more projects from my roadmap.

The bill does not lie. Neither does the code.