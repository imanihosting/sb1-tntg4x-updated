import React from 'react';
import { Calendar } from 'lucide-react';

const CareSchedule: React.FC = () => {
  return (
    <div className="text-center p-4">
      <Calendar size={48} className="text-muted mb-3" />
      <p>Care schedule calendar will be integrated here</p>
    </div>
  );
};

export default CareSchedule;