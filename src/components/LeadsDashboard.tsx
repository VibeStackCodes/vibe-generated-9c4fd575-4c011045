import React from 'react';
import { Card } from './ui/Card';
import { Lead } from '@/types/index';

const seed: Lead[] = [
  { id: 'l1', name: 'Jordan Lee', email: 'jordan@example.com', createdAt: new Date().toISOString() },
];

export const LeadsDashboard: React.FC = () => {
  // Simple mock display
  return (
    <Card title="Recent Leads">
      <ul className="space-y-2">
        {seed.map((l)=> (
          <li key={l.id} className="flex justify-between">
            <span>{l.name} • {l.email}</span>
            <span className="text-xs text-gray-500">{new Date(l.createdAt).toLocaleDateString()}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export const LeadsDashboardWithForm: React.FC = () => null; // Placeholder for potential future extension

export default LeadsDashboard;