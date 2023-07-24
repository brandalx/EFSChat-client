import React, { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: MainProps) => {
  return <main className='page-body'>{children}</main>;
};

export default Main;
