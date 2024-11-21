export interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
  status: 'sending' | 'sent' | 'delivered' | 'read';
  attachment?: {
    name: string;
    url: string;
    type: string;
  };
}