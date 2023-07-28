import React from 'react';

const MenuLogo: React.FC = () => {
  return (
    <div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='icon icon-tabler icon-tabler-category'
        width={24}
        height={24}
        viewBox='0 0 24 24'
        strokeWidth={2}
        stroke='#0147FF'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M4 4h6v6h-6z' />
        <path d='M14 4h6v6h-6z' />
        <path d='M4 14h6v6h-6z' />
        <path d='M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0' />
      </svg>
    </div>
  );
};

export default MenuLogo;
