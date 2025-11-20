import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { SchedulePage } from './pages/SchedulePage';
import { MembersPage } from './pages/MembersPage';
import { LeadsPage } from './pages/LeadsPage';
import { AnalyticsPage } from './pages/AnalyticsPage';

import { cn } from '@/lib/utils';

const Navigation: React.FC = () => {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/schedule', label: 'Schedule' },
    { to: '/members', label: 'Memberships' },
    { to: '/leads', label: 'Leads' },
    { to: '/analytics', label: 'Analytics' }
  ];
  return (
    <nav aria-label="Main Navigation" className="bg-primary text-white shadow-sm">
      <div className="container flex items-center justify-between h-14">
        <div className="text-xl font-semibold" style={{ color: '#fff' }}>FitLaunch Pro</div>
        <div className="flex space-x-4">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className={cn('px-3 py-2 rounded hover:bg-blue-700')}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default function App() {
  return (
    <div>
      <Navigation />
      <main className="container py-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/members" element={<MembersPage />} />
          <Route path="/leads" element={<LeadsPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  );
}
