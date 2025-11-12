
import React from 'react';

const HeartIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mx-2 text-pink-400" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
    </svg>
);


const Header: React.FC = () => {
    return (
        <div className="text-center mb-6">
            <h1 className="font-pacifico text-4xl md:text-5xl font-bold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
                Love's Legacy
            </h1>
            <p className="text-gray-500 mt-2 text-md">
                Find the perfect name for your first-born.
            </p>
        </div>
    );
}

export default Header;
