"use client";
import { useAnimationContext } from "../components/AnimationContext";
import { TimingFunction } from "../types";
const STOP_ALL_CLASS =
  "bg-linear-to-br from-gray-400 to-neutral-50 text-gray-900 transition-colors hover:bg-gray-400 text-shadow-neutral-300 font-bold";
const ANIMATE_ALL_CLASS =
  "bg-linear-to-br text-white from-gray-900 to-gray-600 transition-opacity hover:opacity-80 text-shadow-neutral-600";
export const CSS_TIMING_FUNCTIONS = [
  "default",
  "ease-in-out",
  "ease-in",
  "ease-out",
  "ease",
  "linear",
] as const;

export default function GlobalControls() {
  const {
    globalPlay,
    toggleGlobalPlay,
    duration,
    setDuration,
    timingFunction,
    setTimingFunction,
    delay,
    setDelay,
    defaultProperties,
  } = useAnimationContext();
  function handleTimingFunction() {
    const currentIndex = CSS_TIMING_FUNCTIONS.indexOf(
      timingFunction as TimingFunction,
    );
    const nextIndex = (currentIndex + 1) % CSS_TIMING_FUNCTIONS.length;
    setTimingFunction(CSS_TIMING_FUNCTIONS[nextIndex]);
  }

  return (
    <div className="flex sticky w-fit my-10 min-w-120 mx-auto justify-center items-center gap-2 p-2 bg-white dark:bg-gray-900 shadow-sm border border-gray-200 dark:border-gray-800 rounded-full text-sm">
      <button
        onClick={toggleGlobalPlay}
        className={`px-3 py-1.5 shadow-md cursor-pointer rounded-full shadow-neutral-950/50 font-medium transition ${globalPlay ? STOP_ALL_CLASS : ANIMATE_ALL_CLASS}`}
      >
        {globalPlay ? "Stop all" : "Play all"}
      </button>
      <label
        htmlFor="timingFunction"
        className="font-bold text-xs text-gray-600 dark:text-gray-400"
      >
        Properties:
      </label>
      <div className="min-w-23 flex justify-center">
        <button
          id="timingFunction"
          onClick={handleTimingFunction}
          className={`${defaultProperties ? "capitalize" : ""}
                  text-xs px-3 py-1.5 hover:bg-linear-to-br hover:from-rose-800 hover:to-indigo-800 text-white shadow-md bg-linear-to-br from-rose-500 to-purple-800 drop-shadow-rose-300 drop-shadow-md cursor-pointer rounded-full shadow-neutral-950/50 font-medium transition`}
        >
          {timingFunction}
        </button>
      </div>

      <div className="flex items-center gap-1">
        <label
          htmlFor="duration"
          className="text-xs font-bold text-gray-600 dark:text-gray-400"
        >
          Duration:
        </label>
        <input
          disabled={defaultProperties}
          id="duration"
          type="range"
          min="0.1"
          max="2"
          step="0.1"
          value={duration}
          onChange={(e) => setDuration(parseFloat(e.target.value))}
          className="w-16 h-1.5"
        />
        <span className="text-xs text-gray-700 dark:text-gray-300 w-8">
          {duration.toFixed(1)}s
        </span>
      </div>

      <div className="flex items-center gap-1">
        <label
          htmlFor="delay"
          className="text-xs font-bold text-gray-600 dark:text-gray-400"
        >
          Delay:
        </label>
        <input
          disabled={defaultProperties}
          id="delay"
          type="range"
          min="0"
          max="2"
          step="0.1"
          value={delay}
          onChange={(e) => setDelay(parseFloat(e.target.value))}
          className="w-16 h-1.5"
        />
        <span className="text-xs text-gray-700 dark:text-gray-300 w-8">
          {delay.toFixed(1)}s
        </span>
      </div>
    </div>
  );
}
