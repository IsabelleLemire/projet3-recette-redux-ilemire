import React from 'react';
import './CustomButton.css';

const CustomButton = ({ onClick, children }) => <button  onClick={onClick}>{children}</button>;

export default CustomButton;
