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

A Terraform-deployed system that watches my subscription spend and fires
email alerts at $50, $100, and $200 thresholds. Logic Apps handles the
notification pipeline. Azure Workbooks gives me a portal-side view.

**Part 2: Live Infrastructure Page**

A new page on this site that calls the Azure Cost Management REST API
through an Azure Function and renders real-time spend data, broken down
by service, with a progress bar against my monthly budget.

### What Actually Broke

Nothing goes smoothly. Here's what I ran into.

**The subscription ID format bug.** Terraform's budget resource needs
`/subscriptions/<id>` not just the raw UUID. One line fix, thirty minutes
of confusion.

**PowerShell eating my URLs.** The `&` characters in the Logic App
callback URL made PowerShell think it was running multiple commands.
Solved by storing the URL in a variable first.

**The Azure Functions runtime ignoring my venv.** Core Tools kept
reaching for the global Python 3.13 install instead of my virtual
environment. Fixed by explicitly pointing the runtime at the venv
Python executable.

**Cost Management API lag.** The API doesn't always return data
immediately. Locally it showed $0.00 until the billing pipeline caught up.
Knowing the difference between "broken" and "waiting" matters.

### What It Looks Like Now

$48.85 spent this month. Virtual Machines are the biggest line item at around $33,
which makes sense. I've been doing a couple labs recently, one that I'll be posting 
about shortly. Storage and networking fill out the rest.

The bar chart updates on every page load. No caching, no manual updates.
Just a service principal with Cost Management Reader permissions doing
its job quietly in the background.

### Why This Matters Beyond My Site

In a real business environment, cloud cost visibility is a serious problem.
Bills full of line items nobody can read, surprise invoices, no alerting
until it's too late. The same pattern I built here, budgets, alerts,
action groups, a readable dashboard, scales directly to an enterprise
environment.

That's the point. Build it on your own infrastructure first. Understand
every piece. Then you can apply it anywhere.

### What's Next

The Infrastructure page is a foundation. Uptime history, backup status,
deployment metrics. There is a lot more that can live there. I'll be
adding panels as I complete more projects from my roadmap.

The bill doesn't lie. Neither does the code.