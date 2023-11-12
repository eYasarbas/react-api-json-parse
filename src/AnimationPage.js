import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DeltaA from './Delta-A.gif'; 

const AnimationPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const animationDuration = 7000; 
    
    const animationEndCallback = () => {
      setTimeout(() => {
        navigate("/home"); 
      }, animationDuration);
    };
    animationEndCallback(); 

    return () => {
    };
  }, [navigate]);

  return (
    <div>
      <img src={DeltaA} alt="Delta-A GIF" /> 
    </div>
  );
};

export default AnimationPage;
