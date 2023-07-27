import React from 'react';

const useTime = (): ((date: number) => string) => {
  function formatTime(date: number): string {
    const options: Intl.DateTimeFormatOptions = {
      hour12: true,
      hour: 'numeric',
      minute: 'numeric'
    };
    return new Date(date).toLocaleTimeString('en-US', options);
  }

  return formatTime;
};

export default useTime;
