import { ReactNode } from 'react';
import SparkleIcon from './SparkleIcon';

interface GlowCardProps {
  children?: ReactNode;
  className?: string;
}

const GlowCard = ({ children, className = '' }: GlowCardProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Glow effect */}
      <div 
        className="absolute inset-0 rounded-3xl opacity-60"
        style={{
          background: 'radial-gradient(ellipse at center, hsl(347, 50%, 35%) 0%, hsl(336, 30%, 18%) 60%, transparent 100%)',
        }}
      />
      
      {/* Card */}
      <div className="relative bg-gradient-card rounded-3xl p-8 border border-border/30">
        {/* Sparkle decorations */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center gap-2">
            <SparkleIcon size={20} className="text-primary animate-sparkle" style={{ animationDelay: '0s' }} />
            <SparkleIcon size={32} className="text-primary animate-sparkle" style={{ animationDelay: '0.3s' }} />
            <SparkleIcon size={20} className="text-primary animate-sparkle" style={{ animationDelay: '0.6s' }} />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default GlowCard;
