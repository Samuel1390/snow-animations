"use client";
import { CardState } from "../types";

const ACTIVE_CLASS =
  "border-t text-gray-800 dark:text-neutral-50 border-x border-none dark:border-gray-900";
const INACTIVE_CLASS =
  "opacity-50 bg-gray-400 dark:bg-black dark:text-gray-300 border-gray-300 text-black border-b dark:border-gray-800";

const CardControls = ({ handleActive, active }: CardState) => {
  return (
    <div className={`flex font-bold`}>
      <button
        rol-data={"overview"}
        className={`w-1/2 p-2 ${active === "overview" ? ACTIVE_CLASS : INACTIVE_CLASS + " border-r"}`}
        onClick={handleActive}
      >
        Overview
      </button>
      <button
        rol-data={"code"}
        className={`w-1/2 p-2 ${active === "code" ? ACTIVE_CLASS : INACTIVE_CLASS + " border-l"}`}
        onClick={handleActive}
      >
        Code
      </button>
    </div>
  );
};

export default CardControls;
