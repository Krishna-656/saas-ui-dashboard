import React from 'react';

/* Simple skeleton component */
export default function Skeleton({className='h-6 rounded-md w-full'}){
  return <div className={`skeleton ${className}`}></div>;
}
