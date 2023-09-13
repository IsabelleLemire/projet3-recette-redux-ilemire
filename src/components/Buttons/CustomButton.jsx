import React from 'react';
import './Button.css';

const CustomButton = ({ onClick, children }) => <button  onClick={onClick}>{children}</button>;

export default CustomButton;
