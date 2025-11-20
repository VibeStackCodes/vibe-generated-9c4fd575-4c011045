import React, { useCallback, useState } from 'react';
import { SchedulerCalendar } from '@/components/SchedulerCalendar';
import { PaymentModal } from '@/components/PaymentModal';

export const SchedulePage: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [payOpen, setPayOpen] = useState(false);

  const onBook = useCallback((sessionId: string) => {
    setSelected(sessionId);
    setPayOpen(true);
  }, []);

  return (
    <section aria-label="Schedule" className="space-y-4">
      <h2 className="text-2xl font-semibold" style={{ color: '#003d82' }}>Class Scheduling & Booking</h2>
      <SchedulerCalendar onBook={onBook} />
      {payOpen && (
        <PaymentModal
          sessionId={selected!}
          onClose={() => setPayOpen(false)}
        />
      )}
    </section>
  );
};
