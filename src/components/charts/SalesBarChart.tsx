'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { SalesData } from '../../data/salesData';

interface SalesBarChartProps {
  data: SalesData[];
  threshold?: number;
}

export const SalesBarChart: React.FC<SalesBarChartProps> = ({ data, threshold = 0 }) => {
  const filteredData = data.filter(item => item.sales >= threshold);
  
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={filteredData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip 
          formatter={(value: number) => [`$${value.toLocaleString()}`, 'Sales']}
          labelFormatter={(label) => `Year: ${label}`}
        />
        <Bar dataKey="sales" fill="#3B82F6" />
      </BarChart>
    </ResponsiveContainer>
  );
};

