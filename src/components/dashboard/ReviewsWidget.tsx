import React from 'react';
import { Star } from 'lucide-react';

const ReviewsWidget: React.FC = () => {
  const reviews = [
    {
      id: 1,
      author: "Sarah M.",
      rating: 5,
      date: "2024-03-15",
      content: "Excellent care and very professional!"
    },
    {
      id: 2,
      author: "John D.",
      rating: 5,
      date: "2024-03-10",
      content: "Very reliable and great with kids."
    }
  ];

  return (
    <div className="list-group list-group-flush">
      {reviews.map(review => (
        <div key={review.id} className="list-group-item px-0">
          <div className="d-flex justify-content-between align-items-center mb-1">
            <h6 className="mb-0">{review.author}</h6>
            <div className="d-flex align-items-center">
              <Star size={16} className="text-warning me-1" fill="currentColor" />
              <span className="small">{review.rating}.0</span>
            </div>
          </div>
          <p className="small mb-1">{review.content}</p>
          <small className="text-muted">{review.date}</small>
        </div>
      ))}
    </div>
  );
};

export default ReviewsWidget;