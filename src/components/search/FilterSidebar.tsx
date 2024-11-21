import React from 'react';
import { Euro, Clock, Award, MapPin } from 'lucide-react';

const FilterSidebar: React.FC = () => {
  return (
    <div className="accordion" id="filterAccordion">
      <div className="accordion-item border-0 shadow-sm mb-3">
        <h2 className="accordion-header">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#priceCollapse">
            <Euro size={18} className="me-2" /> Price Range
          </button>
        </h2>
        <div id="priceCollapse" className="accordion-collapse collapse show" data-bs-parent="#filterAccordion">
          <div className="accordion-body">
            <div className="row g-2">
              <div className="col-6">
                <label className="form-label small">Min €/hour</label>
                <input type="number" className="form-control" min="10" step="0.50" />
              </div>
              <div className="col-6">
                <label className="form-label small">Max €/hour</label>
                <input type="number" className="form-control" min="10" step="0.50" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion-item border-0 shadow-sm mb-3">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#availabilityCollapse">
            <Clock size={18} className="me-2" /> Availability
          </button>
        </h2>
        <div id="availabilityCollapse" className="accordion-collapse collapse" data-bs-parent="#filterAccordion">
          <div className="accordion-body">
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map(day => (
              <div key={day} className="form-check">
                <input className="form-check-input" type="checkbox" id={`day_${day}`} />
                <label className="form-check-label" htmlFor={`day_${day}`}>{day}</label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="accordion-item border-0 shadow-sm mb-3">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#qualificationsCollapse">
            <Award size={18} className="me-2" /> Qualifications
          </button>
        </h2>
        <div id="qualificationsCollapse" className="accordion-collapse collapse" data-bs-parent="#filterAccordion">
          <div className="accordion-body">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="tuslaRegistered" />
              <label className="form-check-label" htmlFor="tuslaRegistered">Tusla Registered</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="firstAid" />
              <label className="form-check-label" htmlFor="firstAid">First Aid Certified</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="childcare_qual" />
              <label className="form-check-label" htmlFor="childcare_qual">Childcare Qualification</label>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion-item border-0 shadow-sm mb-3">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#distanceCollapse">
            <MapPin size={18} className="me-2" /> Distance
          </button>
        </h2>
        <div id="distanceCollapse" className="accordion-collapse collapse" data-bs-parent="#filterAccordion">
          <div className="accordion-body">
            <label className="form-label">Maximum Distance</label>
            <select className="form-select">
              <option value="5">Within 5 km</option>
              <option value="10">Within 10 km</option>
              <option value="20">Within 20 km</option>
              <option value="30">Within 30 km</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;