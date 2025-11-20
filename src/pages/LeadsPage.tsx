import React from 'react';
import { LeadsDashboard } from '@/components/LeadsDashboard';

export const LeadsPage: React.FC = () => {
  return (
    <section aria-label="Leads" className="space-y-4">
      <h2 className="text-2xl font-semibold" style={{ color: '#003d82' }}>Leads & CRM</h2>
      <LeadsDashboard />
    </section>
  );
};
