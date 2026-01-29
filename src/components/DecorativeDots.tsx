const DecorativeDots = () => {
  const dots = [
    { top: '10%', left: '8%', size: 'w-1.5 h-1.5', delay: '0s' },
    { top: '15%', right: '12%', size: 'w-1 h-1', delay: '0.5s' },
    { top: '35%', left: '5%', size: 'w-1 h-1', delay: '1s' },
    { top: '45%', right: '8%', size: 'w-1.5 h-1.5', delay: '0.3s' },
    { top: '55%', left: '10%', size: 'w-1 h-1', delay: '0.7s' },
    { top: '65%', right: '15%', size: 'w-1 h-1', delay: '1.2s' },
    { top: '75%', left: '12%', size: 'w-1.5 h-1.5', delay: '0.2s' },
    { top: '85%', right: '10%', size: 'w-1 h-1', delay: '0.9s' },
    { top: '25%', left: '20%', size: 'w-1 h-1', delay: '1.5s' },
    { top: '70%', right: '20%', size: 'w-1 h-1', delay: '0.6s' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {dots.map((dot, index) => (
        <div
          key={index}
          className={`absolute ${dot.size} rounded-full bg-cream-muted animate-pulse-soft`}
          style={{
            top: dot.top,
            left: dot.left,
            right: dot.right,
            animationDelay: dot.delay,
            opacity: 0.4,
          }}
        />
      ))}
    </div>
  );
};

export default DecorativeDots;
