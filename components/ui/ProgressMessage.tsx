'use client';
import { useState, useEffect } from 'react';
import { Arrow } from '../portfolio';

export const OnClickViewProjectInProgressMessage = () => {
  const [vis, setVis] = useState(false);

  useEffect(() => {
    if (!vis) return;
    const timeout = setTimeout(() => setVis(false), 2000);
    return () => clearTimeout(timeout);
  }, [vis]);

  return (
    <div className="relative inline-block">
      <div
        className={`absolute bottom-full left-1/2 z-50 mb-3 -translate-x-1/2 whitespace-nowrap rounded-lg border border-white/10 bg-[#151a2d] px-4 py-2 text-sm text-white shadow-xl transition-opacity duration-300 ${vis ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      >
        <p>🦈Still in development🦈</p>
        <div className="absolute left-1/2 top-full -translate-x-1/2 border-8 border-transparent border-t-[#151a2d]" />
      </div>
      <button onClick={() => setVis(true)} className="text-button">
        View project <Arrow />
      </button>
    </div>
  );
};
