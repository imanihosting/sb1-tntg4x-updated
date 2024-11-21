import React from 'react';
import { Check, CheckCheck, Clock, FileText } from 'lucide-react';
import type { Message } from '../../types/messages';

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isOwn = message.senderId === 'user';

  const getStatusIcon = () => {
    switch (message.status) {
      case 'sent':
        return <Check size={14} className="text-muted ms-1" />;
      case 'delivered':
        return <CheckCheck size={14} className="text-muted ms-1" />;
      case 'read':
        return <CheckCheck size={14} className="text-primary ms-1" />;
      default:
        return <Clock size={14} className="text-muted ms-1" />;
    }
  };

  return (
    <div className={`d-flex mb-3 ${isOwn ? 'justify-content-end' : 'justify-content-start'}`}>
      <div
        className={`rounded-3 p-3 ${
          isOwn ? 'bg-primary text-white' : 'bg-white border'
        }`}
        style={{ maxWidth: '75%' }}
      >
        {message.attachment && (
          <div className="mb-2">
            <div className="d-flex align-items-center bg-light rounded p-2">
              <FileText size={18} className="me-2" />
              <span className="small">{message.attachment.name}</span>
            </div>
          </div>
        )}
        <div>{message.content}</div>
        <div className={`d-flex align-items-center justify-content-end mt-1 ${
          isOwn ? 'text-white-50' : 'text-muted'
        }`}>
          <small>{message.timestamp}</small>
          {isOwn && getStatusIcon()}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;