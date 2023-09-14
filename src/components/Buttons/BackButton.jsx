import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Button.css';

const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <button onClick={handleGoBack}>Back</button>
  );
};

export default BackButton;
