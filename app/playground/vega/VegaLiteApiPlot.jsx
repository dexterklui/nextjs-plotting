"use client";

import { useEffect, useRef, useState } from "react";
import plot from "./vega-lite-api";
import data from "./data";
import vis from "./vis";

export default function VegaLiteApiPlot() {
  const [isPlotted, setIsPlotted] = useState(false);
  const myRef = useRef(null);
  useEffect(() => {
    plot(data, vis).then((graph) => {
      setIsPlotted(true);
      myRef.current.replaceWith(graph);
    });
  }, []);

  return (
    <>
      {!isPlotted && <p>plotting...</p>}
      <div ref={myRef} className="w-full"></div>
    </>
  );
}
