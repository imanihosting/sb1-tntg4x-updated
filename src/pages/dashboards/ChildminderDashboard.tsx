import React from 'react';
import { Calendar, DollarSign, FileText, Star, Bell, Users, ChevronRight } from 'lucide-react';
import BookingCalendar from '../../components/dashboard/BookingCalendar';
import EarningsChart from '../../components/dashboard/EarningsChart';
import DocumentStatus from '../../components/dashboard/DocumentStatus';
import ReviewsWidget from '../../components/dashboard/ReviewsWidget';

const ChildminderDashboard: React.FC = () => {
  // Mock data - would come from API
  const stats = {
    activeBookings: 5,
    monthlyEarnings: 1250,
    totalReviews: 24,
    averageRating: 4.8
  };

  const upcomingBookings = [
    {
      id: 1,
      parent: "Sarah Murphy",
      children: 2,
      date: "2024-03-20",
      time: "09:00 - 17:00",
      status: "confirmed"
    },
    {
      id: 2,
      parent: "John Smith",
      children: 1,
      date: "2024-03-21",
      time: "14:00 - 18:00",
      status: "pending"
    }
  ];

  const documents = [
    {
      type: "Garda Vetting",
      status: "valid",
      expiryDate: "2025-03-15"
    },
    {
      type: "First Aid Certificate",
      status: "expiring",
      expiryDate: "2024-04-30"
    },
    {
      type: "Insurance",
      status: "valid",
      expiryDate: "2025-01-01"
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
              <a href="#" className="small text-decoration-none">View Calendar <ChevronRight size={16} /></a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div className="bg-success bg-opacity-10 p-3 rounded-3">
                  <DollarSign className="text-success" size={24} />
                </div>
                <div className="ms-3">
                  <h6 className="mb-1">Monthly Earnings</h6>
                  <h3 className="mb-0">€{stats.monthlyEarnings}</h3>
                </div>
              </div>
              <a href="#" className="small text-decoration-none">View Earnings <ChevronRight size={16} /></a>
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
                  <h6 className="mb-1">Average Rating</h6>
                  <h3 className="mb-0">{stats.averageRating}/5.0</h3>
                </div>
              </div>
              <a href="#" className="small text-decoration-none">View Reviews <ChevronRight size={16} /></a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div className="bg-info bg-opacity-10 p-3 rounded-3">
                  <Users className="text-info" size={24} />
                </div>
                <div className="ms-3">
                  <h6 className="mb-1">Total Reviews</h6>
                  <h3 className="mb-0">{stats.totalReviews}</h3>
                </div>
              </div>
              <a href="#" className="small text-decoration-none">View All <ChevronRight size={16} /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {/* Left Column */}
        <div className="col-lg-8">
          {/* Calendar */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-header bg-white py-3">
              <h5 className="card-title mb-0">Booking Calendar</h5>
            </div>
            <div className="card-body">
              <BookingCalendar />
            </div>
          </div>

          {/* Earnings Chart */}
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white py-3">
              <h5 className="card-title mb-0">Earnings Overview</h5>
            </div>
            <div className="card-body">
              <EarningsChart />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-lg-4">
          {/* Document Status */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-header bg-white py-3">
              <h5 className="card-title mb-0">Document Status</h5>
            </div>
            <div className="card-body">
              <DocumentStatus documents={documents} />
            </div>
          </div>

          {/* Upcoming Bookings */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">Upcoming Bookings</h5>
              <a href="#" className="btn btn-sm btn-outline-primary">View All</a>
            </div>
            <div className="card-body p-0">
              {upcomingBookings.map(booking => (
                <div key={booking.id} className="p-3 border-bottom">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h6 className="mb-0">{booking.parent}</h6>
                    <span className={`badge bg-${booking.status === 'confirmed' ? 'success' : 'warning'}`}>
                      {booking.status}
                    </span>
                  </div>
                  <div className="small text-muted">
                    <div>{booking.date}</div>
                    <div>{booking.time}</div>
                    <div>{booking.children} {booking.children === 1 ? 'child' : 'children'}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews Widget */}
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white py-3">
              <h5 className="card-title mb-0">Recent Reviews</h5>
            </div>
            <div className="card-body">
              <ReviewsWidget />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildminderDashboard;