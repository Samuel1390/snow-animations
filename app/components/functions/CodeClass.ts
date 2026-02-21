import { OptionsToCode, Blocks, OptionsToGetCssValues } from "@/app/types";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);
class Code {
  static getFullCssCode(optionsToCode: OptionsToCode | null | undefined) {
    if (optionsToCode) {
      const {
        cssClass,
        animationName,
        infinite,
        keyframes,
        duration,
        delay,
        timingFunction,
        fillMode,
      } = optionsToCode;
      const fullCssCode = `/* Class */
.${cssClass} {
  animation: ${animationName} ${duration ? duration + "s" : "0.5s"} ${timingFunction}${delay ? ` ${delay}s` : ""}${infinite ? " infinite" : ""} ${fillMode || fillMode === " auto" ? fillMode : ""};
}
/* Keyframes */
${keyframes}`;
      return fullCssCode;
    } else {
      return "/* Something went wrong */";
    }
  }
  static getAnimationValues(
    optionsToCode: OptionsToGetCssValues | null | undefined,
  ) {
    if (optionsToCode) {
      const {
        animationName,
        infinite,
        duration,
        delay,
        timingFunction,
        fillMode,
      } = optionsToCode;
      // este string debe ser aplicado al atributo style={{animation: [nombre, duración, ... , fillMode ]}}
      const values = ` ${animationName} ${duration ? duration + "s" : "0.5s"} ${timingFunction && timingFunction !== "default" ? timingFunction : "ease-in-out"} ${delay ? ` ${delay}s` : ""} ${infinite ? " infinite" : ""} ${fillMode || fillMode === "auto" ? fillMode : ""}`;
      return values;
    } else {
      throw new Error("optionsToCode es indefinido, en getCssClass");
    }
  }
  static getClassAndKeyFrames(className: string, keyframes: string) {
    return `/* Class */
  ${className}
    /* Keyframes*/
    ${keyframes}
    `;
  }
  static gethtmlCode(block: Blocks[number]) {
    return `
  <div class="reveal">
      <h2>${block.name}</h2>      
      <!-- Your content -->
  </div>`;
  }
  static getJSCode(block: Blocks[number]) {
    return `
  document.addEventListener("DOMContentLoaded", function() {
  const reveals = document.querySelectorAll('.reveal');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("${block.animation}";
        // for unobserve the element when is out from the view
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }); // adjust to you need

  reveals.forEach(el => observer.observe(el));
});
  `;
  }
}
export default Code;
