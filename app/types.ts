import { CSS_TIMING_FUNCTIONS } from "./components/GlobalControls";
import { SyntheticEvent } from "react";
import { BLOCKS } from "./components/RevealOnScrollSection";
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
export type TimingFunction = (typeof CSS_TIMING_FUNCTIONS)[number];

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
  name: string;
  cssClass: string;
  description?: string;
  infinite?: boolean;
  globalPlay?: boolean;
  indexData: number;
}
export interface OptionsToCode {
  cssClass: string;
  animationName: string;
  infinite: boolean;
  duration: number;
  delay: number;
  timingFunction: string;
  keyframes: string;
  fillMode: FillMode;
}
export interface OptionsToGetCssValues {
  animationName: string;
  infinite: boolean;
  delay: number;
  timingFunction: string;
  duration: number;
  fillMode: FillMode;
}
export interface GridContextType extends AnimationContextType {
  animationSequence: "row" | "colum" | "both" | "diagonal";
  selectedAnimation: string;
  setSelectedAnimation: (
    newAnimation: GridContextType["selectedAnimation"],
  ) => void;
  setSequence: (newSequence: GridContextType["animationSequence"]) => void;
}
export interface GridSettings extends AnimationSettings {
  selectedAnimation: string;
  animationSequence: GridContextType["animationSequence"];
}
export type Blocks = typeof BLOCKS;
