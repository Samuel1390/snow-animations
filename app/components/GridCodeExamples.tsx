"use client";
import keyframesMap from "../lib/keyframes";
import Code from "./functions/CodeClass";
import React, { useState } from "react";
import CodeBlock from "./CodeBlock";
import { useGridContext } from "./context/GridContext";
import useWindowResize from "./hooks/useWindowResize";

interface Props {
  rows: number;
  cols: number;
}

const GridCodeExamples = ({ rows, cols }: Props) => {
  const [showCode, setShowCode] = useState(false);
  const {
    selectedAnimation,
    animationSequence,
    duration,
    delay,
    timingFunction,
  } = useGridContext();
  const windowWidth = useWindowResize();

  // importante este es el nombre base de la animación (sin prefijo)
  const animationName = selectedAnimation.replace("animate-", "");
  const keyframesCode =
    keyframesMap[selectedAnimation] || `/* Keyframes not found */`;

  // HTML
  const htmlCode = `<div id="sequential-grid" class="grid">
  ${Array.from({ length: rows }, (_, i) =>
    Array.from(
      { length: cols },
      (_, j) =>
        `  <div class="grid-item" data-row="${i}" data-col="${j}"></div>`,
    ).join("\n"),
  ).join("\n")}
</div>`;

  const cssCode = `/* Animation: ${animationName} */
${keyframesCode}


.grid {
  display: grid;
  grid-template-columns: repeat(${cols}, 1fr); // set this propertiy based on the number of columns
  gap: 0.75rem;
  width: fit-content;
  margin: 0 auto;
}

.grid-item {
  width: 5rem;
  height: 5rem;
  background: linear-gradient(135deg, #10b981, #047857);
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  animation-fill-mode: backwards; /* For hide the item before animation starts */
}

.grid-item.animate {
  animation: ${animationName} ${duration}s ${timingFunction} forwards;
}`;
  const jsCode = `// Calculate delay based on position and sequence type
function getDelay(row, col, sequence) {
  switch (sequence) {
    case 'row': return row * 0.1;
    case 'column': return col * 0.1;
    case 'diagonal': return (row + col) * 0.1;
    case 'both': return row * 0.1 + col * 0.05;
    default: return 0;
  }
}

const grid = document.getElementById('sequential-grid');
const items = document.querySelectorAll('.grid-item');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      items.forEach(item => {
        const row = parseInt(item.dataset.row);
        const col = parseInt(item.dataset.col);
        const delay = getDelay(row, col, '${animationSequence}');
        item.style.animationDelay = delay + 's';
        item.classList.add('animate');
      });
      // Optionally unobserve after the grid has entered the viewport
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

observer.observe(grid);`;

  const reactCode = `import React, { useEffect, useRef, useState } from 'react';
import './Grid.css';

const Grid = () => {
  const [isVisible, setIsVisible] = useState(false);
  const gridRef = useRef();
  const rows = ${rows}, cols = ${cols};

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  const getDelay = (row, col) => {
    switch ('${animationSequence}') {
      case 'row': return row * 0.1;
      case 'column': return col * 0.1;
      case 'diagonal': return (row + col) * 0.1;
      case 'both': return row * 0.1 + col * 0.05;
      default: return 0;
    }
  };

  return (
    <div className="grid" ref={gridRef}>
      {Array.from({ length: rows }).map((_, i) =>
        Array.from({ length: cols }).map((_, j) => (
          <div
            key={\`\${i}-\${j}\`}
            className={\`grid-item \${isVisible ? 'animate' : ''}\`}
            style={{
              animationDelay: isVisible ? getDelay(i, j) + 's' : undefined,
            }}
          />
        ))
      )}
    </div>
  );
};

export default Grid;`;

  return (
    <div className="mt-8 flex flex-col items-center">
      <button
        onClick={() => setShowCode(!showCode)}
        className="dark:bg-gray-800 bg-slate-50 text-black shadow-neutral-800/50 dark:text-white
        px-4 py-2 rounded-full cursor-pointer
        shadow-md hover:bg-slate-400 font-bold text-shadow-2xs dark:text-shadow-neutral-600/50 mx-auto
        w-fit dark:hover:bg-gray-700 transition"
      >
        {showCode ? "Hide code" : "Show code"}
      </button>

      {showCode && (
        <>
          <h3 className="paragraph my-4">
            <strong>Note important:</strong> in this app the grid is animated by
            hover above it, however, in the code examples the animation is
            triggered when the grid enters the viewport, this is the common way
            to trigger this kind of animation, but you can easily change the
            trigger to hover if you want.
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <CodeBlock
              type="html"
              maxWidth={windowWidth && windowWidth < 768 ? 768 : 400}
              maxHeight={300}
              code={htmlCode}
            />
            <CodeBlock
              type="css"
              maxWidth={windowWidth && windowWidth < 768 ? 768 : 400}
              maxHeight={300}
              code={cssCode}
            />
            <CodeBlock
              type="js"
              maxWidth={windowWidth && windowWidth < 768 ? 768 : 400}
              maxHeight={300}
              code={jsCode}
            />
            <CodeBlock
              type="tsx"
              maxWidth={windowWidth && windowWidth < 768 ? 768 : 400}
              maxHeight={300}
              code={reactCode}
            />
          </div>
        </>
      )}
    </div>
  );
};
export default GridCodeExamples;
