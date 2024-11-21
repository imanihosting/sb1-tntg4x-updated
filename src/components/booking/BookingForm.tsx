import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Calendar, Clock, AlertCircle, Euro } from 'lucide-react';
import { addDays, isWeekend, format } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";

interface BookingFormProps {
  childminderId: string;
  hourlyRate: number;
}

const BookingForm: React.FC<BookingFormProps> = ({ childminderId, hourlyRate }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [startTime, setStartTime] = useState<string>('09:00');
  const [duration, setDuration] = useState<number>(4);
  const [isEmergency, setIsEmergency] = useState(false);
  const [childCount, setChildCount] = useState(1);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  // Irish bank holidays 2024
  const bankHolidays = [
    new Date(2024, 0, 1),  // New Year's Day
    new Date(2024, 2, 17), // St. Patrick's Day
    new Date(2024, 3, 1),  // Easter Monday
    new Date(2024, 4, 6),  // May Bank Holiday
    new Date(2024, 5, 3),  // June Bank Holiday
    new Date(2024, 7, 5),  // August Bank Holiday
    new Date(2024, 9, 28), // October Bank Holiday
    new Date(2024, 11, 25), // Christmas Day
    new Date(2024, 11, 26), // St. Stephen's Day
  ];

  const isHoliday = (date: Date) => {
    return bankHolidays.some(holiday => 
      holiday.getDate() === date.getDate() &&
      holiday.getMonth() === date.getMonth() &&
      holiday.getYear() === date.getYear()
    );
  };

  const calculateTotal = () => {
    if (!startDate) return 0;
    const baseRate = hourlyRate * duration;
    const holidayRate = isHoliday(startDate) ? baseRate * 0.5 : 0;
    const emergencyRate = isEmergency ? baseRate * 0.25 : 0;
    const multiChildRate = childCount > 1 ? baseRate * ((childCount - 1) * 0.5) : 0;
    return baseRate + holidayRate + emergencyRate + multiChildRate;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    console.log({
      childminderId,
      startDate,
      startTime,
      duration,
      isEmergency,
      childCount,
      total: calculateTotal()
    });
  };

  return (
    <form onSubmit={handleSubmit} className="needs-validation" noValidate>
      {/* Date Selection */}
      <div className="mb-4">
        <label className="form-label">Select Date</label>
        <div className="input-group">
          <span className="input-group-text">
            <Calendar size={18} />
          </span>
          <DatePicker
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
            minDate={new Date()}
            maxDate={addDays(new Date(), 90)}
            filterDate={date => !isWeekend(date)}
            className="form-control"
            dateFormat="dd/MM/yyyy"
            placeholderText="Select a date"
            required
          />
        </div>
        {startDate && isHoliday(startDate) && (
          <div className="alert alert-info mt-2 py-2 small">
            <AlertCircle size={16} className="me-1" />
            Bank holiday rates apply
          </div>
        )}
      </div>

      {/* Time Selection */}
      <div className="mb-4">
        <label className="form-label">Start Time</label>
        <div className="input-group">
          <span className="input-group-text">
            <Clock size={18} />
          </span>
          <select 
            className="form-select" 
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            required
          >
            {Array.from({ length: 24 }, (_, i) => {
              const hour = i.toString().padStart(2, '0');
              return <option key={hour} value={`${hour}:00`}>{`${hour}:00`}</option>;
            })}
          </select>
        </div>
      </div>

      {/* Duration */}
      <div className="mb-4">
        <label className="form-label">Duration (hours)</label>
        <select 
          className="form-select"
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          required
        >
          {[2, 4, 6, 8].map(hours => (
            <option key={hours} value={hours}>{hours} hours</option>
          ))}
        </select>
      </div>

      {/* Number of Children */}
      <div className="mb-4">
        <label className="form-label">Number of Children</label>
        <select
          className="form-select"
          value={childCount}
          onChange={(e) => setChildCount(Number(e.target.value))}
          required
        >
          {[1, 2, 3, 4].map(num => (
            <option key={num} value={num}>{num} {num === 1 ? 'child' : 'children'}</option>
          ))}
        </select>
      </div>

      {/* Emergency Booking */}
      <div className="mb-4">
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="emergencyBooking"
            checked={isEmergency}
            onChange={(e) => setIsEmergency(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="emergencyBooking">
            Emergency Booking (25% surcharge)
          </label>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="card bg-light border-0 mb-4">
        <div className="card-body">
          <h3 className="h6 mb-3">Price Breakdown</h3>
          <div className="d-flex justify-content-between mb-2">
            <span>Base Rate (€{hourlyRate}/hour × {duration}hrs)</span>
            <span>€{hourlyRate * duration}</span>
          </div>
          {isEmergency && (
            <div className="d-flex justify-content-between mb-2">
              <span>Emergency Surcharge (25%)</span>
              <span>€{(hourlyRate * duration * 0.25).toFixed(2)}</span>
            </div>
          )}
          {startDate && isHoliday(startDate) && (
            <div className="d-flex justify-content-between mb-2">
              <span>Bank Holiday Rate (50%)</span>
              <span>€{(hourlyRate * duration * 0.5).toFixed(2)}</span>
            </div>
          )}
          {childCount > 1 && (
            <div className="d-flex justify-content-between mb-2">
              <span>Additional Children ({childCount - 1})</span>
              <span>€{(hourlyRate * duration * ((childCount - 1) * 0.5)).toFixed(2)}</span>
            </div>
          )}
          <div className="d-flex justify-content-between fw-bold mt-2 pt-2 border-top">
            <span>Total</span>
            <span>€{calculateTotal().toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="mb-4">
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="terms"
            checked={acceptedTerms}
            onChange={(e) => setAcceptedTerms(e.target.checked)}
            required
          />
          <label className="form-check-label" htmlFor="terms">
            I accept the terms and conditions and cancellation policy
          </label>
          <div className="invalid-feedback">
            You must accept the terms and conditions
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="btn btn-primary w-100"
        disabled={!acceptedTerms || !startDate}
      >
        <Euro size={18} className="me-2" />
        Proceed to Payment
      </button>
    </form>
  );
};

export default BookingForm;