import React, { useState } from 'react';
import { Shield, CheckCircle, Award, MapPin, Euro, Clock, Calendar, Star, MessageCircle } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import ProfileMessageThread from '../../components/messages/ProfileMessageThread';

interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  content: string;
}

interface Qualification {
  type: string;
  label: string;
  number?: string;
  expiry?: string;
  year?: string;
}

const ChildminderProfile: React.FC = () => {
  const { id } = useParams();
  const [showMessages, setShowMessages] = useState(false);

  // Mock data - would come from API in production
  const profile = {
    name: "Mary O'Connor",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=400",
    rating: 4.9,
    reviews: 24,
    location: "Blackrock, Dublin",
    radius: 5,
    rate: 15,
    experience: 8,
    qualifications: [
      { type: 'tusla', label: 'Tusla Registered', number: 'TU123456' },
      { type: 'garda', label: 'Garda Vetted', number: 'GV789012' },
      { type: 'firstaid', label: 'First Aid Certified', expiry: '2025-06-30' },
      { type: 'childcare', label: 'QQI Level 6 in Childcare', year: '2018' }
    ] as Qualification[],
    availability: {
      monday: { morning: true, afternoon: true, evening: false },
      tuesday: { morning: true, afternoon: true, evening: false },
      wednesday: { morning: true, afternoon: true, evening: false },
      thursday: { morning: true, afternoon: true, evening: false },
      friday: { morning: true, afternoon: true, evening: false }
    },
    services: [
      'Full Time Care',
      'Part Time Care',
      'After School Care',
      'School Drop-off/Collection'
    ],
    reviewsList: [
      {
        id: 1,
        author: 'Sarah M.',
        rating: 5,
        date: '2024-02-15',
        content: 'Mary is absolutely wonderful with children. Professional, caring, and always reliable.'
      },
      {
        id: 2,
        author: 'John D.',
        rating: 5,
        date: '2024-01-20',
        content: 'We could not be happier with Mary. She has been amazing with our two children.'
      }
    ] as Review[]
  };

  return (
    <div className="container py-5">
      <div className="row g-4">
        {/* Left Column */}
        <div className="col-lg-4">
          {/* Profile Card */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body text-center">
              <img
                src={profile.image}
                alt={profile.name}
                className="rounded-circle mb-3"
                width="150"
                height="150"
              />
              <h1 className="h3 mb-2">{profile.name}</h1>
              <div className="d-flex align-items-center justify-content-center mb-3">
                <Star size={20} className="text-warning me-1" fill="currentColor" />
                <span className="fw-medium me-1">{profile.rating}</span>
                <span className="text-muted">({profile.reviews} reviews)</span>
              </div>
              <div className="d-flex align-items-center justify-content-center mb-3">
                <MapPin size={16} className="text-muted me-2" />
                <span>{profile.location}</span>
              </div>
              <div className="d-grid gap-2">
                <Link 
                  to={`/childminder/${id}/book`} 
                  className="btn btn-primary"
                >
                  Book with {profile.name.split(' ')[0]}
                </Link>
                <button 
                  className="btn btn-outline-primary d-flex align-items-center justify-content-center"
                  onClick={() => setShowMessages(!showMessages)}
                >
                  <MessageCircle size={18} className="me-2" />
                  {showMessages ? 'Hide Messages' : 'Send Message'}
                </button>
              </div>
            </div>
          </div>

          {/* Message Thread */}
          {showMessages && (
            <div className="mb-4">
              <ProfileMessageThread
                recipientId={id || ''}
                recipientName={profile.name}
                recipientImage={profile.image}
              />
            </div>
          )}

          {/* Rest of the left column content... */}
          {/* Previous qualifications and services cards remain unchanged */}
        </div>

        {/* Right Column */}
        {/* Previous content remains unchanged */}
      </div>
    </div>
  );
};

export default ChildminderProfile;