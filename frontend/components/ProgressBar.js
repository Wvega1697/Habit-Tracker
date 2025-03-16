import React from 'react';

const ProgressBar = () => {
  return (
    <div className="w-full bg-red-200 rounded-full h-4 my-4">
      {/* Barra estática, por ejemplo, 50% de progreso */}
      <div className="bg-green-500 h-4 rounded-full" style={{ width: '50%' }}></div>
    </div>
  );
};

export default ProgressBar;
