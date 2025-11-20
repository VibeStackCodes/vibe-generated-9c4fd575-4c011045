import React from 'react';
import { LeadForm } from '@/components/LeadForm';

export const HomePage: React.FC = () => {
  return (
    <section aria-label="Home" className="space-y-6">
      <div className="bg-primary text-white rounded-xl p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Launch fast. Scale confidently.</h1>
            <p className="mt-2">Mobile-first website with class scheduling, payments, memberships, and analytics—built for fitness businesses.</p>
          </div>
          <button className="bg-accent text-white px-5 py-3 rounded-md font-semibold">Get Started</button>
        </div>
      </div>
      <LeadForm />
      <section aria-label="Brand benefits" className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {['Fast Launch','Integrated Payments','Centralized Analytics'].map((t)=> (
          <div key={t} className="p-4 border rounded-md shadow-sm bg-white">{t}</div>
        ))}
      </section>
    </section>
  );
};
