"use client";
import "../styles/pageAnimations.css";
import React, { useEffect, useState } from "react";
import { useAnimationContext } from "./context/AnimationContext";
import { PlayIcon } from "@heroicons/react/16/solid";
import { OptionsToGetCssValues } from "../types";
import Code from "./functions/CodeClass";

const TimingFunctionBox = () => {
  const [play, setPlay] = useState(false);
  const { timingFunction, duration, defaultProperties } = useAnimationContext();
  const timingFunctionWithOutDefault = defaultProperties
    ? timingFunction
    : "ease-in-out";
  const [localState, setLocalState] = useState({
    timingFunctionWithOutDefault,
    duration,
  });
  const defaultSettings: OptionsToGetCssValues = {
    infinite: false,
    delay: 0,
    duration: localState.duration,
    animationName: "slide-right",
    timingFunction: timingFunctionWithOutDefault,
    fillMode: "forwards",
  };
  const dynamicTimigSettings: OptionsToGetCssValues = {
    ...defaultSettings,
    timingFunction: localState.timingFunctionWithOutDefault,
  };
  const linearSettings: OptionsToGetCssValues = {
    ...defaultSettings,
    timingFunction: "linear",
  };
  const LinearValues = Code.getAnimationValues(linearSettings);
  const DynamicTimingValues = Code.getAnimationValues(dynamicTimigSettings);
  function handleLocalState() {
    setTimeout(() => {
      setLocalState({ timingFunctionWithOutDefault, duration });
      setPlay(false);
    }, 800);
  }
  function handlePlay() {
    setPlay(true);
  }
  return (
    <section className="w-screen max-w-170 mx-auto">
      <h2 className="dark:text-gray-600 text-slate-700 font-bold text-center text-lg">
        Try the different timing functions
      </h2>
      <div className="rounded-md bg-gray-300 dark:bg-gray-900 flex flex-col gap-2 p-2">
        <div className="relative h-10 w-full">
          <div
            style={{ animation: play ? DynamicTimingValues : "" }}
            onAnimationEnd={handleLocalState}
            className="squeare-basic bg-linear-to-br from-rose-500 to-purple-600 drop-shadow-lg drop-shadow-rose-300/70"
          ></div>
        </div>
        <span className="absolute text-gray-400 text-4xl dark:text-gray-600 font-extrabold text-center -translate-x-1/2 -translate-y-1/2 left-1/2 mt-5">
          {localState.timingFunctionWithOutDefault}
        </span>
        <div className="relative h-10 w-full">
          <div
            style={{ animation: play ? LinearValues : "" }}
            onAnimationEnd={handleLocalState}
            className="squeare-basic bg-linear-to-br from-emerald-500 to-teal-400 drop-shadow-lg drop-shadow-emerald-300/70"
          ></div>
          <span className="absolute text-gray-400 text-4xl dark:text-gray-600 font-extrabold text-center -translate-x-1/2 -translate-y-1/2 left-1/2 mt-5">
            linear
          </span>
        </div>
      </div>
      <button
        aria-label="play animation"
        onClick={handlePlay}
        className="inline-block group bg-gray-200 hover:bg-gray-300 cursor-pointer dark:hover:bg-gray-700  dark:bg-neutral-950 p-1 mt-2 rounded shadow-sm border border-gray-400 dark:border-gray-600 font-bold"
      >
        <PlayIcon
          width={26}
          className="stroke-neutral-600 dark:stroke-white fill-transparent  group-hover:fill-neutral-900 dark:group-hover:fill-white transition-colors"
        />
      </button>
    </section>
  );
};

export default TimingFunctionBox;
