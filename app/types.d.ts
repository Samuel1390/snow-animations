import { CSS_TIMING_FUNCTIONS } from "./components/GlobalControls";
import { SyntheticEvent } from "react";
import keyframesMap from "./lib/keyframes";
import { BLOCKS } from "./components/RevealOnScrollSection";

// Strong types / tipos robustos: para mayor seguridad
export type TimingFunction = (typeof CSS_TIMING_FUNCTIONS)[number];
export type AnimationNameWithPrefix = `animate-${string}`;
export type Blocks = typeof BLOCKS;
export type AnimationName = keyof typeof keyframesMap;

export type CardState = {
  handleActive: (e: SyntheticEvent) => void;
  active: "overview" | "code";
};
export interface AnimationSettings {
  globalPlay: boolean;
  duration: number;
  delay: number;
  timingFunction: TimingFunction;
  defaultProperties: boolean;
}

export interface AnimationContextType extends AnimationSettings {
  setGlobalPlay: (play: boolean) => void;
  toggleDefaultProperties: () => void;
  setDefaultProperties: (newValue: boolean) => void;
  setTimingFunction: (newTiming: TimingFunction) => void;
  setDuration: (duration: number) => void;
  setDelay: (delay: number) => void;
  toggleGlobalPlay: () => void;
}
export interface AnimationCardProps {
  cssClass: AnimationNameWithPrefix;
  description?: string;
  infinite: boolean;
  globalPlay: boolean;
  indexData: number;
}
export interface OptionsToCode {
  cssClass: AnimationNameWithPrefix;
  animationName: AnimationName;
  infinite: boolean;
  duration: number;
  delay: number;
  timingFunction: string;
  keyframes: string;
  fillMode: FillMode;
}
export interface OptionsToGetCssValues {
  animationName: AnimationName;
  infinite: boolean;
  delay: number;
  timingFunction: string;
  duration: number;
  fillMode: FillMode;
}
export type GridContextType = AnimationContextType & {
  animationSequence: "row" | "column" | "both" | "diagonal";
  selectedAnimation: string;
  setSelectedAnimation: (
    newAnimation: GridContextType["selectedAnimation"],
  ) => void;
  setSequence: (newSequence: GridContextType["animationSequence"]) => void;
};
export type GridSettings = AnimationSettings & {
  selectedAnimation: string;
  animationSequence: GridContextType["animationSequence"];
};
