import React from 'react';
import Lottie from "lottie-react";
import load from '../../../public/frypan-loading.json';

const LoadinPan = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-80px-50px)]">
      <Lottie animationData={load} loop={true} style={{ width: 150, height: 150 }} />
    </div>
  );
};

export default LoadinPan;
