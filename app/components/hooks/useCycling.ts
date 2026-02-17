import { useEffect, useRef, useState } from "react";
interface UseCyclingProps {
  infinite: boolean;
  globalPlay: boolean;
  duration: number;
  delay: number;
}

export default function useCycling({
  infinite,
  globalPlay,
  duration,
  delay,
}: UseCyclingProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [isCycling, setIsCycling] = useState(false);
  const cycleTimeoutRef = useRef<NodeJS.Timeout>(null);

  const shouldAnimate = infinite
    ? isHovering || globalPlay
    : isHovering || isCycling;

  useEffect(() => {
    if (infinite) return;

    const startCycle = () => {
      setIsCycling(true);
      cycleTimeoutRef.current = setTimeout(() => {
        setIsCycling(false);
        if (globalPlay) {
          cycleTimeoutRef.current = setTimeout(
            startCycle,
            delay > 0.5 ? delay * 1000 : 500,
          );
        }
      }, duration * 1000);
    };

    if (globalPlay) {
      startCycle();
    } else {
      setIsCycling(false);
      if (cycleTimeoutRef.current) {
        clearTimeout(cycleTimeoutRef.current);
      }
    }

    return () => {
      if (cycleTimeoutRef.current) {
        clearTimeout(cycleTimeoutRef.current);
      }
    };
  }, [globalPlay, infinite, duration, delay]);

  return { setIsHovering, shouldAnimate };
}
