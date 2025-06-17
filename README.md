# Sales Dashboard - Next.js 15 Application

A modern, responsive sales analytics dashboard built with Next.js 15, TypeScript, Tailwind CSS, and Recharts. This application demonstrates atomic design principles and provides interactive data visualization for sales performance across multiple years.

## 🚀 Features

### Core Functionality
- **Interactive Charts**: Switch between bar, line, and pie chart visualizations
- **Custom Filtering**: Filter sales data by threshold values
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Real-time Analytics**: Dynamic calculations and performance metrics
- **Detailed View**: Comprehensive quarterly breakdowns and insights

### Technical Features
- **Atomic Design Structure**: Components organized following atomic design principles
- **TypeScript**: Full type safety throughout the application
- **Modern Next.js 15**: Latest features including App Router and Turbopack support
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Recharts Integration**: Professional chart library for data visualization

## 🏗️ Project Structure

The project follows atomic design principles with a clear component hierarchy:

```
src/
├── app/
│   ├── page.tsx                 # Home page
│   ├── dashboard/
│   │   └── page.tsx            # Dashboard page
│   ├── layout.tsx              # Root layout
│   └── globals.css             # Global styles
├── components/
│   ├── atoms/                  # Basic building blocks
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Typography.tsx
│   │   └── index.ts
│   ├── molecules/              # Combinations of atoms
│   │   ├── ChartContainer.tsx
│   │   ├── FilterControls.tsx
│   │   └── index.ts
│   ├── organisms/              # Complex UI sections
│   │   ├── DashboardLayout.tsx
│   │   └── index.ts
│   ├── charts/                 # Chart components
│   │   ├── SalesBarChart.tsx
│   │   ├── SalesLineChart.tsx
│   │   ├── SalesPieChart.tsx
│   │   └── index.ts
│   └── index.ts               # Main component exports
└── data/
    └── salesData.ts           # Mock data and types
```

## 📊 Data Structure

The application uses mock sales data for demonstration purposes:

### Sales Data (2022-2024)
- **2022**: $259,410
- **2023**: $209,344  
- **2024**: $448,016

### Quarterly Breakdown
Each year includes detailed quarterly data for comprehensive analysis and trend identification.

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18.0 or higher
- npm, yarn, or pnpm package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sales-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 🎯 Usage Guide

### Navigation
- **Home Page**: Landing page with project overview and navigation to dashboard
- **Dashboard**: Main analytics interface with interactive charts and controls

### Dashboard Features

#### Chart Types
1. **Bar Chart**: Traditional column visualization for year-over-year comparison
2. **Line Chart**: Trend analysis with connected data points
3. **Pie Chart**: Proportional representation of sales distribution

#### Filtering
- Use the "Sales Threshold" input to filter data by minimum sales values
- Real-time updates to charts and statistics based on filter criteria

#### Detailed View
- Toggle detailed analytics for comprehensive quarterly breakdowns
- Performance insights with growth trends and key metrics
- Individual year analysis with percentage changes

## 🏛️ Architecture & Design Patterns

### Atomic Design Implementation

#### Atoms (Basic Components)
- **Button**: Reusable button component with multiple variants
- **Card**: Container component for content sections
- **Input**: Form input with label and validation support
- **Typography**: Text component with semantic variants

#### Molecules (Component Combinations)
- **ChartContainer**: Wrapper for chart components with titles
- **FilterControls**: Combined input and button controls for data filtering

#### Organisms (Complex Sections)
- **DashboardLayout**: Complete page layout with header and navigation

### Component Design Principles
- **Single Responsibility**: Each component has a focused purpose
- **Reusability**: Components designed for multiple use cases
- **Composability**: Easy combination and extension
- **Type Safety**: Full TypeScript integration for reliability

## 📈 Chart Implementation

### Recharts Integration
The application uses Recharts for professional data visualization:

```typescript
// Example: Bar Chart Implementation
<ResponsiveContainer width="100%" height="100%">
  <BarChart data={filteredData}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="year" />
    <YAxis />
    <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Sales']} />
    <Bar dataKey="sales" fill="#3B82F6" />
  </BarChart>
</ResponsiveContainer>
```

### Chart Features
- **Responsive Design**: Charts adapt to container size
- **Interactive Tooltips**: Hover effects with formatted data
- **Custom Styling**: Consistent color scheme and branding
- **Data Formatting**: Currency formatting and number localization

## 🎨 Styling & Theming

### Tailwind CSS Configuration
- **Utility-First Approach**: Rapid development with utility classes
- **Responsive Design**: Mobile-first responsive breakpoints
- **Custom Color Palette**: Consistent brand colors throughout
- **Component Variants**: Systematic approach to component styling

### Design System
- **Typography Scale**: Consistent text sizing and hierarchy
- **Spacing System**: Uniform spacing using Tailwind's scale
- **Color Scheme**: Professional blue-based palette with accent colors
- **Shadow System**: Subtle depth and elevation effects

## 🔧 Development Workflow

### Code Organization
- **TypeScript**: Strict type checking for reliability
- **ESLint**: Code quality and consistency enforcement
- **Component Isolation**: Clear separation of concerns
- **Import/Export Strategy**: Centralized component exports

### Best Practices Implemented
- **Performance Optimization**: Efficient re-rendering with React hooks
- **Accessibility**: Semantic HTML and ARIA attributes
- **Error Handling**: Graceful degradation and error boundaries
- **Code Splitting**: Optimized bundle sizes with Next.js

## 🚀 Deployment

### Build Process
```bash
npm run build
```

### Production Deployment
The application is optimized for deployment on platforms like:
- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Traditional hosting with static export**

### Environment Configuration
- Development and production environment support
- Environment variable configuration for API endpoints
- Build optimization for production deployment

## 🔮 Future Enhancements

### Planned Features
1. **API Integration**: Connect to real sales data sources
2. **Advanced Filtering**: Date range selection and multi-criteria filtering
3. **Export Functionality**: PDF and CSV export capabilities
4. **User Authentication**: Secure access and user management
5. **Real-time Updates**: WebSocket integration for live data
6. **Advanced Analytics**: Predictive modeling and trend analysis

### Technical Improvements
- **Testing Suite**: Unit and integration tests with Jest and Testing Library
- **Performance Monitoring**: Analytics and performance tracking
- **Internationalization**: Multi-language support
- **Dark Mode**: Theme switching capabilities
- **Progressive Web App**: Offline functionality and app-like experience

## 📝 Contributing

### Development Setup
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

### Code Standards
- Follow TypeScript best practices
- Maintain atomic design principles
- Write comprehensive documentation
- Include appropriate tests

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Next.js Team**: For the excellent React framework
- **Recharts**: For the powerful charting library
- **Tailwind CSS**: For the utility-first CSS framework
- **TypeScript**: For enhanced development experience

---

**Built with ❤️ using Next.js 15, TypeScript, and modern web technologies**

