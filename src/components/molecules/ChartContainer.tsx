// Molecule component for chart container
import { Card, Typography } from '../atoms';

interface ChartContainerProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const ChartContainer: React.FC<ChartContainerProps> = ({ 
  title, 
  children, 
  className = "" 
}) => {
  return (
    <Card className={`${className}`}>
      <Typography variant="h3" className="mb-4">
        {title}
      </Typography>
      <div className="w-full h-80">
        {children}
      </div>
    </Card>
  );
};

