import React from "react";
import { useAnimationContext } from "./AnimationContext";
interface Props {
  name: string;
  description?: string;
  shouldAnimate: boolean;
  animationValues: string;
}
const Overview = ({
  name,
  description,
  shouldAnimate,
  animationValues,
}: Props) => {
  const { defaultProperties } = useAnimationContext();
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2 capitalize text-gray-900 dark:text-white">
        {name.replace("animate-", "").replace(/-/g, " ")}
      </h3>
      {description && (
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          {description}
        </p>
      )}

      {/* cuadro para el ejemplo */}
      <div className="square-bg ">
        <div
          style={{
            animation:
              shouldAnimate && !defaultProperties ? animationValues : "",
          }}
          className={`square-animated ${shouldAnimate && defaultProperties ? name : ""}`}
        />
      </div>
    </div>
  );
};

export default Overview;
