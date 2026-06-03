import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ShieldAlert } from 'lucide-react';
import '../styles/cards.css';
const RecentActivity = ({ earthquakes = [] }) => {
  return (
    <div className="glass-panel p-4 rounded-xl border border-slate-800/80 h-full flex flex-col min-h-[500px]">
        {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
        <h3 className="font-mono text-xs font-bold text-cyan-400 flex items-center gap-2 tracking-widest uppercase">
          <Terminal size={14} className="text-cyan-500 animate-pulse" />
          REALTIME SEISMIC FEED (LOGS)
        </h3>
        <span className="font-mono text-[8px] px-2 py-0.5 bg-slate-900 border border-slate-800 text-slate-400 rounded">
          STREAM: LIVE
        </span>
      </div>
