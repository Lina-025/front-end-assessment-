'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { SalesData } from '../../data/salesData';

interface SalesPieChartProps {
  data: SalesData[];
  threshold?: number;
}

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

export const SalesPieChart: React.FC<SalesPieChartProps> = ({ data, threshold = 0 }) => {
  const filteredData = data.filter(item => item.sales >= threshold);
  
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={filteredData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ year, percent }) => `${year}: ${(percent * 100).toFixed(0)}%`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="sales"
        >
          {filteredData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip 
          formatter={(value: number) => [`$${value.toLocaleString()}`, 'Sales']}
        />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

