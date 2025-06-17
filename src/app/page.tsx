import Link from 'next/link';
import { Typography, Button, Card } from '@/components';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Typography variant="h1" className="text-5xl font-bold text-gray-900 mb-4">
            Sales Analytics Dashboard
          </Typography>
          <Typography variant="p" className="text-xl text-gray-600 max-w-2xl mx-auto">
            Track and analyze your sales performance across multiple years with interactive charts and real-time filtering.
          </Typography>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="text-center p-12">
            <Typography variant="h2" className="mb-6">
              Welcome to Your Sales Dashboard
            </Typography>
            <Typography variant="p" className="text-gray-600 mb-8 text-lg">
              Get insights into your sales data for 2022, 2023, and 2024. 
              Use interactive charts, apply filters, and switch between different visualization types.
            </Typography>
            
            <div className="space-y-4">
              <Link href="/dashboard">
                <Button size="lg" className="px-8 py-4 text-lg">
                  View Dashboard
                </Button>
              </Link>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <Typography variant="h4" className="mb-2">Interactive Charts</Typography>
                  <Typography variant="p" className="text-gray-600">
                    Switch between bar, line, and pie charts
                  </Typography>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                  </div>
                  <Typography variant="h4" className="mb-2">Custom Filters</Typography>
                  <Typography variant="p" className="text-gray-600">
                    Filter data by sales threshold
                  </Typography>
                </div>
                
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <Typography variant="h4" className="mb-2">Real-time Analytics</Typography>
                  <Typography variant="p" className="text-gray-600">
                    View sales trends and performance metrics
                  </Typography>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

