import React from 'react';
import { Bell, Shield, Search } from 'lucide-react';

interface ConversationListProps {
  onSelect: (id: string) => void;
  selectedId: string | null;
}

const ConversationList: React.FC<ConversationListProps> = ({ onSelect, selectedId }) => {
  // Mock data - would come from API
  const conversations = [
    {
      id: '1',
      name: "Mary O'Connor",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100",
      lastMessage: "What time should I arrive tomorrow?",
      timestamp: "10:30 AM",
      unread: 2,
      isOnline: true,
      isVerified: true
    },
    {
      id: '2',
      name: "Sarah Murphy",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100",
      lastMessage: "The kids had a great time today!",
      timestamp: "Yesterday",
      unread: 0,
      isOnline: false,
      isVerified: true
    }
  ];

  return (
    <div className="d-flex flex-column h-100">
      {/* Header */}
      <div className="p-3 border-bottom">
        <h1 className="h5 mb-3">Messages</h1>
        <div className="input-group">
          <span className="input-group-text bg-light border-end-0">
            <Search size={18} />
          </span>
          <input
            type="text"
            className="form-control bg-light border-start-0"
            placeholder="Search conversations..."
          />
        </div>
      </div>

      {/* Conversations */}
      <div className="flex-grow-1 overflow-auto">
        {conversations.map(conversation => (
          <div
            key={conversation.id}
            className={`d-flex align-items-center p-3 border-bottom cursor-pointer ${
              selectedId === conversation.id ? 'bg-light' : ''
            }`}
            onClick={() => onSelect(conversation.id)}
            role="button"
          >
            <div className="position-relative">
              <img
                src={conversation.image}
                alt={conversation.name}
                className="rounded-circle"
                width="48"
                height="48"
              />
              {conversation.isOnline && (
                <span
                  className="position-absolute bottom-0 end-0 bg-success rounded-circle border border-white"
                  style={{ width: '12px', height: '12px' }}
                ></span>
              )}
            </div>
            <div className="ms-3 flex-grow-1">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <div className="d-flex align-items-center">
                  <span className="fw-medium">{conversation.name}</span>
                  {conversation.isVerified && (
                    <Shield size={14} className="text-primary ms-1" />
                  )}
                </div>
                <small className="text-muted">{conversation.timestamp}</small>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span className="text-muted small text-truncate" style={{ maxWidth: '180px' }}>
                  {conversation.lastMessage}
                </span>
                {conversation.unread > 0 && (
                  <span className="badge bg-primary rounded-pill">{conversation.unread}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Notification Settings */}
      <div className="p-3 border-top bg-white">
        <button className="btn btn-light w-100 d-flex align-items-center justify-content-center">
          <Bell size={18} className="me-2" />
          Notification Settings
        </button>
      </div>
    </div>
  );
};

export default ConversationList;