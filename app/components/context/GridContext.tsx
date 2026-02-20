"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { GridSettings, GridContextType, TimingFunction } from "@/app/types";

const DEFAULT_SETTINGS: GridSettings = {
  globalPlay: false,
  duration: 0.2,
  delay: 0,
  timingFunction: "ease-in-out",
  defaultProperties: true,
  animationSequence: "diagonal",
  selectedAnimation: "fade-in",
};

const GridContext = createContext<GridContextType | undefined>(undefined);

export const GridProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState<GridSettings>(DEFAULT_SETTINGS);
  const setSequence = (newSequence: GridSettings["animationSequence"]) => {
    setSettings((prev) => ({ ...prev, animationSequence: newSequence }));
  };
  const setSelectedAnimation = (
    newSelectedAnim: GridSettings["selectedAnimation"],
  ) => {
    setSettings((prev) => ({ ...prev, selectedAnimation: newSelectedAnim }));
  };
  const setGlobalPlay = (play: boolean) => {
    setSettings((prev) => ({ ...prev, globalPlay: play }));
  };
  const setTimingFunction = (newTiming: TimingFunction) => {
    setSettings((prev) => ({
      ...prev,
      timingFunction: newTiming,
      defaultProperties: false,
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
  const setDefaultProperties = (newValue: boolean) => {
    setSettings((prev) => ({ ...prev, defaultProperties: newValue }));
  };
  const toggleDefaultProperties = () => {
    setSettings((prev) => ({
      ...prev,
      defaultProperties: !prev.defaultProperties,
    }));
  };

  return (
    <GridContext.Provider
      value={{
        ...settings,
        setGlobalPlay,
        setDuration,
        setDelay,
        setTimingFunction,
        toggleGlobalPlay,
        setSequence,
        setSelectedAnimation,
        setDefaultProperties,
        toggleDefaultProperties,
      }}
    >
      {children}
    </GridContext.Provider>
  );
};

export const useGridContext = () => {
  const context = useContext(GridContext);
  if (context === undefined) {
    throw new Error("useGridContext debe ser usado dentro de un GridProvider");
  }
  return context;
};
