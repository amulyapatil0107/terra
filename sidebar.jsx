import React from 'react';
import {
  LayoutDashboard,
  BarChart3,
  SlidersHorizontal,
  Settings,
  ChevronLeft,
  ChevronRight,
  Activity
} from 'lucide-react';
import '../styles/sidebar.css';
const Sidebar = ({ activeTab, setActiveTab, sidebarOpen, setSidebarOpen }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'filters', label: 'Filters', icon: SlidersHorizontal },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

