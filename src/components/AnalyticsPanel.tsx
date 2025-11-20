import React from 'react';
import { Card } from './ui/Card';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  { name: 'Jan', signups: 40, revenue: 4000 },
  { name: 'Feb', signups: 60, revenue: 5200 },
  { name: 'Mar', signups: 80, revenue: 7600 },
  { name: 'Apr', signups: 70, revenue: 6800 },
];

export const AnalyticsPanel: React.FC = () => {
  return (
    <Card title="Performance">
      <div style={{ width: '100%', height: 280 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="signups" stroke="#003d82" strokeWidth={2} />
            <Line type="monotone" dataKey="revenue" stroke="#ff6b35" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default AnalyticsPanel;