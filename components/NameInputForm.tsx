
import React from 'react';

interface NameInputFormProps {
    maleName: string;
    setMaleName: (name: string) => void;
    femaleName: string;
    setFemaleName: (name: string) => void;
    handleSubmit: (e: React.FormEvent) => void;
    isLoading: boolean;
}

const NameInputForm: React.FC<NameInputFormProps> = ({ maleName, setMaleName, femaleName, setFemaleName, handleSubmit, isLoading }) => {
    return (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
             <label htmlFor="maleName" className="block text-sm font-semibold text-gray-700 mb-1">His Name</label>
             <input
              id="maleName"
              type="text"
              value={maleName}
              onChange={(e) => setMaleName(e.target.value)}
              placeholder="e.g., Ram"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-shadow duration-300"
              disabled={isLoading}
            />
          </div>
          <div className="relative">
            <label htmlFor="femaleName" className="block text-sm font-semibold text-gray-700 mb-1">Her Name</label>
            <input
              id="femaleName"
              type="text"
              value={femaleName}
              onChange={(e) => setFemaleName(e.target.value)}
              placeholder="e.g., Seeta"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-shadow duration-300"
              disabled={isLoading}
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-4 rounded-lg hover:shadow-lg hover:from-pink-600 hover:to-purple-700 transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
          >
            {isLoading ? 'Creating Magic...' : 'Generate Name'}
          </button>
        </form>
    );
};

export default NameInputForm;
