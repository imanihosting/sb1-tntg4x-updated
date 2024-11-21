import React from 'react';
import { useParams } from 'react-router-dom';
import BookingForm from '../components/booking/BookingForm';
import { Shield, AlertCircle } from 'lucide-react';

const Booking: React.FC = () => {
  const { id } = useParams();

  // Mock data - would come from API in production
  const childminder = {
    id: id,
    name: "Mary O'Connor",
    hourlyRate: 15,
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="h3 mb-4">Book a Session with {childminder.name}</h1>
          
          {/* Important Information */}
          <div className="alert alert-info mb-4">
            <div className="d-flex">
              <AlertCircle size={24} className="me-2" />
              <div>
                <h6 className="alert-heading">Important Booking Information</h6>
                <ul className="mb-0 small">
                  <li>Bookings must be made at least 24 hours in advance (except emergency bookings)</li>
                  <li>Bank holiday and weekend rates include a 50% surcharge</li>
                  <li>Emergency bookings (less than 24 hours notice) include a 25% surcharge</li>
                  <li>Additional children are charged at 50% of the base rate</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <Shield size={24} className="text-success me-3" />
                <div>
                  <h6 className="mb-1">Secure Booking Protection</h6>
                  <p className="small text-muted mb-0">
                    Your booking is protected by our secure payment system and childminder verification process
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <BookingForm 
                childminderId={childminder.id || ''} 
                hourlyRate={childminder.hourlyRate} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;