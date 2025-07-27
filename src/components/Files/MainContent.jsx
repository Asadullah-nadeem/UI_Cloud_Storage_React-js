import React, { useState } from 'react';
import Filters from './Filters';
import Toolbar from './Toolbar';
import FileItem from './FileItem';
import UploadZone from './UploadZone';

export default function MainContent() {
  const [files] = useState([
    { id: 1, type: 'folder', name: 'Project Documents', size: '320 MB', items: 24, date: 'Mar 15, 2023' },
    { id: 2, type: 'image', name: 'Landscape.jpg', size: '4.2 MB', date: 'Apr 2, 2023' },
    { id: 3, type: 'document', name: 'Financial Report.pdf', size: '2.1 MB', date: 'Apr 5, 2023' },
    { id: 4, type: 'video', name: 'Product Demo.mp4', size: '45.7 MB', date: 'Apr 8, 2023' },
    { id: 5, type: 'folder', name: 'Client Assets', size: '120 MB', items: 18, date: 'Apr 10, 2023' },
    { id: 6, type: 'document', name: 'Meeting Notes.docx', size: '0.8 MB', date: 'Apr 12, 2023' },
    { id: 7, type: 'image', name: 'Screenshot.png', size: '1.2 MB', date: 'Apr 14, 2023' },
    { id: 8, type: 'document', name: 'Contract Agreement.pdf', size: '3.4 MB', date: 'Apr 15, 2023' },
  ]);
  
  const handleFilterChange = (filter) => {
    console.log('Filter changed to:', filter);
  };
  
  const handleSelectAll = (e) => {
    console.log('Select all:', e.target.checked);
  };
  
  const handleDownload = () => {
    console.log('Download selected');
  };
  
  const handleDelete = () => {
    console.log('Delete selected');
  };
  
  const handleShare = () => {
    console.log('Share selected');
  };
  
  return (
    <div className="flex-1 overflow-auto p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <button className="flex items-center bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </button>
          <button className="flex items-center bg-blue-600 text-white rounded-lg px-3 py-2 hover:bg-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
            New Folder
          </button>
        </div>
        
        <div className="flex space-x-3">
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search files..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 pl-10 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <Filters onFilterChange={handleFilterChange} />
        </div>
      </div>
      
      <Toolbar 
        onSelectAll={handleSelectAll}
        onDownload={handleDownload}
        onDelete={handleDelete}
        onShare={handleShare}
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-6">
        {files.map(file => (
          <FileItem key={file.id} item={file} />
        ))}
      </div>
      
      <UploadZone />
    </div>
  );
}