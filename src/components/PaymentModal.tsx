import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Card } from './ui/Card';

export const PaymentModal: React.FC<{ sessionId: string; onClose: ()=>void; }> = ({ sessionId, onClose }) => {
  const [card, setCard] = useState({ number:'4242424242424242', exp:'12/29', cvc:'123' });
  const [processing, setProcessing] = useState(false);
  const handlePay = async () => {
    setProcessing(true);
    await new Promise((r)=>setTimeout(r, 1000));
    setProcessing(false);
    onClose();
  };
  return (
    <div role="dialog" aria-label="Payment" className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-md p-4 w-full max-w-md">
        <h3 className="text-lg font-semibold mb-2">Checkout</h3>
        <p className="text-sm text-gray-600 mb-4">Session: {sessionId}</p>
        <div className="space-y-2 mb-4">
          <input className="border rounded w-full px-3 py-2" placeholder="Card Number" value={card.number} onChange={(e)=>setCard({ ...card, number: e.target.value })} />
          <div className="flex gap-2">
            <input className="border rounded w-1/2 px-3 py-2" placeholder="MM/YY" value={card.exp} onChange={(e)=>setCard({ ...card, exp: e.target.value })} />
            <input className="border rounded w-1/2 px-3 py-2" placeholder="CVC" value={card.cvc} onChange={(e)=>setCard({ ...card, cvc: e.target.value })} />
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="secondary" onClick={onClose}>Cancel</Button>
          <Button variant="primary" onClick={handlePay} loading={processing}>{processing ? 'Processing' : 'Pay'}</Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;