import React from 'react';
import { useHistory } from 'react-router-dom';

import './Button.css';

const BackButton = () => {
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <button onClick={handleGoBack}>Retour</button>
  );
};

export default BackButton;
