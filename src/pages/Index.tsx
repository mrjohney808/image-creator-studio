import { useState } from 'react';
import CelebrationPage from './CelebrationPage';
import AnniversaryPage from './AnniversaryPage';

const Index = () => {
  const [currentPage, setCurrentPage] = useState<'celebration' | 'anniversary'>('celebration');

  if (currentPage === 'anniversary') {
    return (
      <AnniversaryPage 
        onBack={() => setCurrentPage('celebration')}
        creatorName="Abdirahman"
      />
    );
  }

  return (
    <div onClick={() => setCurrentPage('anniversary')} className="cursor-pointer">
      <CelebrationPage />
    </div>
  );
};

export default Index;
