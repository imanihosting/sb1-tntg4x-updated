import React from 'react';
import { Shield, CheckCircle, Award } from 'lucide-react';

const TrustBadges: React.FC = () => {
  return (
    <div className="d-flex flex-wrap gap-4 py-3">
      <div className="d-flex align-items-center">
        <Shield className="text-success me-2" size={24} />
        <span className="text-white">Tusla Registered</span>
      </div>
      <div className="d-flex align-items-center">
        <CheckCircle className="text-success me-2" size={24} />
        <span className="text-white">Garda Vetted</span>
      </div>
      <div className="d-flex align-items-center">
        <Award className="text-success me-2" size={24} />
        <span className="text-white">First Aid Certified</span>
      </div>
    </div>
  );
};

export default TrustBadges;