import roseImage from '@/assets/rose.png';

interface RoseFrameProps {
  className?: string;
}

const RoseFrame = ({ className = '' }: RoseFrameProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full glow-rose-soft" />
      
      {/* Decorative ring */}
      <div className="relative w-40 h-40 rounded-full ring-rose p-1">
        {/* Inner container */}
        <div className="w-full h-full rounded-full overflow-hidden bg-gradient-card">
          <img
            src={roseImage}
            alt="Beautiful rose"
            className="w-full h-full object-cover animate-float"
          />
        </div>
      </div>

      {/* Floating dots around frame */}
      <div className="absolute -top-2 -right-2 w-2 h-2 rounded-full bg-cream-muted animate-twinkle" style={{ animationDelay: '0.2s' }} />
      <div className="absolute -bottom-1 -left-3 w-1.5 h-1.5 rounded-full bg-cream-muted animate-twinkle" style={{ animationDelay: '0.8s' }} />
      <div className="absolute top-1/2 -right-4 w-1 h-1 rounded-full bg-cream-muted animate-twinkle" style={{ animationDelay: '1.2s' }} />
    </div>
  );
};

export default RoseFrame;
