import React, { useState, useMemo } from 'react';
import { Card } from './ui/Card';

type Member = {
  id: string;
  name: string;
  email: string;
  membership: string;
  status: 'active'|'paused'|'cancelled';
  joined: string;
};

const seed: Member[] = [
  { id: 'm1', name: 'Alex Kim', email: 'alex@example.com', membership: 'Gold', status: 'active', joined: '2024-01-01' },
  { id: 'm2', name: 'Priya Nair', email: 'priya@example.com', membership: 'Silver', status: 'paused', joined: '2024-03-12' },
];

export const MembershipDashboard: React.FC = () => {
  const [members, setMembers] = useState<Member[]>(seed);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const add = () => {
    if (!name || !email) return;
    const m: Member = { id: `m${Date.now()}`, name, email, membership: 'Bronze', status: 'active', joined: new Date().toISOString().slice(0,10) };
    setMembers((p)=>[m, ...p]);
    setName('');
    setEmail('');
  };
  const activeCount = useMemo(() => members.filter((m)=>m.status==='active').length, [members]);
  return (
    <Card title={`Members (${activeCount} active)`}>
      <div className="flex flex-col md:flex-row gap-2 mb-3">
        <input className="border rounded px-3 py-2" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
        <input className="border rounded px-3 py-2" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <button className="bg-primary text-white rounded-md px-4 py-2" onClick={add}>Add</button>
      </div>
      <ul className="divide-y">
        {members.map((m)=> (
          <li key={m.id} className="py-2 flex justify-between items-center">
            <span>{m.name} • {m.membership}</span>
            <span className={`text-${m.status==='active'?'green':'orange'}-600`}>{m.status}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default MembershipDashboard;