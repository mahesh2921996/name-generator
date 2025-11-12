
import React, { useState, useCallback } from 'react';
import { generateBabyName } from './services/geminiService';
import { BabyNameResult } from './types';
import BabyNameCard from './components/BabyNameCard';
import Loader from './components/Loader';
import ErrorDisplay from './components/ErrorDisplay';
import Header from './components/Header';
import NameInputForm from './components/NameInputForm';

const App: React.FC = () => {
  const [maleName, setMaleName] = useState<string>('');
  const [femaleName, setFemaleName] = useState<string>('');
  const [result, setResult] = useState<BabyNameResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!maleName.trim() || !femaleName.trim()) {
      setError('Please enter both names to see the magic!');
      return;
    }

    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const generatedResult = await generateBabyName(maleName, femaleName);
      setResult(generatedResult);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  }, [maleName, femaleName]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex flex-col items-center justify-center p-4 selection:bg-pink-300 selection:text-white">
      <main className="w-full max-w-md mx-auto bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl shadow-pink-200/50 p-6 md:p-8 transition-all duration-500">
        <Header />
        
        <NameInputForm 
          maleName={maleName}
          setMaleName={setMaleName}
          femaleName={femaleName}
          setFemaleName={setFemaleName}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
        />

        <div className="mt-6 min-h-[150px] flex items-center justify-center">
          {isLoading && <Loader />}
          {error && <ErrorDisplay message={error} />}
          {result && !isLoading && <BabyNameCard result={result} />}
        </div>
      </main>
      <footer className="text-center mt-8 text-gray-500 text-sm">
        <p>Crafted with &hearts; by AI</p>
      </footer>
    </div>
  );
};

export default App;
