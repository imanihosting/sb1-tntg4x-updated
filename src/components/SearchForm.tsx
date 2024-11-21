import React, { useState } from 'react';
import { Search, MapPin, Clock } from 'lucide-react';

const SearchForm: React.FC = () => {
  const [location, setLocation] = useState('');
  const counties = ['Dublin', 'Cork', 'Galway', 'Limerick', 'Waterford', 'Kerry', 'Mayo'];

  return (
    <div className="p-4">
      <form className="row g-3">
        <div className="col-md-5">
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0">
              <MapPin size={20} />
            </span>
            <select 
              className="form-select border-start-0"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              aria-label="Select county"
            >
              <option value="">Select County</option>
              {counties.map(county => (
                <option key={county} value={county}>{county}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-md-4">
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0">
              <Clock size={20} />
            </span>
            <select 
              className="form-select border-start-0"
              aria-label="Select care type"
            >
              <option value="">Care Type</option>
              <option>Full Time</option>
              <option>Part Time</option>
              <option>After School</option>
            </select>
          </div>
        </div>
        <div className="col-md-3">
          <button 
            type="submit" 
            className="btn btn-warning w-100 d-flex align-items-center justify-content-center"
            style={{ height: '42px' }}
          >
            <Search size={20} className="me-2" />
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;