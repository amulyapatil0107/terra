import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ShieldAlert } from 'lucide-react';
import '../styles/cards.css';
const RecentActivity = ({ earthquakes = [] }) => {
  return (
    <div className="glass-panel p-4 rounded-xl border border-slate-800/80 h-full flex flex-col min-h-[500px]">
