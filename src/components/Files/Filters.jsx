import React, { useState } from 'react';

export default function Filters({ onFilterChange }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const filters = [
    // 'all', name: 'All'
    // 'image', name: 'Image'
    //  'video', name: 'Video'
    //  'audio', name: 'Audio'
    //  'document', name: 'Document'
    // 'code', name: 'Code'
    //  'archive', name: 'Archive'
    // 'other', name: 'Other'
    // here file show that can upper side if filters show only these type file show not extrat file show that
  ];

  const handleFilter = (id) => {
    setActiveFilter(id);
    onFilterChange(id);
  };

  return (
    <div className="relative">
      <button className="flex items-center bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
        Filter
      </button>
      
      <div className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
        {filters.map(filter => (
          <button
            key={filter.id}
            className={`w-full text-left px-4 py-2 text-sm flex items-center ${
              activeFilter === filter.id 
                ? 'bg-blue-50 text-blue-700 font-medium' 
                : 'hover:bg-gray-50 text-gray-700'
            }`}
            onClick={() => handleFilter(filter.id)}
          >
            {filter.name}
          </button>
        ))}
      </div>
    </div>
  );
}