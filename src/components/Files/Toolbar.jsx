import React from 'react';

export default function Toolbar({ 
  onSelectAll, 
  onDownload, 
  onDelete, 
  onShare 
}) {
  return (
    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg mb-4">
      <div className="flex items-center">
        <label className="flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
            onChange={onSelectAll}
          />
          <span className="ml-2 text-gray-700">Select All</span>
        </label>
      </div>
      
      <div className="flex space-x-2">
        <button 
          onClick={onDownload}
          className="flex items-center bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download
        </button>
        
        <button 
          onClick={onDelete}
          className="flex items-center bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Delete
        </button>
        
        <button 
          onClick={onShare}
          className="flex items-center bg-blue-600 text-white rounded-lg px-3 py-2 hover:bg-blue-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          Share
        </button>
      </div>
    </div>
  );
}