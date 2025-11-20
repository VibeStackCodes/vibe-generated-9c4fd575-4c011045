import type { Lead } from '@/types/index';

export async function submitLead(data: { name: string; email: string; source?: string }): Promise<Lead> {
  // Simulated network delay
  await new Promise((r) => setTimeout(r, 600));
  return {
    id: 'lead_' + Date.now(),
    name: data.name,
    email: data.email,
    createdAt: new Date().toISOString(),
  } as Lead;
}

export async function fetchLeads(): Promise<Lead[]> {
  await new Promise((r) => setTimeout(r, 300));
  return [];
}
