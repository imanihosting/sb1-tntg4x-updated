import React from 'react';
import SearchForm from './SearchForm';
import TrustBadges from './TrustBadges';
import { Users2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="py-5 bg-gradient-primary">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-flex mb-4">
              <Users2 className="text-white" size={48} />
            </div>
            <h1 className="display-4 fw-bold mb-4 text-white">
              Connecting Families with Trusted Childminders
            </h1>
            <p className="lead mb-4 text-white opacity-90">
              Find qualified, Garda-vetted childminders in your area. Join Ireland's most trusted childminding community.
            </p>
            <div className="bg-white rounded-3 shadow-sm mb-4">
              <SearchForm />
            </div>
            <div className="d-flex justify-content-center">
              <TrustBadges />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;