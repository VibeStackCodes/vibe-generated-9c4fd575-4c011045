import React from 'react';
import { AnalyticsPanel } from '@/components/AnalyticsPanel';

export const AnalyticsPage: React.FC = () => {
  return (
    <section aria-label="Analytics" className="space-y-6">
      <h2 className="text-2xl font-semibold" style={{ color: '#003d82' }}>Analytics Dashboard</h2>
      <AnalyticsPanel />
    </section>
  );
};
