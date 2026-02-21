import useCycling from "../hooks/useCycling";
import { OptionsToCode, OptionsToGetCssValues } from "../../types";
import Card from "./Card";
import Image from "next/image";
import "../../styles/animations.css";
import Code from "../functions/CodeClass";
import { useAnimationContext } from "../context/AnimationContext";
interface ExampleCardProps {
  type: "text" | "button" | "image" | "card";
  selectedAnimation: OptionsToCode;
  label?: string;
}
export default function ExampleCard({
  type,
  label,
  selectedAnimation,
}: ExampleCardProps) {
  const { defaultProperties } = useAnimationContext();
  const { animationName, infinite, delay, duration, timingFunction } =
    selectedAnimation;
  const { shouldAnimate } = useCycling({
    duration: duration || 0.5,
    delay: delay || 0.5,
    infinite,
    globalPlay: true,
  });
  const optionsToValue: OptionsToGetCssValues = {
    infinite,
    duration,
    delay,
    animationName,
    timingFunction,
    fillMode: "none",
  };
  const animationValues = Code.getAnimationValues(optionsToValue);
  const animateByStyles = {
    // Dinamico
    animation: shouldAnimate && !defaultProperties ? animationValues : "",
  };
  // Estatico
  const animateByClasses = `${shouldAnimate && defaultProperties ? selectedAnimation.cssClass : ""}`;
  const renderExample = () => {
    switch (type) {
      case "text":
        return (
          <span
            style={animateByStyles}
            className={`${animateByClasses} text-2xl font-bold`}
          >
            Snow animations
          </span>
        );
      case "button":
        return (
          <button
            style={animateByStyles}
            className={`${animateByClasses} text-2xl px-4 py-2 bg-linear-to-br from-purple-600 to-rose-500 font-bold text-white rounded`}
          >
            Save
          </button>
        );
      case "image":
        return (
          <div className="size-fit flex gap-3 flex-col my-auto">
            <Image
              alt="example image"
              width={400}
              height={400}
              style={animateByStyles}
              src="https://media.istockphoto.com/id/1451084498/es/foto/adolescentes-bromeando-en-un-festival-de-m%C3%BAsica.jpg?s=612x612&w=0&k=20&c=iwfm4wMLieCJMoB-f2EWnMUy9UGOSCYaZKMrna04KdQ="
              className={`${animateByClasses} object-cover  rounded`}
            />
            <Image
              alt="example image"
              width={400}
              height={400}
              style={animateByStyles}
              src="https://blog.gimlivingspaces.com/hubfs/Muelle%20r%C3%BAstico%20de%20madera%20con%20una%20palapa%20con%20vistas%20a%20las%20aguas%20turquesas%20cristalinas%20en%20Isla%20Mujeres%2C%20playa%20de%20M%C3%A9xico.webp"
              className={`${animateByClasses} object-cover  rounded`}
            />
          </div>
        );
      case "card":
        return (
          <div
            style={animateByStyles}
            className={`${animateByClasses} rounded shadow `}
          >
            <Card />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex  flex-col items-center gap-2 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
      {renderExample()}
      <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">
        {type}
      </span>
    </div>
  );
}
