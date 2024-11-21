import React, { useState } from 'react';
import ConversationList from '../components/messages/ConversationList';
import MessageThread from '../components/messages/MessageThread';
import { MessageCircle } from 'lucide-react';

const Messages: React.FC = () => {
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [isMobileListVisible, setIsMobileListVisible] = useState(true);

  const handleConversationSelect = (id: string) => {
    setSelectedConversation(id);
    setIsMobileListVisible(false);
  };

  return (
    <div className="flex-grow-1 bg-light">
      <div className="container-fluid h-100">
        <div className="row h-100" style={{ minHeight: 'calc(100vh - 72px)' }}>
          {/* Mobile Toggle */}
          <div className="d-lg-none w-100 border-bottom bg-white p-3">
            <button
              className="btn btn-outline-primary btn-sm"
              onClick={() => setIsMobileListVisible(!isMobileListVisible)}
            >
              <MessageCircle size={18} className="me-2" />
              {isMobileListVisible ? 'View Message' : 'Back to Conversations'}
            </button>
          </div>

          {/* Conversation List */}
          <div className={`col-lg-4 border-end px-0 bg-white ${isMobileListVisible ? 'd-block' : 'd-none d-lg-block'}`}>
            <ConversationList
              onSelect={handleConversationSelect}
              selectedId={selectedConversation}
            />
          </div>

          {/* Message Thread */}
          <div className={`col-lg-8 px-0 ${!isMobileListVisible ? 'd-block' : 'd-none d-lg-block'}`}>
            {selectedConversation ? (
              <MessageThread conversationId={selectedConversation} />
            ) : (
              <div className="h-100 d-flex align-items-center justify-content-center bg-white">
                <div className="text-center text-muted">
                  <MessageCircle size={48} className="mb-3" />
                  <p>Select a conversation to start messaging</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;