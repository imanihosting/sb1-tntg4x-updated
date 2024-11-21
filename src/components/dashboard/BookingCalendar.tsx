import React from 'react';
import { Calendar } from 'lucide-react';

const BookingCalendar: React.FC = () => {
  return (
    <div className="text-center p-4">
      <Calendar size={48} className="text-muted mb-3" />
      <p>Calendar component will be integrated here</p>
    </div>
  );
};

export default BookingCalendar;