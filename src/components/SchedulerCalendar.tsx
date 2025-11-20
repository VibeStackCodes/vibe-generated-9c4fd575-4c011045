import React, { useMemo } from 'react';
import { Card } from './ui/Card';

type Session = {
  id: string;
  title: string;
  time: string;
  capacity: number;
  booked: number;
};

export interface SchedulerCalendarProps {
  onBook: (sessionId: string) => void;
}

const sessions: Session[] = [
  { id: 's1', title: 'Sunrise Yoga', time: '2025-12-01 06:30', capacity: 20, booked: 8 },
  { id: 's2', title: 'HIIT Blast', time: '2025-12-01 09:00', capacity: 25, booked: 20 },
  { id: 's3', title: 'Pilates Core', time: '2025-12-01 18:00', capacity: 15, booked: 5 },
];

export const SchedulerCalendar: React.FC<SchedulerCalendarProps> = ({ onBook }) => {
  const items = useMemo(() => sessions, []);
  return (
    <Card title="Upcoming Classes">
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {items.map((s) => (
          <li key={s.id} className="border rounded p-3 flex justify-between items-center">
            <div>
              <strong>{s.title}</strong>
              <div className="text-sm text-gray-600">{new Date(s.time).toLocaleString()}</div>
              <div className="text-xs text-gray-500">{s.booked}/{s.capacity} booked</div>
            </div>
            <button
              onClick={() => onBook(s.id)}
              className="bg-primary text-white px-3 py-2 rounded-md hover:bg-blue-700"
            >Book</button>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default SchedulerCalendar;