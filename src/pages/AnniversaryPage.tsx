import { ChevronLeft } from 'lucide-react';
import DecorativeDots from '@/components/DecorativeDots';
import GlowCard from '@/components/GlowCard';
import HeartIcon from '@/components/HeartIcon';
import RomanticButton from '@/components/RomanticButton';

interface AnniversaryPageProps {
  onBack?: () => void;
  creatorName?: string;
}

const AnniversaryPage = ({ 
  onBack, 
  creatorName = 'Abdirahman' 
}: AnniversaryPageProps) => {
  return (
    <div className="min-h-screen bg-gradient-romantic flex flex-col relative overflow-hidden">
      <DecorativeDots />
      
      {/* Header */}
      <header className="pt-6 pb-4 px-6 flex items-center justify-between">
        <button 
          onClick={onBack}
          className="text-primary hover:text-primary/80 transition-colors"
        >
          <ChevronLeft size={28} />
        </button>
        
        <h2 className="text-primary text-sm tracking-[0.3em] font-body uppercase">
          Anniversary
        </h2>
        
        <div className="w-7" /> {/* Spacer for centering */}
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center px-6 pt-4 pb-8">
        {/* Glow Card */}
        <div className="w-full max-w-sm mb-8 animate-scale-in">
          <GlowCard className="h-48" />
        </div>

        {/* Message section */}
        <div className="text-center mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-1">
            Surprise-kan waxaa
            <br />
            kuu sameeyay
          </h1>
          <p className="font-display text-3xl md:text-4xl font-bold text-gradient-rose">
            {creatorName}
          </p>
          
          {/* Decorative line */}
          <div className="w-16 h-0.5 bg-primary mx-auto my-6" />
          
          <p className="text-cream-muted font-body text-base max-w-xs mx-auto leading-relaxed">
            si uu kuu xasuusiyo in bil walba ay noqon karto mid gaar ah marka adiga aad ku jirto.
          </p>
        </div>

        {/* Heart and signature */}
        <div className="flex flex-col items-center mb-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <HeartIcon size={36} className="text-gold mb-3 animate-pulse-soft" />
          <p className="text-cream-muted/60 text-sm tracking-[0.4em] font-body">
            M X A
          </p>
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <RomanticButton>
            Waan ku jeclahay
          </RomanticButton>
        </div>
      </main>
    </div>
  );
};

export default AnniversaryPage;
