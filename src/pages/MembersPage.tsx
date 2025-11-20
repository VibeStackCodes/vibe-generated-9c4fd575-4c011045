import React from 'react';
import { MembershipDashboard } from '@/components/MembershipDashboard';

export const MembersPage: React.FC = () => {
  return (
    <section aria-label="Memberships" className="space-y-4">
      <h2 className="text-2xl font-semibold" style={{ color: '#003d82' }}>Memberships & Billing</h2>
      <MembershipDashboard />
    </section>
  );
};
