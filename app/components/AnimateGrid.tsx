"use client";
import React, { useEffect, useRef } from "react";
import { animate, stagger, utils } from "animejs";
import { Ref } from "react";
import { JSAnimation } from "animejs";

const AnimateGrid = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const animationRef = useRef<JSAnimation | null>(null);
  const grid = [44, 20];

  useEffect(() => {
    const runAnimation = () => {
      const squares = containerRef.current?.querySelectorAll(".square");
      const from = utils.random(0, grid[0] * grid[1] - 1);
      if (squares) {
        animationRef.current = animate(squares, {
          translateX: [
            { to: stagger("-.75rem", { grid, from, axis: "x" }) },
            { to: 0, ease: "inOutQuad" },
          ],
          translateY: [
            { to: stagger("-.75rem", { grid, from, axis: "y" }) },
            { to: 0, ease: "inOutQuad" },
          ],
          opacity: [{ to: 0.5 }, { to: 1 }],
          delay: stagger(85, { grid, from }),
          onComplete: runAnimation,
        });
      }
    };

    runAnimation();

    return () => {
      if (animationRef.current) {
        animationRef.current.pause();
      }
    };
  }, []);

  const renderGrid = () => {
    const rows = [];
    for (let row = 0; row < grid[1]; row++) {
      const squares = [];
      for (let col = 0; col < grid[0]; col++) {
        squares.push(
          <div
            key={`${row}-${col}`}
            className="square size-15 bg-gray-300/30 dark:bg-neutral-600/30 rounded-md"
          />,
        );
      }
      rows.push(
        <div
          key={row}
          className="row small justified flex justify-between gap-2"
        >
          {squares}
        </div>,
      );
    }
    return rows;
  };

  return (
    <div
      className="grid-container flex flex-col p-8 gap-2 absolute"
      ref={containerRef as Ref<HTMLDivElement>}
    >
      {renderGrid()}
    </div>
  );
};

export default AnimateGrid;
