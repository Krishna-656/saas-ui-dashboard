import React, { useEffect, useState, Suspense } from 'react';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [page, setPage] = useState('overview');

  useEffect(()=>{ document.documentElement.classList.toggle('dark', theme === 'dark'); localStorage.setItem('theme', theme); },[theme]);

  return (
    <Layout theme={theme} setTheme={setTheme} currentPage={page} onNavigate={setPage}>
      <Suspense fallback={<div className="p-6">Loading...</div>}>
        {page === 'overview' && <Dashboard />}
        {page === 'orders' && <Orders />}
      </Suspense>
    </Layout>
  );
}
