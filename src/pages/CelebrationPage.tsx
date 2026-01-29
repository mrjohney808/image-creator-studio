import { useState } from 'react';
import DecorativeDots from '@/components/DecorativeDots';
import MonthIndicator from '@/components/MonthIndicator';
import RoseFrame from '@/components/RoseFrame';
import RomanticButton from '@/components/RomanticButton';

const CelebrationPage = () => {
  const [, setShowNext] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-romantic flex flex-col relative overflow-hidden">
      <DecorativeDots />
      
      {/* Header */}
      <header className="pt-8 pb-4">
        <MonthIndicator month={1} />
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 pb-8">
        {/* Main heading */}
        <div className="text-center mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
            Hal bil ayay
            <br />
            noqotay tan iyo
            <br />
            markii aan wada
            <br />
            hadal bilownay.
          </h1>
          
          <p className="text-cream-muted font-body text-base md:text-lg max-w-sm mx-auto leading-relaxed">
            Waqti yar, balse dareen run ah. Qosol, faham, iyo xasuus aan si tartiib ah u dhisanay.
          </p>
        </div>

        {/* Rose image */}
        <div className="mb-12 animate-scale-in" style={{ animationDelay: '0.5s' }}>
          <RoseFrame />
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <RomanticButton onClick={() => setShowNext(true)}>
            Mushtaaq
          </RomanticButton>
        </div>
      </main>

      {/* Footer */}
      <footer className="pb-8 text-center">
        <p className="text-cream-muted/60 text-xs tracking-[0.3em] font-body uppercase">
          Mahad sanid gacaliso
        </p>
      </footer>
    </div>
  );
};

export default CelebrationPage;
