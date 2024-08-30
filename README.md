# Responsive Dashboard Project

## Table of Contents
- [How to Run](#how-to-run)
- [Live Site](#live-site)
- [Lighthouse Report](#lighthouse-report)
- [Dashboard Image vs. Chart.js](#dashboard-image-vs-chartjs)


## How to Run

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   ```
2. Open the `index.html` file in a web browser.

Alternatively, if you're using a local server:

1. Navigate to the project directory in your terminal.
2. Run a local server. For example, with Python:
   - Python 2: 
     ```bash
     python -m SimpleHTTPServer 8000
     ```
   - Python 3: 
     ```bash
     python -m http.server 8000
     ```
3. Open your browser and go to `http://localhost:8000`

## Live Site

You can view the live site at: `https://explore.io.vercel.app`

## Lighthouse Report

Here are the results of our latest Lighthouse report:

| Metric | Score |
|--------|-------|
| Performance | 93 |
| Accessibility | 100 |
| Best Practices | 96 |
| SEO | 100 |

> **Note:** Please update these scores with your actual Lighthouse report results.

## Dashboard Image vs. Chart.js

We chose to use a static dashboard image rather than creating charts with Chart.js or similar libraries for several reasons:

1. **Performance**: A single, optimized image typically loads faster than a JavaScript library and dynamic chart rendering, especially on slower connections.

2. **Consistency**: An image ensures the dashboard looks exactly the same across all devices and browsers, avoiding any rendering inconsistencies.

3. **Simplicity**: For a static dashboard, an image requires less code and maintenance than setting up and updating charts dynamically.

4. **Design Control**: Using an image allows for pixel-perfect design implementation, including complex visual elements that might be challenging to recreate with chart libraries.

However, if real-time or interactive data visualization is needed in the future, we can easily switch to a library like Chart.js.
