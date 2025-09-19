import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

/* Layout for SPA with mobile sidebar */
export default function Layout({ children, theme, setTheme, currentPage, onNavigate }) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex">
      <Sidebar currentPage={currentPage} onNavigate={onNavigate} open={mobileSidebarOpen} setOpen={setMobileSidebarOpen} />
      <div className="flex-1 flex flex-col bg-transparent">
        <Topbar theme={theme} setTheme={setTheme} onMenuClick={() => setMobileSidebarOpen(true)} />
        <main className="p-4 md:p-6 lg:p-8">
          {children}
        </main>
      </div>
      {mobileSidebarOpen && <div className="fixed inset-0 bg-black/30 z-10 md:hidden" onClick={() => setMobileSidebarOpen(false)}></div>}
    </div>
  );
}
