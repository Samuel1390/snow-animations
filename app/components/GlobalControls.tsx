"use client";
import { ChangeEvent } from "react";
import animations from "../animations";
import { GridContextType } from "../types";
import { TimingFunction, AnimationContextType } from "../types";
const STOP_ALL_CLASS =
  "bg-linear-to-br from-gray-400 to-neutral-50 text-gray-900 transition-colors hover:bg-gray-400 text-shadow-neutral-300 font-bold";
const ANIMATE_ALL_CLASS =
  "bg-linear-to-br text-white from-gray-900 to-gray-600 transition-opacity hover:opacity-80 text-shadow-neutral-600";
export const CSS_TIMING_FUNCTIONS = [
  "ease-in-out",
  "ease-in",
  "ease-out",
  "ease",
  "linear",
] as const;
interface Props {
  context: () => AnimationContextType | GridContextType;
}

export default function GlobalControls({ context }: Props) {
  const {
    globalPlay,
    toggleGlobalPlay,
    duration,
    setDuration,
    timingFunction,
    setTimingFunction,
    delay,
    setDelay,
    toggleDefaultProperties,
    defaultProperties,
  } = context(); // el contexto puede variar ya que reutilizaremos este componente quitando y agregando algunas partes segun cual sea GridContext o AnimationContext, para eso se hizo el type union en el context y se verifica con una variable booleana si es GridContext o AnimationContext
  const isGridContext = "animationSequence" in context();
  function handleTimingFunction() {
    const currentIndex = CSS_TIMING_FUNCTIONS.indexOf(
      timingFunction as TimingFunction,
    );
    const nextIndex = (currentIndex + 1) % CSS_TIMING_FUNCTIONS.length;
    setTimingFunction(CSS_TIMING_FUNCTIONS[nextIndex]);
  }

  return (
    <div
      className="flex max-sm:flex-col max-sm:w-3/4 max-sm:rounded-none max-sm:mx-auto flex-wrap w-fit my-10 mx-auto justify-center
    items-center gap-3 py-2 px-6 bg-white dark:bg-gray-900 shadow-sm border border-gray-200
    dark:border-gray-800 rounded-full text-sm"
    >
      <div className="flex max-sm:flex-col max-sm:gap-3 gap-2">
        <div className="flex flex-col justify-center gap-2">
          {!isGridContext && (
            <>
              <label
                htmlFor="playAll"
                className="font-bold text-xs text-gray-600 dark:text-gray-400"
              >
                Play all animations:
              </label>
              <button
                id="playAll"
                onClick={toggleGlobalPlay}
                className={`px-3 py-1.5 shadow-md cursor-pointer rounded-full shadow-neutral-950/50 font-medium transition
              ${globalPlay ? STOP_ALL_CLASS : ANIMATE_ALL_CLASS}`}
              >
                {globalPlay ? "Stop all" : "Play all"}
              </button>
            </>
          )}
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <label
            htmlFor="defaultProperties"
            className="font-bold text-center text-xs text-gray-600 dark:text-gray-400"
          >
            Properties:
          </label>
          <button
            title="custom your own animations or use the default animations"
            id="defaultProperties"
            onClick={toggleDefaultProperties}
            className={`px-3 py-1.5 shadow-md font-medium cursor-pointer rounded-full shadow-neutral-950/50 transition ${defaultProperties ? ANIMATE_ALL_CLASS : STOP_ALL_CLASS}`}
          >
            {defaultProperties ? "Use defaults" : "Custom"}
          </button>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <label
            htmlFor="timingFunction"
            className="font-bold text-xs text-gray-600 dark:text-gray-400"
          >
            Timing function:
          </label>
          <div className="min-w-23 flex justify-center">
            <button
              title="timing function"
              id="timingFunction"
              disabled={defaultProperties}
              onClick={handleTimingFunction}
              className={`
                  text-xs px-3 py-1.5 hover:bg-linear-to-br hover:from-rose-800 hover:to-indigo-800
                  text-white shadow-md bg-linear-to-br font-medium from-rose-500 to-purple-800 drop-shadow-rose-300
                  drop-shadow-md cursor-pointer rounded-full shadow-neutral-950/50 transition
                  disabled:bg-linear-to-br disabled:drop-shadow-none disabled:from-gray-400 disabled:to-neutral-700 disabled:text-gray-950 disabled:text-shadow-neutral-600
                  `}
            >
              {timingFunction}
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col justify-center gap-2">
          <label
            htmlFor="duration"
            className="text-xs font-bold text-gray-600 dark:text-gray-400"
          >
            Duration:
          </label>
          <input
            title="animation duration"
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
        <div className="flex flex-col justify-center gap-2">
          <label
            htmlFor="delay"
            className="text-xs font-bold text-gray-600 dark:text-gray-400"
          >
            Delay:
          </label>
          <input
            title="animation delay"
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
      {isGridContext && (
        <GridControls gridContext={context as () => GridContextType} />
      )}
    </div>
  );
}

// Componente que utilizaremos si el contexto es GridContext, este componente se encarga de mostrar los controles especificos para el grid como la secuencia y la animacion a usar en el grid, este componente se renderiza dentro de GlobalControls solo si el contexto es GridContext, esto se hace para mantener
// una estructura limpia y evitar tener controles que no corresponden al contexto que se esta usando
function GridControls({ gridContext }: { gridContext: () => GridContextType }) {
  const { setSequence, setSelectedAnimation } = gridContext();
  function handleSequence(e: ChangeEvent<HTMLSelectElement>) {
    setSequence(e.target.value as GridContextType["animationSequence"]);
  }
  function handleSetAnimation(e: ChangeEvent<HTMLSelectElement>) {
    setSelectedAnimation(
      e.target.value as GridContextType["selectedAnimation"],
    );
  }
  const finiteAnimations = animations.filter((anim) => !anim.infinite);
  return (
    <>
      <div className="flex flex-col justify-center gap-1 mb-2">
        <label
          htmlFor="sequence"
          className="text-xs font-bold text-gray-600 dark:text-gray-400"
        >
          Sequence:
        </label>
        <select
          onChange={handleSequence}
          className="[&>option]:dark:bg-gray-900 bg-slate-200 p-1 rounded cursor-pointer dark:bg-slate-700 text-black dark:text-white"
          id="sequence"
        >
          <option value="diagonal">Diagonal</option>
          <option value="row">Row</option>
          <option value="column">Column</option>
          <option value="both">Both</option>
        </select>
      </div>
      <div className="flex flex-col justify-center gap-1 mb-2">
        <label
          htmlFor="gridAnimation"
          className="mx-2 text-xs font-bold text-gray-600 dark:text-gray-400"
        >
          Animation:
        </label>
        <select
          className="dark:bg-slate-700 p-1 rounded cursor-pointer bg-slate-200"
          onChange={handleSetAnimation}
          id="gridAnimation"
        >
          {finiteAnimations.map((anim) => (
            <option
              value={anim.name.replace("animate-", "")}
              className="dark:bg-gray-900 text-black dark:text-white"
              key={anim.description}
            >
              {anim.name.replace("animate-", "")}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
