import React, { useState, useRef, useEffect } from 'react';
import { Send, Paperclip } from 'lucide-react';
import type { Message } from '../../types/messages';

interface ProfileMessageThreadProps {
  recipientId: string;
  recipientName: string;
  recipientImage: string;
}

const ProfileMessageThread: React.FC<ProfileMessageThreadProps> = ({
  recipientId,
  recipientName,
  recipientImage
}) => {
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Mock messages - would come from API
  const messages: Message[] = [
    {
      id: '1',
      senderId: 'other',
      content: 'Hi there! How can I help you today?',
      timestamp: '10:30 AM',
      status: 'read'
    },
    {
      id: '2',
      senderId: 'user',
      content: 'Hello! I would like to know about your availability next week.',
      timestamp: '10:31 AM',
      status: 'read'
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle message submission
      setMessage('');
      scrollToBottom();
    }
  };

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-header bg-white py-3">
        <div className="d-flex align-items-center">
          <img
            src={recipientImage}
            alt={recipientName}
            className="rounded-circle me-2"
            width="32"
            height="32"
          />
          <h3 className="h6 mb-0">Message {recipientName}</h3>
        </div>
      </div>
      <div className="card-body p-3" style={{ height: '300px', overflowY: 'auto' }}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`d-flex mb-3 ${msg.senderId === 'user' ? 'justify-content-end' : ''}`}
          >
            <div
              className={`rounded-3 p-2 ${
                msg.senderId === 'user'
                  ? 'bg-primary text-white'
                  : 'bg-light'
              }`}
              style={{ maxWidth: '75%' }}
            >
              <div className="small">{msg.content}</div>
              <div className={`d-flex justify-content-end ${
                msg.senderId === 'user' ? 'text-white-50' : 'text-muted'
              }`}>
                <small>{msg.timestamp}</small>
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="card-footer bg-white">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <button type="button" className="btn btn-outline-secondary">
              <Paperclip size={18} />
            </button>
            <input
              type="text"
              className="form-control"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!message.trim()}
            >
              <Send size={18} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileMessageThread;