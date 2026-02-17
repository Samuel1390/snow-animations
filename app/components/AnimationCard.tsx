"use client";
import "../styles/pageAnimations.css";
import { useAnimationContext } from "./AnimationContext";
import useActiveOption from "./hooks/useActiveOption";
import CardControls from "./CardControls";
import { useModal } from "./ModalContext";
import CodeBlock from "./CodeBlock";
import useIntersectionObserver from "./hooks/useIntersectionObserver";
import { animationClasses } from "../lib/animateClasses";
import { AnimationCardProps, OptionsToCode } from "../types";
import Overview from "./Overview";
import keyframesMap from "../lib/keyframes";
import useCycling from "./hooks/useCycling";
import Code from "./functions/CodeClass";
import { RefObject } from "react";
export default function AnimationCard({
  name,
  cssClass,
  description,
  infinite = false,
  indexData,
}: AnimationCardProps) {
  const { elementRef: cardRef, isVisible } = useIntersectionObserver();
  const { duration, globalPlay, delay, timingFunction, defaultProperties } =
    useAnimationContext();
  const { active, handleActive } = useActiveOption();
  const { openModal } = useModal();
  const cardTransitionDelay = {
    transitionDelay: `0.${indexData.toString()}s`,
  };
  const animationName = name.replace("animate-", "");
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
      <div className={`p-6 ${cardRef}`} onClick={handleOpenModal}>
        {active === "overview" && (
          <Overview
            name={name}
            description={description}
            shouldAnimate={shouldAnimate}
            animationValues={animationValues}
          />
        )}

        {active === "code" && <CodeBlock code={fullCssCode as string} />}
      </div>
    </div>
  );
}
