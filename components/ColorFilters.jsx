import { useState, useEffect } from "react";
import CyberpunkIx from "./Filters/CyberpunkIx";
import Dunastone from "./Filters/Dunastone";
import LinearBurn from "./Filters/LinearBurn";
import DarkRed from "./Filters/DarkRed";

const ColorFilters = () => {
  const [mounted, setMounted] = useState(false);

  const style = {
    display: "block",
    width: "auto !important",
    height: "0 !important",
  };

  useEffect(() => setMounted(true), []);

  return (
    <>
      {mounted && (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="!h-0 !w-auto block"
          >
            <CyberpunkIx />
            <Dunastone />
            <LinearBurn />
            <DarkRed />
          </svg>
        </>
      )}
    </>
  );
};

export default ColorFilters;
