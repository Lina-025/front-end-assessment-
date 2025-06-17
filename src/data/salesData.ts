// Sales data interface and mock data
export interface SalesData {
  year: number;
  sales: number;
}

export const mockSalesData: SalesData[] = [
  { year: 2022, sales: 259410 },
  { year: 2023, sales: 209344 },
  { year: 2024, sales: 448016 }
];

// Additional detailed sales data for more comprehensive charts
export interface DetailedSalesData {
  year: number;
  quarter: string;
  sales: number;
  region: string;
}

export const detailedSalesData: DetailedSalesData[] = [
  // 2022 data
  { year: 2022, quarter: 'Q1', sales: 65000, region: 'North' },
  { year: 2022, quarter: 'Q2', sales: 72000, region: 'North' },
  { year: 2022, quarter: 'Q3', sales: 58000, region: 'North' },
  { year: 2022, quarter: 'Q4', sales: 64410, region: 'North' },
  
  // 2023 data
  { year: 2023, quarter: 'Q1', sales: 52000, region: 'North' },
  { year: 2023, quarter: 'Q2', sales: 48000, region: 'North' },
  { year: 2023, quarter: 'Q3', sales: 55344, region: 'North' },
  { year: 2023, quarter: 'Q4', sales: 54000, region: 'North' },
  
  // 2024 data
  { year: 2024, quarter: 'Q1', sales: 110000, region: 'North' },
  { year: 2024, quarter: 'Q2', sales: 125000, region: 'North' },
  { year: 2024, quarter: 'Q3', sales: 108016, region: 'North' },
  { year: 2024, quarter: 'Q4', sales: 105000, region: 'North' }
];

