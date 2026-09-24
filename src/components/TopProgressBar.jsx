import { useEffect, useState } from 'react';

export default function TopProgressBar({ isLoading }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer1, timer2, timer3, timer4;

    if (isLoading) {
      setVisible(true);
      setProgress(15);

      timer1 = setTimeout(() => {
        setProgress(45);
      }, 100);

      timer2 = setTimeout(() => {
        setProgress(75);
      }, 250);

      timer3 = setTimeout(() => {
        setProgress(88);
      }, 600);
    } else if (visible) {
      setProgress(100);
      timer4 = setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 300);
    }

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [isLoading, visible]);

  if (!visible && progress === 0) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[999999] pointer-events-none transition-opacity duration-300"
      style={{ opacity: visible ? 1 : 0 }}
      aria-hidden="true"
    >
      <div
        className="h-[3px] bg-gradient-to-r from-amber-400 via-[#0966c2] to-cyan-400 shadow-[0_0_12px_rgba(9,102,194,0.85)] transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
