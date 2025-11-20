export interface Lead {
  id: string;
  name: string;
  email: string;
  createdAt?: string;
}

export interface Member {
  id: string;
  name: string;
  email: string;
  membership: string;
  status: 'active' | 'paused' | 'cancelled';
  joined: string;
}

export interface ClassSession {
  id: string;
  title: string;
  time: string;
  capacity: number;
  booked: number;
}

export interface Booking {
  id: string;
  memberId: string;
  sessionId: string;
  amount: number;
}

export type ApiResponse<T> = {
  data: T;
  meta?: {
    timestamp?: string;
    requestId?: string;
  };
};

export interface ApiError {
  message: string;
  code?: string;
  details?: Record<string, string[]>;
}
