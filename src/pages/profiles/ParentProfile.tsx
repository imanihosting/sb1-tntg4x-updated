import React, { useState } from 'react';
import { Users, MapPin, Calendar, Heart, Clock, MessageCircle } from 'lucide-react';
import { useParams } from 'react-router-dom';
import ProfileMessageThread from '../../components/messages/ProfileMessageThread';

const ParentProfile: React.FC = () => {
  const { id } = useParams();
  const [showMessages, setShowMessages] = useState(false);

  // Mock data - would come from API in production
  const profile = {
    name: "Sarah Murphy",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100",
    location: "Stillorgan, Dublin",
    children: [
      { name: "Emma", age: 4, requirements: "No specific requirements" },
      { name: "James", age: 6, requirements: "Mild dairy allergy" }
    ],
    careRequirements: {
      type: "After School Care",
      schedule: "Monday to Friday, 2:30 PM - 6:00 PM",
      preferences: [
        "School collection required",
        "Help with homework",
        "Light meal preparation",
        "Indoor and outdoor activities"
      ]
    }
  };

  return (
    <div className="container py-5">
      <div className="row g-4">
        {/* Left Column */}
        <div className="col-lg-4">
          {/* Family Overview Card */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-header bg-white">
              <h2 className="h5 mb-0">Family Overview</h2>
            </div>
            <div className="card-body">
              <div className="d-flex align-items-center mb-4">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="rounded-circle me-3"
                  width="64"
                  height="64"
                />
                <div>
                  <h3 className="h6 mb-1">{profile.name}</h3>
                  <div className="d-flex align-items-center text-muted">
                    <MapPin size={16} className="me-1" />
                    <small>{profile.location}</small>
                  </div>
                </div>
              </div>

              <button 
                className="btn btn-outline-primary w-100 d-flex align-items-center justify-content-center mb-4"
                onClick={() => setShowMessages(!showMessages)}
              >
                <MessageCircle size={18} className="me-2" />
                {showMessages ? 'Hide Messages' : 'Send Message'}
              </button>

              {showMessages && (
                <div className="mb-4">
                  <ProfileMessageThread
                    recipientId={id || ''}
                    recipientName={profile.name}
                    recipientImage={profile.image}
                  />
                </div>
              )}

              <h4 className="h6 mb-3">Children</h4>
              {profile.children.map((child, index) => (
                <div key={index} className="mb-3">
                  <div className="fw-medium">{child.name}</div>
                  <div className="small text-muted">Age: {child.age}</div>
                  {child.requirements && (
                    <div className="small text-muted">Note: {child.requirements}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Rest of the left column content... */}
          {/* Previous care requirements card remains unchanged */}
        </div>

        {/* Right Column */}
        {/* Previous content remains unchanged */}
      </div>
    </div>
  );
};

export default ParentProfile;