// Atomic component for typography
interface TypographyProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  className?: string;
}

export const Typography: React.FC<TypographyProps> = ({ 
  children, 
  variant = 'p', 
  className = "" 
}) => {
  const baseClasses = "text-gray-900";
  
  const variantClasses = {
    h1: "text-4xl font-bold",
    h2: "text-3xl font-bold",
    h3: "text-2xl font-semibold",
    h4: "text-xl font-semibold",
    h5: "text-lg font-medium",
    h6: "text-base font-medium",
    p: "text-base",
    span: "text-sm"
  };
  
  const Component = variant;
  
  return (
    <Component className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </Component>
  );
};

