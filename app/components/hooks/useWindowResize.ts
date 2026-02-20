import { useEffect, useState } from "react";

import React from "react";

const useWindowResize = () => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  useEffect(() => {
    function handleResize() {
      setWindowWidth(document.documentElement.clientWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("resize", handleResize);
    };
  }, []);
  return windowWidth;
};

export default useWindowResize;
