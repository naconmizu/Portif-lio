'use client';
import { useEffect, useRef, useState } from 'react';

export const EmailHover = () => {
  const [copied, setCopied] = useState(false);
  const [tooltip, setTooltip] = useState<{ x: number; y: number } | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);


  const handleCopy = (e: React.MouseEvent<HTMLSpanElement>) => {
    navigator.clipboard.writeText("mctangerina@gmail.com");

    setTooltip({ x: e.clientX, y: e.clientY });

    // se clicar de novo antes de acabar, reinicia os 2s
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setTooltip(null), 1000);
  };

  // limpa o timer se o componente for desmontado
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);


  return (
    <a

      className="cursor-pointer group inline-flex items-center gap-2 text-2xl"
    >
      {/* Texto padrão */}
      <span>email</span>

      {/* Email que desliza ao passar o rato */}
      <span className="grid grid-cols-[0fr] transition-[grid-template-columns] duration-500 ease-in-out group-hover:grid-cols-[1fr]">
        <span className="overflow-hidden whitespace-nowrap">
          <span onClick={handleCopy} className="inline-block text-[#8ba9ff] -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0">
            mctangerina@gmail.com
          </span>
          {tooltip && (
            <span
              className="pointer-events-none fixed z-50 -translate-x-1/2 rounded bg-black/80 px-2 py-1 text-xs text-white"
              style={{ left: tooltip.x, top: tooltip.y + 20 }}
            >
              Copiado!
            </span>
          )}
        </span>
      </span>
    </a>
  );
};
