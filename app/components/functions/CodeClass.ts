import { OptionsToCode, OptionsToGetCssValues } from "@/app/types";
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
}
export default Code;
