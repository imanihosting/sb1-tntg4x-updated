import React from 'react';
import { TrendingUp } from 'lucide-react';

const EarningsChart: React.FC = () => {
  return (
    <div className="text-center p-4">
      <TrendingUp size={48} className="text-muted mb-3" />
      <p>Earnings chart will be integrated here</p>
    </div>
  );
};

export default EarningsChart;