# 📊 LIVE EARTHQUAKE AND DISASTOR

A state-of-the-art, dark cyberpunk/hacker-style React telemetry dashboard designed for disaster monitoring operators. This project provides real-time seismic analytics, critical alert streams, and tectonic wave tracking utilizing glassmorphism visual designs and smooth micro-animations.

---

## ⚡ TECH STACK AND LIBRARIES
* **Core**: React 19 + Vite 8
* **Styling**: Tailwind CSS v4 (native `@tailwindcss/vite` JIT compiler integration)
* **Charts**: Recharts (Custom themed dark charts: Line, Bar, and Pie)
* **Animations**: Framer Motion (for hardware transitions, entry layout offsets, and alert pulse flashes)
* **Icons**: Lucide React

---

## 🚀 KEY FEATURES

* **🎛️ Collapsible Control Room Sidebar**: Fully responsive navigation panel detailing system coordinates, active stream logs, and uptime meters.
* **📈 Triple Telemetry Visualizer Deck**:
  * **Line Chart**: Tracking magnitude fluctuations and depth trends across a time coordinate matrix.
  * **Bar Chart**: Relative comparison of peak seismic events.
  * **Pie Chart**: Geographic distribution of tectonic activity regions.
* **🌡️ Live Stats Telemetry Panel**: Instant rendering of total active earthquakes, peak magnitude, average focal depth, and active monitoring zones.
* **🔍 Search & Calibrated Filters**: Filter seismic feeds by location keyword, hypocenter depth threshold, minimum magnitude strength, and regional boundaries.
* **💎 Glassmorphic Seismic Cards**: Responsive cards styled with neon severity accent borders mapping to magnitude scales.

---

## 📂 PROJECT ARCHITECTURE

The directory follows a highly modular, decoupled structure:

```text
src/
 ├── components/
 │    ├── Dashboard.jsx        # Grid wrapper and sub-layout routes
 │    ├── Sidebar.jsx          # Left navigation deck with collapse hooks
 │    ├── Navbar.jsx           # Top telemetry bar with ticking digital clock
 │    ├── StatsPanel.jsx       # Aggregated stats indicator boxes
 │    ├── Charts.jsx           # Recharts visualization modules
 │    ├── Filters.jsx          # Range sliders and region selectors
 │    ├── SearchBar.jsx        # Keyword search box
 │    ├── EarthquakeCard.jsx   # Individual event layout panel
 │    ├── RecentActivity.jsx   # Live terminal console activity stream
 │    └── LoadingSpinner.jsx   # Radar-sweep loading element
 │
 ├── data/
 │    └── mockData.js          # Raw seismic telemetry logs and styling guides
 │
 ├── styles/
 │    ├── dashboard.css        # CRT scanlines, layouts, and neon glow keyframes
 │    ├── sidebar.css          # Collapsible item animations and sidebar offsets
 │    └── cards.css            # Tectonic card hover translations and drop shadows
 │
 ├── App.jsx                   # Central state machine
 └── main.jsx                  # Virtual DOM root mounter
