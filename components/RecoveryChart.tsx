import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Teden 1', mobility: 20 },
  { day: 'Teden 2', mobility: 45 },
  { day: 'Teden 3', mobility: 65 },
  { day: 'Teden 4', mobility: 85 },
  { day: 'Teden 5', mobility: 100 },
];

const RecoveryChart: React.FC = () => {
  return (
    <div className="w-full h-48 bg-white/50 rounded-2xl p-4 backdrop-blur-sm border border-slate-100">
      <h4 className="text-sm font-semibold text-slate-500 mb-2 text-center">Napredek mobilnosti pacientov</h4>
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorMobility" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="day" hide />
          <YAxis hide />
          <Tooltip 
            contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            itemStyle={{ color: '#0369a1', fontWeight: 'bold' }}
          />
          <Area type="monotone" dataKey="mobility" stroke="#0284c7" strokeWidth={3} fillOpacity={1} fill="url(#colorMobility)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RecoveryChart;