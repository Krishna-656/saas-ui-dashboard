import React, { useEffect, useState } from 'react';
import Card from '../components/ui/Card';
import SparkArea from '../components/charts/SparkArea';
import Skeleton from '../components/ui/Skeleton';
import { stats, products, orders } from '../data/mockData';

/* Dashboard with simulated loading */
export default function Dashboard(){
  const [loading, setLoading] = useState(true);
  useEffect(()=>{ const t = setTimeout(()=> setLoading(false), 700); return ()=>clearTimeout(t); },[]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-3 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map(s => (
            <Card key={s.id} title={s.label}>
              {loading ? (
                <div className="flex items-center justify-between"><div className="w-2/3"><Skeleton className='h-6 w-36 rounded'/></div><div className="w-28"><Skeleton className='h-8 w-full rounded'/></div></div>
              ) : (
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-semibold">{s.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{s.delta}</div>
                  </div>
                  <div className="w-28">
                    <SparkArea data={s.trend.map(v=>({v}))} />
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        <Card title="Sales Overview" footer="Updated 1 hour ago">
          {loading ? (
            <div className="space-y-3"><Skeleton className='h-8 w-40'/><Skeleton className='h-10'/></div>
          ) : (
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="text-sm text-gray-500">This month</div>
                <div className="text-3xl font-semibold mt-2">$12,430</div>
              </div>
              <div className="w-full md:w-64">
                <div className="bg-gradient-to-tr from-indigo-50 to-white rounded-xl p-3 card-accent">
                  <div className="text-xs text-gray-500">Conversion</div>
                  <div className="text-lg font-semibold">4.2%</div>
                  <div className="mt-3">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-2 bg-indigo-500 rounded-full" style={{width: '42%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title="Top Selling Products">
            {loading ? (
              <div className="space-y-2"><Skeleton className='h-4 w-full'/><Skeleton className='h-4 w-full'/><Skeleton className='h-4 w-full'/></div>
            ) : (
              <table className="w-full text-sm">
                <thead className="text-left text-xs text-gray-500"><tr><th>Name</th><th>Price</th><th>Qty</th><th>Amount</th></tr></thead>
                <tbody>
                  {products.map(p=>(
                    <tr key={p.name} className="border-t hover:bg-gray-50 dark:hover:bg-gray-900">
                      <td className="py-3">{p.name}</td>
                      <td>{p.price}</td>
                      <td>{p.qty}</td>
                      <td>{p.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </Card>

          <Card title="Recent Orders">
            {loading ? (
              <div className="space-y-2">{Array.from({length:4}).map((_,i)=>(<Skeleton key={i} className='h-10 w-full rounded'/>))}</div>
            ) : (
              <div className="space-y-3">
                {orders.slice(0,6).map(o=>(
                  <div key={o.id} className="flex items-center justify-between p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-900">
                    <div>
                      <div className="text-sm font-medium">{o.customer} • <span className="text-xs text-gray-500">{o.item}</span></div>
                      <div className="text-xs text-gray-400">{o.date}</div>
                    </div>
                    <div className="text-xs text-gray-500">{o.status}</div>
                  </div>
                ))}
              </div>
            )}
          </Card>
        </div>
      </div>

      <aside className="space-y-6">
        <Card title="Notifications">
          {loading ? (
            <div className="space-y-2">{Array.from({length:3}).map((_,i)=>(<Skeleton key={i} className='h-6 w-full'/>))}</div>
          ) : (
            <ul className="text-sm space-y-3">
              <li className="flex items-start gap-3"><div className="w-2 h-2 rounded-full bg-indigo-500 mt-2"></div><div><div className="font-medium">Server restarted</div><div className="text-xs text-gray-500">2 hours ago</div></div></li>
              <li className="flex items-start gap-3"><div className="w-2 h-2 rounded-full bg-yellow-400 mt-2"></div><div><div className="font-medium">Payment failed</div><div className="text-xs text-gray-500">5 hours ago</div></div></li>
              <li className="flex items-start gap-3"><div className="w-2 h-2 rounded-full bg-green-400 mt-2"></div><div><div className="font-medium">New user registered</div><div className="text-xs text-gray-500">1 day ago</div></div></li>
            </ul>
          )}
        </Card>

        <Card title="Quick Actions">
          <div className="flex flex-col gap-2">
            <button className="px-3 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">Create Invoice</button>
            <button className="px-3 py-2 rounded-md border border-gray-200 dark:border-gray-800">Export Report</button>
          </div>
        </Card>
      </aside>
    </div>
  );
}
