"use client";
import { animationClasses } from "../lib/animateClasses";
import keyframesMap from "../lib/keyframes";
import React, { CSSProperties, useEffect, useState } from "react";
import { GridContextType, OptionsToCode } from "../types";
import useIntersectionObserver from "./hooks/useIntersectionObserver";
import useCycling from "./hooks/useCycling";
import useActiveOption from "./hooks/useActiveOption";
import Code from "./functions/CodeClass";
import { useGridContext } from "./context/GridContext";
import GlobalControls from "./GlobalControls";

interface SquareProps {
  i: number;
  j: number;
  shouldAnimate: boolean;
  firstSquare: boolean;
  lastSquare: boolean;
}

function Square({ i, j, shouldAnimate, firstSquare, lastSquare }: SquareProps) {
  //const { elementRef: squeareRef, isVisible } = useIntersectionObserver();
  const [isAnimated, setIsAnimated] = useState(false);
  const { active, handleActive } = useActiveOption();
  const {
    duration,
    globalPlay,
    delay,
    timingFunction,
    defaultProperties,
    selectedAnimation,
    animationSequence,
  } = useGridContext();
  const animationName = selectedAnimation.replace("animate-", "");
  const animationClass = animationClasses[`animate-${selectedAnimation}`];
  const keyframes = keyframesMap[animationName] || "/* Keyframes not found */";

  const optionsToCode: OptionsToCode = {
    cssClass: selectedAnimation,
    animationName,
    infinite: true,
    duration,
    delay,
    keyframes,
    timingFunction,
    fillMode: "none",
  };
  const fullCssCode = defaultProperties
    ? Code.getClassAndKeyFrames(animationClass, keyframes) // Ambos retornan la misma estructura de codigo pero reciben diferentes tipos de argumentos
    : Code.getFullCssCode(optionsToCode); // el de arriba espara las animaciones por defecto y este es para valores dinamicos
  const animationValues = Code.getAnimationValues(optionsToCode);
  const sequenceFormula = getSequenceFormula(animationSequence, i, j);
  const styleProps: CSSProperties = {
    animationName: selectedAnimation,
    animationDuration: duration + "s",
    animationTimingFunction: timingFunction,
    animationDelay: sequenceFormula + delay + "s",
    animationFillMode: "backwards",
  };
  return (
    <div
      style={
        shouldAnimate && !defaultProperties
          ? styleProps
          : isAnimated
            ? {}
            : {
                animationDelay: sequenceFormula + "s",
                animationFillMode: "backwards",
              }
      }
      onAnimationStart={firstSquare ? () => setIsAnimated(true) : () => null}
      onAnimationEnd={lastSquare ? () => setIsAnimated(false) : () => null}
      className={`${shouldAnimate && defaultProperties ? `animate-${selectedAnimation}` : ""} 
      bg-linear-to-br from-emerald-400 to-emerald-700 drop-shadow-lg drop-shadow-emerald-600/70
      size-20 rounded`}
    ></div>
  );
}

function getSequenceFormula(
  animationSequence: GridContextType["animationSequence"],
  i: number,
  j: number,
) {
  switch (animationSequence) {
    case "row":
      return i / 10;
    case "colum":
      return j / 10;
    case "diagonal":
      return (i + j) / 10;
    case "both":
      return i / 4 + j / 20;
  }
}

export default Square;
