import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  CartesianGrid,
  Legend
} from 'recharts';
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-950/90 border border-cyan-500/50 backdrop-blur-md p-3 rounded-lg font-mono text-xs shadow-glow-cyan text-slate-100">
        {label && <p className="font-bold text-cyan-400 mb-1">{label}</p>}
        {payload.map((pld, index) => (
          <p key={index} style={{ color: pld.color }}>
            {pld.name}: <span className="font-bold">{pld.value}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};
const Charts = ({ earthquakes = [] }) => {
  // 1. Data for Magnitude Bar Chart (top 7 latest earthquakes for display)
  const barData = earthquakes
    .slice(0, 7)
    .map(eq => ({
      name: eq.location.split(',')[0],
      Magnitude: eq.magnitude,
      Depth: eq.depth
    }));
