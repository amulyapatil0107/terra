import React from 'react';
import { Search, X } from 'lucide-react';
const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative w-full md:w-80 font-mono text-xs">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
        <Search size={14} className="group-focus-within:text-cyan-400 transition-colors" />
      </div>
