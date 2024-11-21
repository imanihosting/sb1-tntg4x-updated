import React from 'react';
import { Grid, Map, SortAsc } from 'lucide-react';
import type { SortOption } from '../../pages/Search';

interface SearchHeaderProps {
  county: string;
  careType: string;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  viewMode: 'grid' | 'map';
  onViewModeChange: (mode: 'grid' | 'map') => void;
}

const SearchHeader: React.FC<SearchHeaderProps> = ({
  county,
  careType,
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange
}) => {
  return (
    <div className="bg-white border-bottom shadow-sm">
      <div className="container-fluid py-4">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="h4 mb-1">Childminders in {county}</h1>
            <p className="text-muted mb-0">{careType} Care Available</p>
          </div>
          <div className="col-md-6">
            <div className="d-flex gap-3 justify-content-md-end align-items-center mt-3 mt-md-0">
              <div className="d-flex align-items-center">
                <SortAsc size={20} className="text-muted me-2" />
                <select 
                  className="form-select form-select-sm" 
                  value={sortBy}
                  onChange={(e) => onSortChange(e.target.value as SortOption)}
                >
                  <option value="rating">Highest Rated</option>
                  <option value="distance">Nearest</option>
                  <option value="price">Lowest Price</option>
                </select>
              </div>
              <div className="btn-group">
                <button
                  type="button"
                  className={`btn btn-sm ${viewMode === 'grid' ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => onViewModeChange('grid')}
                >
                  <Grid size={20} />
                </button>
                <button
                  type="button"
                  className={`btn btn-sm ${viewMode === 'map' ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => onViewModeChange('map')}
                >
                  <Map size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;