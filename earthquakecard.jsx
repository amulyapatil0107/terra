import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Compass, Clock, AlertTriangle } from 'lucide-react';
import { getSeverityColor } from '../data/mockData';
import '../styles/cards.css';


const EarthquakeCard = ({ earthquake }) => {
  const { location, magnitude, depth, time, severity, region } = earthquake;

  const borderAndBgClass = getSeverityColor(severity);

  // Parse time
  const formattedTime = new Date(time).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
  });
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className={`glass-panel eq-card p-4 rounded-xl flex justify-between items-start gap-4 severity-${severity} ${borderAndBgClass}`}
    >
