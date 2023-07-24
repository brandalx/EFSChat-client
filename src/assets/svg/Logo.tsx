import React from 'react';

const Logo: React.FC = () => {
  return (
    <div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='icon icon-tabler icon-tabler-message-2-code'
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
        <path d='M8 9h8' />
        <path d='M8 13h6' />
        <path d='M12 21l-1 -1l-2 -2h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6' />
        <path d='M20 21l2 -2l-2 -2' />
        <path d='M17 17l-2 2l2 2' />
      </svg>
    </div>
  );
};

export default Logo;
