import React from 'react';

const Spinner = () => {
  return (
    <div className="w-full flex justify-center items-center py-6">
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-4 border-t-black border-r-gray-600 border-b-gray-400 border-l-gray-200 animate-spin" />
        <div 
          className="absolute top-1 left-1 w-10 h-10 rounded-full border-4 border-t-gray-300 border-r-gray-400 border-b-gray-600 border-l-black animate-[spin_1s_linear_infinite_reverse]"
        />
        <div className="absolute top-[18px] left-[18px] w-3 h-3 bg-gradient-to-br from-black to-gray-500 rounded-full shadow-lg" />
      </div>
    </div>
  );
};

export default Spinner;