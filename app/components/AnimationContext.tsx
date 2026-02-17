"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import {
  AnimationSettings,
  AnimationContextType,
  TimingFunction,
} from "@/app/types";

const DEFAULT_SETTINGS: AnimationSettings = {
  globalPlay: false,
  duration: 0.5,
  delay: 0,
  timingFunction: "default",
  defaultProperties: true,
};

const AnimationContext = createContext<AnimationContextType | undefined>(
  undefined,
);

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState<AnimationSettings>(DEFAULT_SETTINGS);
  const setGlobalPlay = (play: boolean) => {
    setSettings((prev) => ({ ...prev, globalPlay: play }));
  };
  const setTimingFunction = (newTiming: TimingFunction) => {
    setSettings((prev) => ({
      ...prev,
      timingFunction: newTiming,
      defaultProperties: newTiming === "default" ? true : false,
    }));
  };

  const setDuration = (duration: number) => {
    setSettings((prev) => ({ ...prev, duration }));
  };

  const setDelay = (delay: number) => {
    setSettings((prev) => ({ ...prev, delay }));
  };

  const toggleGlobalPlay = () => {
    setSettings((prev) => ({ ...prev, globalPlay: !prev.globalPlay }));
  };

  return (
    <AnimationContext.Provider
      value={{
        ...settings,
        setGlobalPlay,
        setDuration,
        setDelay,
        setTimingFunction,
        toggleGlobalPlay,
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimationContext = () => {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error(
      "useAnimationContext debe ser usado dentro de un AnimationProvider",
    );
  }
  return context;
};
