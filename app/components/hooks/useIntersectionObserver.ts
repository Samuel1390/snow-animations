import { useEffect, useRef, useState } from "react";

interface Options {
  root?: HTMLElement | null;
  rootMargin?: string;
  threshold: number;
}

function useIntersectionObserver(options: Options = { threshold: 0.1 }) {
  const elementRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsvisible] = useState(false);
  useEffect(() => {
    if (!elementRef) return;
    const observer = new IntersectionObserver(([entry]) => {
      setIsvisible(entry.isIntersecting);
    }, options);
    observer.observe(elementRef.current as HTMLElement);
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [options]);
  return { elementRef, isVisible };
}
export default useIntersectionObserver;
