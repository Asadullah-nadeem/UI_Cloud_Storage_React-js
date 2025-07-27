import React, { useState } from 'react';

export default function Sidebar() {
  const [activeFolder, setActiveFolder] = useState(0);
  const [folders] = useState([
    { id: 0, name: 'All Files', size: '4.2 GB' },
    { id: 1, name: 'Documents', size: '1.2 GB' },
    { id: 2, name: 'Images', size: '2.1 GB' },
    { id: 3, name: 'Videos', size: '780 MB' },
    { id: 4, name: 'Projects', size: '1.8 GB' },
    { id: 5, name: 'Archive', size: '520 MB' },
    { id: 6, name: 'Shared', size: '340 MB' },
    { id: 7, name: 'Backups', size: '3.5 GB' },
  ]);

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-full overflow-y-auto">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">Folders</h2>
      </div>

      <ul className="divide-y divide-gray-100">
        {folders.map((folder) => (
          <li
            key={folder.id}
            className={`px-4 py-3 cursor-pointer transition-colors ${
              activeFolder === folder.id
                ? 'bg-blue-50 border-l-4 border-blue-500'
                : 'hover:bg-gray-50'
            }`}
            onClick={() => setActiveFolder(folder.id)}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
                <span
                  className={`font-medium ${
                    activeFolder === folder.id
                      ? 'text-blue-700'
                      : 'text-gray-700'
                  }`}
                >
                  {folder.name}
                </span>
              </div>
              <span className="text-xs text-gray-500">{folder.size}</span>
            </div>
          </li>
        ))}
      </ul>

      <div className="p-4 mt-auto">
        <button className="w-full flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          New Folder
        </button>
      </div>
    </aside>
  );
}
