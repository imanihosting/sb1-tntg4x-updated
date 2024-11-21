import React, { useState, useRef, useEffect } from 'react';
import { Paperclip, Send, AlertTriangle, Info } from 'lucide-react';
import MessageBubble from './MessageBubble';
import AttachmentModal from './AttachmentModal';
import { Message } from '../../types/messages';

interface MessageThreadProps {
  conversationId: string;
}

const MessageThread: React.FC<MessageThreadProps> = ({ conversationId }) => {
  const [message, setMessage] = useState('');
  const [showAttachModal, setShowAttachModal] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Mock data - would come from API
  const conversation = {
    id: conversationId,
    name: "Mary O'Connor",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100",
    isOnline: true,
    isVerified: true
  };

  const messages: Message[] = [
    {
      id: '1',
      senderId: 'user',
      content: 'Hi Mary, what time should I drop off the kids tomorrow?',
      timestamp: '10:30 AM',
      status: 'sent'
    },
    {
      id: '2',
      senderId: 'other',
      content: 'Hello! Anytime between 8 AM and 9 AM works for me.',
      timestamp: '10:31 AM',
      status: 'read'
    },
    {
      id: '3',
      senderId: 'user',
      content: "Perfect, we will aim for 8:30 AM then.",
      timestamp: '10:32 AM',
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
    <div className="d-flex flex-column h-100 bg-white">
      {/* Header */}
      <div className="p-3 border-bottom">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <img
              src={conversation.image}
              alt={conversation.name}
              className="rounded-circle me-2"
              width="40"
              height="40"
            />
            <div>
              <h2 className="h6 mb-0">{conversation.name}</h2>
              <small className={`${conversation.isOnline ? 'text-success' : 'text-muted'}`}>
                {conversation.isOnline ? 'Online' : 'Offline'}
              </small>
            </div>
          </div>
          <button className="btn btn-danger">
            <AlertTriangle size={18} className="me-2" />
            Emergency Contact
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-grow-1 overflow-auto p-3" style={{ backgroundColor: '#f8f9fa' }}>
        {/* GDPR Notice */}
        <div className="alert alert-info mb-3 d-flex align-items-center">
          <Info size={18} className="me-2" />
          <small>
            Messages are retained for 12 months in accordance with our GDPR policy.
            <a href="/privacy" className="ms-1">Learn more</a>
          </small>
        </div>

        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 border-top">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => setShowAttachModal(true)}
            >
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

      {/* Attachment Modal */}
      <AttachmentModal
        show={showAttachModal}
        onHide={() => setShowAttachModal(false)}
      />
    </div>
  );
};

export default MessageThread;