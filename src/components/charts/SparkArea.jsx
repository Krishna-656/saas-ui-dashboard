import React from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

export default function SparkArea({data}) {
  return (
    <div style={{ width: '100%', height: 60 }} aria-hidden>
      <ResponsiveContainer>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="g2" x1="0" x2="0" y1="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.6}/>
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0.02}/>
            </linearGradient>
          </defs>
          <Area dataKey="v" stroke="#6366f1" fill="url(#g2)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
