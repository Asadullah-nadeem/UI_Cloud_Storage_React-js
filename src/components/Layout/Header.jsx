import React from 'react';
import {IoFileTrayStackedOutline} from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";


export default function Header({ onDisconnect }) {
  return (
    <header className="bg-white shadow-sm py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <div className="bg-blue-600 w-8 h-8 rounded-md flex items-center justify-center mr-3">
          <span className="text-white font-bold text-xl">S3</span>
        </div>
        <h1 className="text-xl font-bold text-gray-800">Cloud Storage</h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center bg-gray-100 rounded-full py-1 px-3">
          <IoFileTrayStackedOutline />
          <span className="ml-2 font-medium text-gray-700">Here show Bucket name</span>
        </div>
        <div className="flex items-center bg-gray-100 rounded-full py-1 px-3">
          <FaMapMarkerAlt />
          <span className="ml-2 font-medium text-gray-700">Here show Region Example (eu-north-1) like that show here</span>
        </div>
        <button 
          onClick={onDisconnect}
          className="bg-red-50 text-red-600 px-4 py-2 rounded-lg hover:bg-red-100 transition-colors flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Disconnect
        </button>
      </div>
    </header>
  );
}