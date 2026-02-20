import React, { useEffect, useRef, useState } from "react";
import RevealOnScroll from "./RevealOnScroll";
import CodeBlock from "./CodeBlock";
import { Blocks } from "../types";
import useWindowResize from "./hooks/useWindowResize";
import Code from "./functions/CodeClass";
const CSS_CODE = [
  `.animate-fade-in-blur {
  animation: fade-in-blur 0.8s ease-out forwards;
  }
  @keyframes fade-in-blur {
  0% {
    opacity: 0;
    filter: blur(10px);
  }
  100% {
    opacity: 1;
    filter: blur(0);
  }
}
  `,

  `
  .animate-scale-in {
    animation: scale-in 0.6s ease-out forwards;
    }
  @keyframes scale-in {
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

  `,

  `.animate-slide-in-left {
  animation: slide-in-left 0.6s ease-out forwards;

  @keyframes slide-in-left {
  0% {
    transform: translateX(-30px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

}`,

  `
  .animate-slide-in-right {
    animation: slide-in-right 0.6s ease-out forwards;
  }
  @keyframes slide-in-right {
  0% {
    transform: translateX(30px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

`,
];
const ScrollBlocks = ({
  block,
  index,
}: {
  block: Blocks[number];
  index: number;
}) => {
  const windowWidth = useWindowResize();
  const [showContent, setShowContent] = useState(false);
  return (
    <RevealOnScroll
      key={block.name + "scroll"}
      animation={block.animation}
      threshold={0.3}
    >
      <div className={`${block.className} p-8 rounded-xl shadow-lg`}>
        <h3 className="text-2xl font-semibold mb-4">{block.name}</h3>
        <button
          className="bg-gray-50/20 px-4  py-2 rounded-full font-bold shadow-md shadow-neutral-900/50 text-shadow-2xs text-shadow-neutral-600/40"
          onClick={() => setShowContent((prev) => !prev)}
        >
          {showContent ? "Hide code" : "Code"}
        </button>
        <div
          hidden={showContent ? false : true}
          className="flex md:flex-row mx-auto flex-col"
        >
          <CodeBlock
            type="html"
            maxHeight={300}
            maxWidth={windowWidth && windowWidth <= 768 ? 768 : 220}
            code={Code.gethtmlCode(block)}
          />
          <CodeBlock
            type="css"
            maxHeight={300}
            maxWidth={windowWidth && windowWidth <= 768 ? 768 : 220}
            code={CSS_CODE[index]}
          />
          <CodeBlock
            type="js"
            maxHeight={300}
            maxWidth={windowWidth && windowWidth <= 768 ? 768 : 220}
            code={Code.getJSCode(block)}
          />
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default ScrollBlocks;
