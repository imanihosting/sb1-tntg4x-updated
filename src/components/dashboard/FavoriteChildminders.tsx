import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const FavoriteChildminders: React.FC = () => {
  const favorites = [
    {
      id: 1,
      name: "Mary O'Connor",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100",
      location: "Blackrock, Dublin",
      rating: 4.9
    },
    {
      id: 2,
      name: "Sarah Murphy",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100",
      location: "Stillorgan, Dublin",
      rating: 4.8
    }
  ];

  return (
    <div className="list-group list-group-flush">
      {favorites.map(childminder => (
        <div key={childminder.id} className="list-group-item px-0">
          <div className="d-flex align-items-center">
            <img
              src={childminder.image}
              alt={childminder.name}
              className="rounded-circle me-3"
              width="48"
              height="48"
            />
            <div className="flex-grow-1">
              <h6 className="mb-1">{childminder.name}</h6>
              <div className="d-flex align-items-center mb-1">
                <MapPin size={14} className="text-muted me-1" />
                <small className="text-muted">{childminder.location}</small>
              </div>
              <div className="d-flex align-items-center">
                <Star size={14} className="text-warning me-1" fill="currentColor" />
                <small>{childminder.rating}</small>
              </div>
            </div>
            <Link
              to={`/childminder/${childminder.id}/book`}
              className="btn btn-sm btn-outline-primary"
            >
              Book
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FavoriteChildminders;