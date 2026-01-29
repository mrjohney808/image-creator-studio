import HeartIcon from './HeartIcon';

interface MonthIndicatorProps {
  month: number;
}

const MonthIndicator = ({ month }: MonthIndicatorProps) => {
  return (
    <div className="flex items-center justify-between w-full px-6">
      {/* Heart icon */}
      <HeartIcon size={28} className="text-primary" />
      
      {/* Progress bar */}
      <div className="flex-1 mx-4 h-0.5 bg-secondary rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary rounded-full transition-all duration-1000"
          style={{ width: `${Math.min((month / 12) * 100, 100)}%` }}
        />
      </div>
      
      {/* Month counter */}
      <div className="text-right">
        <div className="text-primary font-display text-2xl font-bold leading-none">
          {month.toString().padStart(2, '0')}
        </div>
        <div className="text-primary text-xs tracking-widest font-body">
          MONTH
        </div>
      </div>
    </div>
  );
};

export default MonthIndicator;
