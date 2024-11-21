import React from 'react';
import { Calendar, CreditCard, Heart, Star, Clock, ChevronRight } from 'lucide-react';
import CareSchedule from '../../components/dashboard/CareSchedule';
import PaymentHistory from '../../components/dashboard/PaymentHistory';
import FavoriteChildminders from '../../components/dashboard/FavoriteChildminders';

const ParentDashboard: React.FC = () => {
  // Mock data - would come from API
  const stats = {
    activeBookings: 2,
    totalSpent: 850,
    savedChildminders: 5,
    reviewsGiven: 3
  };

  const upcomingCare = [
    {
      id: 1,
      childminder: "Mary O'Connor",
      date: "2024-03-20",
      time: "09:00 - 17:00",
      children: ["Emma", "James"],
      status: "confirmed"
    },
    {
      id: 2,
      childminder: "Sarah Murphy",
      date: "2024-03-22",
      time: "14:00 - 18:00",
      children: ["Emma"],
      status: "pending"
    }
  ];

  return (
    <div className="container-fluid py-4">
      {/* Stats Row */}
      <div className="row g-4 mb-4">
        <div className="col-sm-6 col-xl-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div className="bg-primary bg-opacity-10 p-3 rounded-3">
                  <Calendar className="text-primary" size={24} />
                </div>
                <div className="ms-3">
                  <h6 className="mb-1">Active Bookings</h6>
                  <h3 className="mb-0">{stats.activeBookings}</h3>
                </div>
              </div>
              <a href="#" className="small text-decoration-none">View Schedule <ChevronRight size={16} /></a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div className="bg-success bg-opacity-10 p-3 rounded-3">
                  <CreditCard className="text-success" size={24} />
                </div>
                <div className="ms-3">
                  <h6 className="mb-1">Total Spent</h6>
                  <h3 className="mb-0">€{stats.totalSpent}</h3>
                </div>
              </div>
              <a href="#" className="small text-decoration-none">View Payments <ChevronRight size={16} /></a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div className="bg-danger bg-opacity-10 p-3 rounded-3">
                  <Heart className="text-danger" size={24} />
                </div>
                <div className="ms-3">
                  <h6 className="mb-1">Saved Childminders</h6>
                  <h3 className="mb-0">{stats.savedChildminders}</h3>
                </div>
              </div>
              <a href="#" className="small text-decoration-none">View Favorites <ChevronRight size={16} /></a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div className="bg-warning bg-opacity-10 p-3 rounded-3">
                  <Star className="text-warning" size={24} />
                </div>
                <div className="ms-3">
                  <h6 className="mb-1">Reviews Given</h6>
                  <h3 className="mb-0">{stats.reviewsGiven}</h3>
                </div>
              </div>
              <a href="#" className="small text-decoration-none">Write Review <ChevronRight size={16} /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {/* Left Column */}
        <div className="col-lg-8">
          {/* Care Schedule */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-header bg-white py-3">
              <h5 className="card-title mb-0">Care Schedule</h5>
            </div>
            <div className="card-body">
              <CareSchedule />
            </div>
          </div>

          {/* Payment History */}
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white py-3">
              <h5 className="card-title mb-0">Payment History</h5>
            </div>
            <div className="card-body">
              <PaymentHistory />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-lg-4">
          {/* Upcoming Care */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">Upcoming Care</h5>
              <a href="#" className="btn btn-sm btn-outline-primary">View All</a>
            </div>
            <div className="card-body p-0">
              {upcomingCare.map(booking => (
                <div key={booking.id} className="p-3 border-bottom">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h6 className="mb-0">{booking.childminder}</h6>
                    <span className={`badge bg-${booking.status === 'confirmed' ? 'success' : 'warning'}`}>
                      {booking.status}
                    </span>
                  </div>
                  <div className="small text-muted">
                    <div>{booking.date}</div>
                    <div>{booking.time}</div>
                    <div>Children: {booking.children.join(', ')}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Favorite Childminders */}
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white py-3">
              <h5 className="card-title mb-0">Favorite Childminders</h5>
            </div>
            <div className="card-body">
              <FavoriteChildminders />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentDashboard;