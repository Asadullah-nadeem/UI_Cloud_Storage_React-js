import React from 'react';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar.jsx';
import MainContent from './components/Files/MainContent';

export default function App() {
  const handleDisconnect = () => {
    console.log('Disconnect clicked');
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <Header onDisconnect={handleDisconnect} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}
