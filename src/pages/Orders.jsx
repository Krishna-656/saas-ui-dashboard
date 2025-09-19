import React, { useMemo, useState, useEffect } from 'react';
import Card from '../components/ui/Card';
import Skeleton from '../components/ui/Skeleton';
import { orders as allOrders } from '../data/mockData';

/* Orders with simulated loading & proper empty state */
export default function Orders(){
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('All');
  const [sortKey, setSortKey] = useState('id');
  const [sortDir, setSortDir] = useState('asc');
  const [page, setPage] = useState(1);
  const pageSize = 6;

  useEffect(()=>{ const t = setTimeout(()=> setLoading(false), 900); return ()=>clearTimeout(t); },[]);

  const filtered = useMemo(()=>{
    const s = search.trim().toLowerCase();
    let items = allOrders.filter(o => {
      const matchSearch = !s || o.id.toLowerCase().includes(s) || o.customer.toLowerCase().includes(s) || o.item.toLowerCase().includes(s);
      const matchStatus = status === 'All' || o.status === status;
      return matchSearch && matchStatus;
    });
    items.sort((a,b) => {
      let aVal = a[sortKey], bVal = b[sortKey];
      if(typeof aVal === 'string') { aVal = aVal.toLowerCase(); bVal = bVal.toLowerCase(); }
      if(aVal < bVal) return sortDir === 'asc' ? -1 : 1;
      if(aVal > bVal) return sortDir === 'asc' ? 1 : -1;
      return 0;
    });
    return items;
  }, [search, status, sortKey, sortDir]);

  const total = filtered.length;
  const pages = Math.max(1, Math.ceil(total / pageSize));
  const pageData = filtered.slice((page-1)*pageSize, page*pageSize);

  function changeSort(key){
    if(key === sortKey) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    else { setSortKey(key); setSortDir('asc'); }
  }

  return (
    <div id="orders">
      <div className="flex items-center justify-between mb-4 gap-3">
        <h1 className="text-xl font-semibold">Orders</h1>
        <div className="flex items-center gap-2">
          <input aria-label="Search orders" value={search} onChange={e=>{ setSearch(e.target.value); setPage(1); }} placeholder="Search by id, customer or item" className="px-3 py-2 rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-[var(--card)] text-sm w-72 hidden md:inline-block" />
          <select aria-label="Filter status" className="px-3 py-2 rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-[var(--card)] text-sm" value={status} onChange={e=>{ setStatus(e.target.value); setPage(1); }}>
            <option>All</option>
            <option>Pending</option>
            <option>Completed</option>
            <option>In Progress</option>
            <option>Cancelled</option>
          </select>
          <button className="px-3 py-2 rounded-md bg-indigo-600 text-white" onClick={()=>{ setSearch(''); setStatus('All'); setSortKey('id'); setSortDir('asc'); setPage(1); }}>Reset</button>
        </div>
      </div>

      <Card>
        {loading ? (
          <div className="space-y-2">{Array.from({length:6}).map((_,i)=>(<Skeleton key={i} className='h-8 w-full rounded'/>))}</div>
        ) : (
          <div className="overflow-x-auto">
            {total === 0 ? (
              <div className="text-center py-8 text-sm text-gray-500">No orders found matching your criteria.</div>
            ) : (
              <table role="table" className="min-w-full text-sm">
                <thead className="text-left text-xs text-gray-500">
                  <tr>
                    <th className="py-2 cursor-pointer" onClick={()=>changeSort('id')}>Order ID {sortKey==='id' ? (sortDir==='asc' ? '▲' : '▼') : ''}</th>
                    <th className="py-2 cursor-pointer" onClick={()=>changeSort('customer')}>Customer {sortKey==='customer' ? (sortDir==='asc' ? '▲' : '▼') : ''}</th>
                    <th className="py-2">Item</th>
                    <th className="py-2 cursor-pointer" onClick={()=>changeSort('date')}>Date {sortKey==='date' ? (sortDir==='asc' ? '▲' : '▼') : ''}</th>
                    <th className="py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {pageData.map(o => (
                    <tr key={o.id} className="border-t hover:bg-gray-50 dark:hover:bg-gray-900">
                      <td className="py-3 font-mono">{o.id}</td>
                      <td>{o.customer}</td>
                      <td>{o.item}</td>
                      <td className="text-xs text-gray-500">{o.date}</td>
                      <td><span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800">{o.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {!loading && (
          <div className="mt-4 flex items-center justify-between">
            <div className="text-xs text-gray-500">Showing {(page-1)*pageSize + 1} - {Math.min(page*pageSize, total)} of {total}</div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 rounded-md border" onClick={()=>setPage(p=>Math.max(1,p-1))} disabled={page===1}>Prev</button>
              <div className="px-3 py-1">{page} / {pages}</div>
              <button className="px-3 py-1 rounded-md border" onClick={()=>setPage(p=>Math.min(pages,p+1))} disabled={page===pages}>Next</button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
