import { useEffect, useRef, useState } from "react";

interface Options {
  root?: HTMLElement | null;
  rootMargin?: string;
  threshold: number;
}

function useIntersectionObserver(
  unobserve?: boolean,
  options: Options = { threshold: 0.1 },
) {
  const elementRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsvisible] = useState(false);
  useEffect(() => {
    if (!elementRef) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsvisible(true);
        if (unobserve) {
          observer.unobserve(entry.target);
        }
      } else {
        if (!unobserve) {
          setIsvisible(false);
        }
      }
    }, options);
    observer.observe(elementRef.current as HTMLElement);
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [options, unobserve]);
  return { elementRef, isVisible };
}
export default useIntersectionObserver;
