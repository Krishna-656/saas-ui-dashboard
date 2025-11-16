import React from 'react';
import { SunIcon, MoonIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export default function Topbar({ theme, setTheme }){
  return (
    <header className="border-b border-gray-200 dark:border-gray-800 bg-transparent">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Overview</h2>
            <div className="hidden sm:block text-sm text-gray-500 dark:text-gray-400">Created a snapshot of important metrics for JusPay - Krishna Reddy G</div>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative hidden md:block">
              <input aria-label="Search" className="bg-gray-100 dark:bg-gray-900 rounded-full px-3 py-2 text-sm w-56 placeholder-gray-400" placeholder="Search..." />
              <MagnifyingGlassIcon className="w-4 h-4 text-gray-400 absolute right-3 top-2.5" />
            </div>

            <button onClick={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')} aria-label="Toggle theme" className="p-2 rounded-md bg-gray-100 dark:bg-gray-900">
              {theme === 'light' ? <MoonIcon className="w-5 h-5 text-gray-700"/> : <SunIcon className="w-5 h-5 text-yellow-400"/>}
            </button>

            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold">KR</div>
          </div>
        </div>
      </div>
    </header>
  );
}
