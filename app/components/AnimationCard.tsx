"use client";
import "../styles/pageAnimations.css";
import { useAnimationContext } from "./context/AnimationContext";
import useActiveOption from "./hooks/useActiveOption";
import CardControls from "./CardControls";
import { useModal } from "./context/ModalContext";
import CodeBlock from "./CodeBlock";
import useIntersectionObserver from "./hooks/useIntersectionObserver";
import { animationClasses } from "../lib/animateClasses";
import { AnimationCardProps, OptionsToCode } from "../types";
import Overview from "./Overview";
import keyframesMap from "../lib/keyframes";
import useCycling from "./hooks/useCycling";
import Code from "./functions/CodeClass";
import { RefObject, useEffect } from "react";
import { useState } from "react";
export default function AnimationCard({
  cssClass,
  description,
  infinite = false,
  indexData,
}: AnimationCardProps) {
  const { elementRef: cardRef, isVisible } = useIntersectionObserver(true);
  const { active, handleActive } = useActiveOption();
  const { duration, globalPlay, delay, timingFunction, defaultProperties } =
    useAnimationContext();
  const { openModal } = useModal();
  const cardTransitionDelay = {
    transitionDelay: `0.${indexData.toString()}s`,
  };
  const animationName = cssClass.replace("animate-", "");
  const animationClass = animationClasses[cssClass];

  const keyframes = keyframesMap[animationName] || "/* Keyframes not found */";
  const optionsToCode: OptionsToCode = {
    cssClass,
    animationName,
    infinite,
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

  const { setIsHovering, shouldAnimate } = useCycling({
    infinite,
    globalPlay,
    duration,
    delay,
  });
  function handleOpenModal() {
    if (active === "overview") {
      openModal(optionsToCode);
    }
  }
  return (
    <div
      ref={cardRef as RefObject<HTMLDivElement>}
      style={cardTransitionDelay}
      className={`card fade-in-element ${isVisible ? "is-visible" : ""}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <CardControls active={active} handleActive={handleActive} />
      <div
        className={`${active === "overview" ? "p-6" : "p-3"} `}
        onClick={handleOpenModal}
      >
        {active === "overview" && (
          <Overview
            name={cssClass}
            description={description}
            shouldAnimate={shouldAnimate}
            animationValues={animationValues}
          />
        )}

        {active === "code" && (
          <CodeBlock
            type="css"
            maxWidth={400}
            maxHeight={180}
            code={fullCssCode as string}
          />
        )}
      </div>
    </div>
  );
}
