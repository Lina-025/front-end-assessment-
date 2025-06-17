'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { SalesData } from '../../data/salesData';

interface SalesLineChartProps {
  data: SalesData[];
  threshold?: number;
}

export const SalesLineChart: React.FC<SalesLineChartProps> = ({ data, threshold = 0 }) => {
  const filteredData = data.filter(item => item.sales >= threshold);
  
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={filteredData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip 
          formatter={(value: number) => [`$${value.toLocaleString()}`, 'Sales']}
          labelFormatter={(label) => `Year: ${label}`}
        />
        <Line 
          type="monotone" 
          dataKey="sales" 
          stroke="#3B82F6" 
          strokeWidth={3}
          dot={{ fill: '#3B82F6', strokeWidth: 2, r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

