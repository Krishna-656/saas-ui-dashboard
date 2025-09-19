import React, { useState, useEffect } from 'react';

export default function ScrollTop(){
  const [show, setShow] = useState(false);
  useEffect(()=>{
    const onScroll = ()=> setShow(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return ()=> window.removeEventListener('scroll', onScroll);
  },[]);
  if(!show) return null;
  return (
    <button aria-label="Scroll to top" onClick={()=>window.scrollTo({top:0, behavior:'smooth'})} className="fixed right-6 bottom-6 p-3 rounded-full bg-indigo-600 text-white shadow-lg">↑</button>
  );
}
