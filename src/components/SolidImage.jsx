import React from 'react';

const SolidImage = () => {
  return (
    <div className="w-screen flex justify-center items-center py-10 bg-white">
      <img
        src="/solid.png"
        alt="Solid"
        className="max-w-full h-auto object-contain"
      />
    </div>
  );
};

export default SolidImage;
