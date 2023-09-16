"use client";

import { VegaLite } from "react-vega";
import users from "@/_data/puffin.users.json";

const data = {
  table: users.filter((item) => item.age < 120 && item.age > 15),
};

const embedOptions = {
  renderer: "svg",
};

const spec = {
  usermeta: { embedOptions },
  mark: {
    type: "circle",
    opacity: 0.08,
  },
  encoding: {
    x: { field: "age", type: "quantitative", scale: { zero: false } },
    y: { field: "gender", type: "nominal" },
  },
  data: { name: "table" },
};

const config = {
  autosize: "fit",
  background: "transparent",
};

export default function VegaLitePlot() {
  if (typeof window !== "undefined") spec.width = window.innerWidth - 100;
  return <VegaLite spec={spec} data={data} config={config} />;
}
