import { useState, useEffect } from 'react';

export function useAnimatedCounter(target: number, trigger: boolean): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    const duration = 2000; // 2 seconds
    const steps = 60; // 60 FPS
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current += increment;
      
      if (step >= steps) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target, trigger]);

  return count;
}
