"use client";
import "../styles/animations.css";
import Square from "./Squeare";
import { animationClasses } from "../lib/animateClasses";
import keyframesMap from "../lib/keyframes";
import React from "react";
import { OptionsToCode } from "../types";
import useIntersectionObserver from "./hooks/useIntersectionObserver";
import useCycling from "./hooks/useCycling";
import useActiveOption from "./hooks/useActiveOption";
import Code from "./functions/CodeClass";
import { useGridContext } from "./context/GridContext";
import GlobalControls from "./GlobalControls";
const SecuencialGrid = () => {
  const { shouldAnimate, setIsHovering } = useCycling({
    infinite: false,
    globalPlay: false,
    duration: 1,
    delay: 0,
  });

  return (
    <section className="mx-auto w-fit my-10">
      <h2 className="dark:text-gray-50 text-gray-900">Secuencial animations</h2>
      <GlobalControls context={useGridContext} />
      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className={`grid gap-3 grid-cols-6 size-fit mx-auto`}
      >
        {renderGrid(4, 6, shouldAnimate)}
      </div>
    </section>
  );
};

function renderGrid(rows: number, columns: number, shouldAnimate: boolean) {
  const rowsAmount = [];
  for (let i = 0; i < rows; i++) {
    const columnsAmount = [];
    for (let j = 0; j < columns; j++) {
      columnsAmount.push(
        <Square
          firstSquare={j === 0 && i === 0 ? true : false}
          lastSquare={j === columns && i === rows ? true : false}
          shouldAnimate={shouldAnimate}
          key={i + "_" + j}
          i={i}
          j={j}
        />,
      );
    }
    rowsAmount.push(columnsAmount);
  }
  return rowsAmount;
}

export default SecuencialGrid;
