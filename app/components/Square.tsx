"use client";
import React, { CSSProperties } from "react";
import { useGridContext } from "./context/GridContext";
import { GridContextType } from "../types";
interface SquareProps {
  i: number;
  j: number;
  shouldAnimate: boolean;
}

function Square({ i, j, shouldAnimate }: SquareProps) {
  const {
    duration,
    delay,
    timingFunction,
    defaultProperties,
    selectedAnimation,
    animationSequence,
  } = useGridContext();

  const sequenceFormula = getSequenceFormula(animationSequence, i, j);
  const totalDelay = sequenceFormula + delay;

  // Estilo base: esto se aplicara independientemente de si estamos en modo default o custom, ya que el delay es necesario en ambos casos para secuenciar correctamente
  const baseStyle: CSSProperties = {
    animationDelay: totalDelay + "s",
    animationFillMode: "backwards",
  };

  // Estilo personalizado: se activa solo cuando debe animarse y estamos en modo custom
  const customStyle: CSSProperties = {
    animationName: selectedAnimation,
    animationDuration: duration + "s",
    animationTimingFunction: timingFunction,
    ...baseStyle,
  };

  // Decidir qué estilo aplicar
  // Nota: odio los tertarios anidados, pero esta es la mejor forma que encontre
  const appliedStyle = shouldAnimate
    ? defaultProperties
      ? baseStyle // en modo default, solo necesitamos el delay; la clase da el resto de las otras propiedades
      : customStyle
    : baseStyle; // sin animación, solo delay preparado

  return (
    <div
      style={appliedStyle}
      className={`${
        shouldAnimate && defaultProperties ? `animate-${selectedAnimation}` : ""
      } 
      bg-linear-to-br from-emerald-400 to-emerald-700 drop-shadow-lg drop-shadow-emerald-600/70
      size-20 rounded`}
    />
  );
}

function getSequenceFormula(
  animationSequence: GridContextType["animationSequence"],
  i: number,
  j: number,
): number {
  switch (animationSequence) {
    case "row":
      return i / 10;
    case "column":
      return j / 10;
    case "diagonal":
      return (i + j) / 10;
    case "both":
      return i / 4 + j / 20;
    default:
      return 0;
  }
}

export default Square;
