import React from 'react';
import { Link } from 'react-router-dom';

const CustomLink = ({ to, children }) => <Link to={to}>{children}</Link>;

export default CustomLink;
