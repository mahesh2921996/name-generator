
import React from 'react';
import { BabyNameResult } from '../types';

interface BabyNameCardProps {
  result: BabyNameResult;
}

const MaleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 2a3 3 0 0 1 3 3v2.17a1 1 0 0 1-.24.65l-2.2 2.76A1 1 0 0 1 19 9.3V12a1 1 0 0 1-2 0V9.3a1 1 0 0 1 .45-.82l2.2-2.76A1 1 0 0 1 20 5.08V5a1 1 0 0 0-1-1h-2.17a1 1 0 0 1-.65-.24l-2.76-2.2A1 1 0 0 1 12.7 1H10a1 1 0 0 1 0-2h2.7a1 1 0 0 1 .82.45l2.76 2.2a1 1 0 0 1 .65.24V2zm-8.3 8.3a5.5 5.5 0 1 1-7.78 0 5.5 5.5 0 0 1 7.78 0zm-1.41 1.41a3.5 3.5 0 1 0-4.95-4.95 3.5 3.5 0 0 0 4.95 4.95z"/>
  </svg>
);

const FemaleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 9c-2.48 0-4.75-.9-6.5-2.5a1 1 0 0 1 1-1.73c1.42.94 3.16 1.48 5 1.48s3.58-.54 5-1.48a1 1 0 0 1 1 1.73c-1.75 1.6-4.02 2.5-6.5 2.5z"/>
    </svg>
);


const BabyNameCard: React.FC<BabyNameCardProps> = ({ result }) => {
  const isMale = result.gender.toLowerCase() === 'male';
  const genderColor = isMale ? 'text-blue-500' : 'text-pink-500';

  return (
    <div className="w-full text-center p-6 bg-white rounded-lg shadow-md animate-fade-in">
      <p className="text-gray-500 text-sm">A beautiful name appears...</p>
      <h2 className="font-pacifico text-5xl font-bold my-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
        {result.name}
      </h2>
      <div className={`flex items-center justify-center gap-2 font-semibold text-lg ${genderColor}`}>
        {isMale ? <MaleIcon className="h-5 w-5" /> : <FemaleIcon className="h-5 w-5" />}
        <span>{result.gender}</span>
      </div>
      <p className="text-gray-600 mt-4 italic">
        "{result.description}"
      </p>
    </div>
  );
};

export default BabyNameCard;
