import React from 'react';
import { Star, MapPin, Euro, Clock, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { SortOption } from '../../pages/Search';

interface ResultsGridProps {
  viewMode: 'grid' | 'map';
  sortBy: SortOption;
}

const ResultsGrid: React.FC<ResultsGridProps> = ({ viewMode }) => {
  // Mock data - in production this would come from an API
  const results = [
    {
      id: 1,
      name: "Mary O'Connor",
      rating: 4.9,
      reviews: 24,
      location: "Blackrock, Dublin",
      distance: 2.5,
      rate: 15,
      availability: ["Full Time", "Part Time"],
      tuslaRegistered: true,
      gardaVetted: true,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      id: 2,
      name: "Sarah Murphy",
      rating: 4.8,
      reviews: 18,
      location: "Stillorgan, Dublin",
      distance: 3.1,
      rate: 16,
      availability: ["After School"],
      tuslaRegistered: true,
      gardaVetted: true,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200"
    }
  ];

  if (viewMode === 'map') {
    return (
      <div className="bg-white rounded-3 shadow-sm p-3" style={{ height: 'calc(100vh - 200px)' }}>
        <div className="w-100 h-100 bg-light rounded d-flex align-items-center justify-content-center">
          <p className="text-muted">Map view coming soon</p>
        </div>
      </div>
    );
  }

  return (
    <div className="row g-4">
      {results.map(result => (
        <div key={result.id} className="col-md-6">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex mb-3">
                <img
                  src={result.image}
                  alt={result.name}
                  className="rounded-circle me-3"
                  width="64"
                  height="64"
                />
                <div>
                  <h5 className="card-title mb-1">{result.name}</h5>
                  <div className="d-flex align-items-center">
                    <Star size={16} className="text-warning me-1" fill="currentColor" />
                    <span className="fw-medium me-1">{result.rating}</span>
                    <span className="text-muted small">({result.reviews} reviews)</span>
                  </div>
                </div>
              </div>

              <div className="d-flex align-items-center mb-2">
                <MapPin size={16} className="text-muted me-2" />
                <span className="me-2">{result.location}</span>
                <span className="text-muted small">({result.distance} km)</span>
              </div>

              <div className="d-flex align-items-center mb-3">
                <Euro size={16} className="text-muted me-2" />
                <span className="fw-medium">{result.rate}</span>
                <span className="text-muted">/hour</span>
              </div>

              <div className="mb-3">
                <div className="d-flex align-items-center mb-2">
                  <Clock size={16} className="text-muted me-2" />
                  <span className="text-muted">Available for:</span>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  {result.availability.map(type => (
                    <span key={type} className="badge bg-light text-dark">{type}</span>
                  ))}
                </div>
              </div>

              <div className="d-flex flex-wrap gap-3">
                {result.tuslaRegistered && (
                  <div className="d-flex align-items-center">
                    <Shield size={16} className="text-success me-1" />
                    <span className="small">Tusla Registered</span>
                  </div>
                )}
                {result.gardaVetted && (
                  <div className="d-flex align-items-center">
                    <CheckCircle size={16} className="text-success me-1" />
                    <span className="small">Garda Vetted</span>
                  </div>
                )}
              </div>
            </div>
            <div className="card-footer bg-white border-top-0 pt-0">
              <div className="d-flex gap-2">
                <Link 
                  to={`/childminder/${result.id}`} 
                  className="btn btn-outline-primary flex-grow-1"
                >
                  View Profile
                </Link>
                <Link 
                  to={`/childminder/${result.id}/book`} 
                  className="btn btn-primary flex-grow-1"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResultsGrid;