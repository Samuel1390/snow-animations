"use client";
import { useModal } from "./ModalContext";
import ExampleCard from "./Examples/ExampleCard";
import { useAnimationContext } from "./AnimationContext";
import Code from "./functions/CodeClass";
import CodeBlock from "./CodeBlock";
import { animationClasses } from "../lib/animateClasses";
import { OptionsToCode } from "../types";
export default function AnimationModal() {
  const { selectedAnimation, closeModal } = useModal();
  const { duration, delay, timingFunction, defaultProperties } =
    useAnimationContext();
  if (!selectedAnimation) return null;

  const { cssClass, animationName, infinite, keyframes } = selectedAnimation;
  if (!cssClass || !animationName) {
    console.error("Animación inválida: faltan cssClass o animationName");
    return null;
  }

  const currentOptions: OptionsToCode = {
    cssClass,
    animationName,
    infinite: infinite ?? false,
    duration: duration ?? 0.5,
    delay: delay ?? 0,
    timingFunction: timingFunction ?? "ease-in-out",
    keyframes: keyframes ?? "/* Keyframes not found */",
    fillMode: "none",
  };
  const animationClass = animationClasses[cssClass];
  const fullCssCode = defaultProperties
    ? Code.getClassAndKeyFrames(animationClass, keyframes) // Ambos retornan la misma estructura de codigo pero reciben diferentes tipos de argumentos
    : Code.getFullCssCode(currentOptions); // el de arriba espara las animaciones por defecto y este es para valores dinamicos
  const animationValues = Code.getAnimationValues(currentOptions);

  const exampleTypes = ["text", "button", "image", "card"] as const;

  return (
    <div
      className="fixed inset-0 backdrop-blur-md bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={closeModal}
    >
      <div
        className="bg-white dark:bg-gray-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold capitalize">
            {selectedAnimation.animationName.replace(/-/g, " ")}
          </h2>
          <button
            onClick={closeModal}
            className="text-xl cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            ✕
          </button>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          The animation applyed to different elements. Everything uses the same
          global settings (duration: {duration}s, delay: {delay}s, timing
          function: {timingFunction}).
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 overflow-hidden gap-4">
          {exampleTypes.map((type) => (
            <ExampleCard
              key={type}
              type={type}
              selectedAnimation={currentOptions}
            />
          ))}
        </div>

        <div className="mt-6 bg-neutral-200 dark:bg-neutral-900 border border-gray-300 dark:border-gray-600 rounded-lg">
          <div className="w-full p-2">
            <h3 className="font-semibold text-neutral-700 dark:text-gray-300">
              CSS
            </h3>
          </div>
          <CodeBlock code={fullCssCode as string} />
        </div>
      </div>
    </div>
  );
}
