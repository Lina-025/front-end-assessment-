'use client';

import { useState } from 'react';
import { DashboardLayout, ChartContainer, FilterControls, Card, Typography, Button } from '@/components';
import { SalesBarChart, SalesLineChart, SalesPieChart } from '@/components/charts';
import { mockSalesData, detailedSalesData } from '@/data/salesData';

export default function Dashboard() {
  const [chartType, setChartType] = useState<'bar' | 'line' | 'pie'>('bar');
  const [threshold, setThreshold] = useState<number>(0);
  const [showDetailed, setShowDetailed] = useState<boolean>(false);

  const renderChart = () => {
    const props = { data: mockSalesData, threshold };
    
    switch (chartType) {
      case 'bar':
        return <SalesBarChart {...props} />;
      case 'line':
        return <SalesLineChart {...props} />;
      case 'pie':
        return <SalesPieChart {...props} />;
      default:
        return <SalesBarChart {...props} />;
    }
  };

  const filteredData = mockSalesData.filter(item => item.sales >= threshold);
  const totalSales = filteredData.reduce((sum, item) => sum + item.sales, 0);
  const averageSales = filteredData.length > 0 ? totalSales / filteredData.length : 0;
  const maxSales = filteredData.length > 0 ? Math.max(...filteredData.map(item => item.sales)) : 0;
  const minSales = filteredData.length > 0 ? Math.min(...filteredData.map(item => item.sales)) : 0;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Enhanced Filter Controls */}
        <Card className="p-6">
          <Typography variant="h3" className="mb-4">Dashboard Controls</Typography>
          <div className="flex flex-wrap gap-4 items-end">
            <FilterControls
              onFilterChange={setThreshold}
              onChartTypeChange={setChartType}
              currentChartType={chartType}
              threshold={threshold}
            />
            <Button
              variant={showDetailed ? 'primary' : 'outline'}
              onClick={() => setShowDetailed(!showDetailed)}
              size="sm"
            >
              {showDetailed ? 'Hide' : 'Show'} Detailed View
            </Button>
          </div>
        </Card>
        
        {/* Summary Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-4 text-center">
            <Typography variant="h4" className="text-blue-600">
              ${totalSales.toLocaleString()}
            </Typography>
            <Typography variant="span" className="text-gray-600">
              Total Sales
            </Typography>
          </Card>
          <Card className="p-4 text-center">
            <Typography variant="h4" className="text-green-600">
              ${averageSales.toLocaleString()}
            </Typography>
            <Typography variant="span" className="text-gray-600">
              Average Sales
            </Typography>
          </Card>
          <Card className="p-4 text-center">
            <Typography variant="h4" className="text-purple-600">
              ${maxSales.toLocaleString()}
            </Typography>
            <Typography variant="span" className="text-gray-600">
              Highest Sales
            </Typography>
          </Card>
          <Card className="p-4 text-center">
            <Typography variant="h4" className="text-orange-600">
              ${minSales.toLocaleString()}
            </Typography>
            <Typography variant="span" className="text-gray-600">
              Lowest Sales
            </Typography>
          </Card>
        </div>
        
        {/* Main Chart */}
        <ChartContainer title={`Sales Data (${chartType.charAt(0).toUpperCase() + chartType.slice(1)} Chart)`}>
          {renderChart()}
        </ChartContainer>
        
        {/* Detailed View */}
        {showDetailed && (
          <div className="space-y-6">
            <Typography variant="h2" className="text-center">
              Detailed Sales Analysis
            </Typography>
            
            {/* Year-by-Year Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mockSalesData.map((item) => {
                const yearData = detailedSalesData.filter(d => d.year === item.year);
                const quarterlyTotal = yearData.reduce((sum, q) => sum + q.sales, 0);
                
                return (
                  <ChartContainer key={item.year} title={`${item.year} Quarterly Breakdown`}>
                    <div className="space-y-4">
                      {yearData.map((quarter) => (
                        <div key={quarter.quarter} className="flex justify-between items-center">
                          <Typography variant="span" className="font-medium">
                            {quarter.quarter}
                          </Typography>
                          <Typography variant="span" className="text-blue-600">
                            ${quarter.sales.toLocaleString()}
                          </Typography>
                        </div>
                      ))}
                      <div className="border-t pt-2">
                        <div className="flex justify-between items-center font-bold">
                          <Typography variant="span">Total</Typography>
                          <Typography variant="span" className="text-green-600">
                            ${quarterlyTotal.toLocaleString()}
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </ChartContainer>
                );
              })}
            </div>
            
            {/* Performance Insights */}
            <Card className="p-6">
              <Typography variant="h3" className="mb-4">Performance Insights</Typography>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Typography variant="h4" className="mb-2 text-green-600">Growth Trends</Typography>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 2024 shows significant growth (+114% from 2023)</li>
                    <li>• 2023 experienced a decline (-19% from 2022)</li>
                    <li>• Overall trend shows recovery and strong performance</li>
                  </ul>
                </div>
                <div>
                  <Typography variant="h4" className="mb-2 text-blue-600">Key Metrics</Typography>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Best performing year: 2024</li>
                    <li>• Most consistent growth: Q1-Q2 2024</li>
                    <li>• Average quarterly sales: ${(totalSales / 12).toLocaleString()}</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        )}
        
        {/* Individual Year Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockSalesData.map((item) => (
            <ChartContainer key={item.year} title={`${item.year} Sales`}>
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">
                    ${item.sales.toLocaleString()}
                  </div>
                  <div className="text-gray-600 mt-2">
                    Total Sales
                  </div>
                  <div className="mt-4">
                    <div className={`inline-block px-3 py-1 rounded-full text-sm ${
                      item.year === 2024 ? 'bg-green-100 text-green-800' :
                      item.year === 2023 ? 'bg-red-100 text-red-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {item.year === 2024 ? '+114% Growth' :
                       item.year === 2023 ? '-19% Decline' :
                       'Baseline Year'}
                    </div>
                  </div>
                </div>
              </div>
            </ChartContainer>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

