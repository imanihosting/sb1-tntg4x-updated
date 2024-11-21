import React, { useState } from 'react';
import FilterSidebar from '../components/search/FilterSidebar';
import ResultsGrid from '../components/search/ResultsGrid';
import SearchHeader from '../components/search/SearchHeader';
import { useSearchParams } from 'react-router-dom';

export type SortOption = 'rating' | 'distance' | 'price';

const Search: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState<SortOption>('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');

  return (
    <div className="flex-grow-1 bg-light">
      <SearchHeader 
        county={searchParams.get('county') || ''} 
        careType={searchParams.get('careType') || ''}
        sortBy={sortBy}
        onSortChange={setSortBy}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />
      
      <div className="container-fluid py-4">
        <div className="row g-4">
          <div className="col-lg-3">
            <FilterSidebar />
          </div>
          <div className="col-lg-9">
            <ResultsGrid viewMode={viewMode} sortBy={sortBy} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;