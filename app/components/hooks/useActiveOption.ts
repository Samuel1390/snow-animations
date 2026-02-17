import { CardState } from "@/app/types";
import { useState } from "react";
import { SyntheticEvent } from "react";

const useActiveOption = () => {
  const [active, setActive] = useState<CardState["active"]>("overview");
  const handleActive: CardState["handleActive"] = (e: SyntheticEvent) => {
    const target = e.target as HTMLButtonElement;
    const rol = target.getAttribute("rol-data");
    setActive(rol as CardState["active"]);
  };
  return {
    active,
    setActive,
    handleActive,
  };
};
export default useActiveOption;
