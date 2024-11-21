import React, { useState } from 'react';
import { Users, MapPin, Calendar } from 'lucide-react';

const ParentRegistration: React.FC = () => {
  const [validated, setValidated] = useState(false);
  const [childCount, setChildCount] = useState(1);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <form className={`needs-validation ${validated ? 'was-validated' : ''}`} noValidate onSubmit={handleSubmit}>
      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <h3 className="card-title mb-4">Parent Information</h3>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">First Name</label>
              <input type="text" className="form-control" required />
              <div className="invalid-feedback">Please provide your first name.</div>
            </div>
            <div className="col-md-6">
              <label className="form-label">Last Name</label>
              <input type="text" className="form-control" required />
              <div className="invalid-feedback">Please provide your last name.</div>
            </div>
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" required />
              <div className="invalid-feedback">Please provide a valid email.</div>
            </div>
            <div className="col-md-6">
              <label className="form-label">Phone</label>
              <input type="tel" className="form-control" required pattern="[0-9]{10}" />
              <div className="invalid-feedback">Please provide a valid phone number.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="card border-0 shadow-sm mt-4">
        <div className="card-body p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="card-title mb-0">Children's Information</h3>
            <div className="input-group" style={{ width: 'auto' }}>
              <span className="input-group-text"><Users size={18} /></span>
              <select 
                className="form-select" 
                value={childCount} 
                onChange={(e) => setChildCount(Number(e.target.value))}
              >
                {[1,2,3,4].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Child' : 'Children'}</option>
                ))}
              </select>
            </div>
          </div>
          
          {[...Array(childCount)].map((_, index) => (
            <div key={index} className="row g-3 mb-4">
              <div className="col-12">
                <h4 className="h5">Child {index + 1}</h4>
              </div>
              <div className="col-md-6">
                <label className="form-label">First Name</label>
                <input type="text" className="form-control" required />
                <div className="invalid-feedback">Please provide child's first name.</div>
              </div>
              <div className="col-md-6">
                <label className="form-label">Date of Birth</label>
                <div className="input-group">
                  <span className="input-group-text"><Calendar size={18} /></span>
                  <input type="date" className="form-control" required />
                </div>
                <div className="invalid-feedback">Please provide child's date of birth.</div>
              </div>
              <div className="col-12">
                <label className="form-label">Special Requirements</label>
                <textarea className="form-control" rows={2} placeholder="Allergies, medical conditions, etc."></textarea>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card border-0 shadow-sm mt-4">
        <div className="card-body p-4">
          <h3 className="card-title mb-4">Childcare Requirements</h3>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Location</label>
              <div className="input-group">
                <span className="input-group-text"><MapPin size={18} /></span>
                <input type="text" className="form-control" placeholder="County" required />
              </div>
              <div className="invalid-feedback">Please specify your location.</div>
            </div>
            <div className="col-md-6">
              <label className="form-label">Care Type Needed</label>
              <select className="form-select" required>
                <option value="">Select care type...</option>
                <option>Full Time</option>
                <option>Part Time</option>
                <option>After School</option>
                <option>Occasional</option>
              </select>
              <div className="invalid-feedback">Please select care type needed.</div>
            </div>
            <div className="col-12">
              <label className="form-label">Schedule Requirements</label>
              <div className="row g-2">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map(day => (
                  <div key={day} className="col-md-4 col-lg-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id={day.toLowerCase()} />
                      <label className="form-check-label" htmlFor={day.toLowerCase()}>{day}</label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-12">
              <label className="form-label">Additional Requirements</label>
              <textarea 
                className="form-control" 
                rows={3} 
                placeholder="Please specify any additional requirements or preferences"
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="form-check mb-3">
          <input className="form-check-input" type="checkbox" id="gdprConsent" required />
          <label className="form-check-label" htmlFor="gdprConsent">
            I consent to ChildMinderConnect processing my personal data in accordance with the GDPR and Privacy Policy
          </label>
          <div className="invalid-feedback">You must agree before submitting.</div>
        </div>
        <button type="submit" className="btn btn-primary btn-lg w-100">Register as Parent</button>
      </div>
    </form>
  );
};

export default ParentRegistration;