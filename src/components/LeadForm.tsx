import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { isEmail } from '@/lib/validation';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { submitLead } from '@/services/api';

type LeadFormInputs = {
  name: string;
  email: string;
  source?: string;
};

export const LeadForm: React.FC = () => {
  const { register, handleSubmit, formState } = useForm<LeadFormInputs>();
  const [status, setStatus] = useState<'idle'|'submitting'|'success'|'error'>('idle');
  const onSubmit = useCallback(async (data: LeadFormInputs) => {
    if (!isEmail(data.email)) {
      setStatus('error');
      return;
    }
    setStatus('submitting');
    try {
      await submitLead(data as unknown as any);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }, []);

  return (
    <Card title="Get Early Access">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:flex-row gap-3 items-end">
        <div className="flex-1 w-full">
          <input {...register('name')} placeholder="Your Name" className="border rounded-md w-full px-3 py-2" />
        </div>
        <div className="w-full md:w-1/3">
          <input {...register('email')} placeholder="Email" className="border rounded-md w-full px-3 py-2" />
        </div>
        <div>
          <Button variant="primary" type="submit">Request Access</Button>
        </div>
      </form>
      {status === 'submitting' && <p className="text-sm text-gray-500 mt-2">Submitting...</p>}
      {status === 'success' && <p className="text-sm text-green-600 mt-2">Thanks! We will reach out soon.</p>}
      {status === 'error' && <p className="text-sm text-red-600 mt-2">Please enter a valid email.</p>}
    </Card>
  );
};

export default LeadForm;