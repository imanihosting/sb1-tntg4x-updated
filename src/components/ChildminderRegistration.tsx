import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Euro } from 'lucide-react';

const ChildminderRegistration: React.FC = () => {
  const [validated, setValidated] = useState(false);

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
          <h3 className="card-title mb-4">Personal Information</h3>
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
          <h3 className="card-title mb-4">Qualifications & Certifications</h3>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Garda Vetting Number</label>
              <input type="text" className="form-control" required />
              <div className="invalid-feedback">Please provide your Garda vetting number.</div>
            </div>
            <div className="col-md-6">
              <label className="form-label">Tusla Registration Number</label>
              <input type="text" className="form-control" />
              <div className="form-text">If registered with Tusla</div>
            </div>
            <div className="col-md-6">
              <label className="form-label">First Aid Cert Expiry</label>
              <div className="input-group">
                <span className="input-group-text"><Calendar size={18} /></span>
                <input type="date" className="form-control" required />
              </div>
              <div className="invalid-feedback">Please provide certification expiry date.</div>
            </div>
            <div className="col-md-6">
              <label className="form-label">Insurance Provider</label>
              <input type="text" className="form-control" required />
              <div className="invalid-feedback">Please provide your insurance details.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="card border-0 shadow-sm mt-4">
        <div className="card-body p-4">
          <h3 className="card-title mb-4">Services & Availability</h3>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Service Area</label>
              <div className="input-group">
                <span className="input-group-text"><MapPin size={18} /></span>
                <input type="text" className="form-control" placeholder="County" required />
              </div>
              <div className="invalid-feedback">Please specify your service area.</div>
            </div>
            <div className="col-md-6">
              <label className="form-label">Maximum Children</label>
              <input type="number" className="form-control" min="1" max="6" required />
              <div className="invalid-feedback">Please specify capacity (1-6 children).</div>
            </div>
            <div className="col-12">
              <label className="form-label">Available Hours</label>
              <div className="input-group">
                <span className="input-group-text"><Clock size={18} /></span>
                <select className="form-select" required>
                  <option value="">Select availability...</option>
                  <option>Full Time (Mon-Fri)</option>
                  <option>Part Time</option>
                  <option>After School Only</option>
                  <option>Weekends</option>
                </select>
              </div>
              <div className="invalid-feedback">Please select your availability.</div>
            </div>
            <div className="col-md-6">
              <label className="form-label">Hourly Rate (€)</label>
              <div className="input-group">
                <span className="input-group-text"><Euro size={18} /></span>
                <input type="number" className="form-control" min="10" step="0.50" required />
              </div>
              <div className="invalid-feedback">Please specify your hourly rate.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="card border-0 shadow-sm mt-4">
        <div className="card-body p-4">
          <h3 className="card-title mb-4">Services Offered</h3>
          <div className="row g-3">
            <div className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="fullTime" />
                <label className="form-check-label" htmlFor="fullTime">Full Time Care</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="partTime" />
                <label className="form-check-label" htmlFor="partTime">Part Time Care</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="afterSchool" />
                <label className="form-check-label" htmlFor="afterSchool">After School Care</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="dropIn" />
                <label className="form-check-label" htmlFor="dropIn">Drop-in Care</label>
              </div>
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
        <button type="submit" className="btn btn-primary btn-lg w-100">Register as Childminder</button>
      </div>
    </form>
  );
};

export default ChildminderRegistration;