// Molecule component for filter controls
import { Button, Input } from '../atoms';

interface FilterControlsProps {
  onFilterChange: (threshold: number) => void;
  onChartTypeChange: (type: 'bar' | 'line' | 'pie') => void;
  currentChartType: 'bar' | 'line' | 'pie';
  threshold: number;
}

export const FilterControls: React.FC<FilterControlsProps> = ({
  onFilterChange,
  onChartTypeChange,
  currentChartType,
  threshold
}) => {
  return (
    <div className="flex flex-wrap gap-4 items-end">
      <Input
        type="number"
        label="Sales Threshold"
        placeholder="Enter minimum sales"
        value={threshold}
        onChange={(e) => onFilterChange(Number(e.target.value))}
        className="w-48"
      />
      
      <div className="flex gap-2">
        <Button
          variant={currentChartType === 'bar' ? 'primary' : 'outline'}
          onClick={() => onChartTypeChange('bar')}
          size="sm"
        >
          Bar Chart
        </Button>
        <Button
          variant={currentChartType === 'line' ? 'primary' : 'outline'}
          onClick={() => onChartTypeChange('line')}
          size="sm"
        >
          Line Chart
        </Button>
        <Button
          variant={currentChartType === 'pie' ? 'primary' : 'outline'}
          onClick={() => onChartTypeChange('pie')}
          size="sm"
        >
          Pie Chart
        </Button>
      </div>
    </div>
  );
};

