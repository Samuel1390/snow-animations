"use client";
import { RefObject, useEffect, useState } from "react";
import React from "react";
import useIntersectionObserver from "./hooks/useIntersectionObserver";
// por lo pronto estas cuatro
type AnimationType =
  | "fade-in-blur"
  | "scale-in"
  | "slide-in-left"
  | "slide-in-right"
  | "fade-in-up" // si ya existe
  | "zoom-in" // si ya existe
  | string; // permitir cualquier clase

interface RevealOnScrollProps {
  children: React.ReactNode;
  animation?: AnimationType;
  threshold?: number;
  rootMargin?: string;
  className?: string;
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  animation = "fade-in-blur",
  threshold = 0.2,
  rootMargin = "0px",
  className = "",
}) => {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold,
    rootMargin,
  });

  return (
    <div
      ref={elementRef as RefObject<HTMLDivElement>}
      className={`transition-all duration-700 ${className} ${
        isVisible ? `animate-${animation}` : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
