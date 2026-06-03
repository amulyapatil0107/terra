import React from 'react';
import { SlidersHorizontal, RotateCcw } from 'lucide-react';

const Filters = ({
  minMagnitude,
  setMinMagnitude,
  maxDepth,
  setMaxDepth,
  regionFilter,
  setRegionFilter,
  onReset
}) => {
  const regions = ["All", "Asia-Pacific", "Americas", "Europe/Africa", "Oceania"];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-2 text-slate-300 font-mono text-xs">
