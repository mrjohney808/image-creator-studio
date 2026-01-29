import { ReactNode } from 'react';
import SparkleIcon from './SparkleIcon';

interface RomanticButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  showSparkle?: boolean;
}

const RomanticButton = ({ 
  children, 
  onClick, 
  className = '',
  showSparkle = true 
}: RomanticButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative px-12 py-4 rounded-full
        bg-gradient-button text-primary-foreground
        font-body font-medium text-lg
        transition-all duration-300
        hover:scale-105 hover:shadow-lg
        active:scale-95
        flex items-center justify-center gap-2
        ${className}
      `}
      style={{
        boxShadow: '0 8px 32px -8px hsl(347, 80%, 45%)',
      }}
    >
      {children}
      {showSparkle && (
        <SparkleIcon size={18} className="animate-sparkle" />
      )}
    </button>
  );
};

export default RomanticButton;
