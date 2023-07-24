import React from 'react';
import Navbar from './Navbar';
import theme from '../utils/theme';

const Header: React.FC = () => {
  return (
    <header
      className='page-header'
      style={{ background: theme.colors.neutral.bg, height: 'auto', paddingBottom: '10px' }}
    >
      <Navbar />
    </header>
  );
};

export default Header;
