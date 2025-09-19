import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HomeIcon, TableCellsIcon } from '@heroicons/react/24/outline';

export default function Sidebar({ currentPage = 'overview', onNavigate = () => {} }) {
  const [open, setOpen] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('sidebarOpen')) ?? true;
    } catch {
      return true;
    }
  });

  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('sidebarOpen', JSON.stringify(open));
  }, [open]);

  const items = [
    { key: 'overview', label: 'Overview', icon: HomeIcon },
    { key: 'orders', label: 'Orders', icon: TableCellsIcon },
  ];

  return (
    <>
      {/* Mobile hamburger button */}
      <div className="md:hidden p-2">
        <button
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
          className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      {/* Desktop Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: open ? 260 : 72 }}
        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
        className="hidden md:flex flex-col bg-white dark:bg-[var(--card)] border-r dark:border-gray-800"
        style={{ minHeight: '100vh' }}
      >
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center text-white font-semibold">
              KR
            </div>
            {open && <div className="text-sm font-semibold">Krishna Reddy</div>}
          </div>
          <button
            aria-label="Toggle sidebar"
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>

        {/* Desktop nav */}
        <nav className="px-2 py-3 flex-1">
          {items.map((it) => {
            const Icon = it.icon;
            const active = currentPage === it.key;
            return (
              <div key={it.key} className="relative">
                <button
                  title={!open ? it.label : undefined}
                  onClick={() => onNavigate(it.key)}
                  className={`group flex items-center gap-3 w-full text-left px-3 py-2 rounded-md ${
                    active
                      ? 'bg-indigo-50 dark:bg-gray-900'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-900'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  <Icon className="w-5 h-5 text-indigo-600 group-hover:text-indigo-700" />
                  <span className="text-sm text-gray-700 dark:text-gray-200">
                    {open ? it.label : ''}
                  </span>
                </button>
                {!open && (
                  <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all">
                    {it.label}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="p-4 text-xs text-gray-500 dark:text-gray-400">
          v1.0 • by Krishna Reddy
        </div>
      </motion.aside>

      {/* Mobile Sidebar Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-30"
            onClick={() => setMobileOpen(false)}
          />
          {/* Drawer */}
          <div className="relative z-50 w-64 bg-white dark:bg-[var(--card)] shadow-lg flex flex-col">
            <div className="flex items-center justify-between px-4 py-4 border-b dark:border-gray-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                  KR
                </div>
                <div className="text-sm font-semibold">Krishna Reddy</div>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                ✕
              </button>
            </div>

            <nav className="px-2 py-3 flex-1">
              {items.map((it) => {
                const Icon = it.icon;
                const active = currentPage === it.key;
                return (
                  <button
                    key={it.key}
                    onClick={() => {
                      onNavigate(it.key);
                      setMobileOpen(false);
                    }}
                    className={`flex items-center gap-3 w-full text-left px-3 py-2 rounded-md ${
                      active
                        ? 'bg-indigo-50 dark:bg-gray-900'
                        : 'hover:bg-gray-50 dark:hover:bg-gray-900'
                    }`}
                  >
                    <Icon className="w-5 h-5 text-indigo-600" />
                    <span className="text-sm text-gray-700 dark:text-gray-200">
                      {it.label}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
