import { curveNatural, timeFormat } from "d3";
import { accessors } from "./dataSpec";

/*************************/
/*        Content        */
/*************************/

const { date, temperature } = accessors;

export const keyVal = date;
export const xVal = date;
export const yVal = temperature;
export const xLabel = "Time";
export const yLabel = "Temperature";
export const xTickFormatter = timeFormat("%a");
export const yTickFormatter = (val) => val;

export const tooltip = (d) =>
  `${xLabel}: ${xVal(d)}\n` + `${yLabel}: ${yVal(d)}`;

/**************************/
/*        Geometry        */
/**************************/

/* plot dimension */
// NOTE: this is viewBox width and height
export const width = 600;
export const height = 320;

export const margin = {
  top: 20,
  right: 20,
  bottom: 40,
  left: 50,
};

export const innerWidth = width - margin.left - margin.right;
export const innerHeight = height - margin.top - margin.bottom;

/* marks */
export const lineWidth = 2;
export const curveFactory = curveNatural;
export const markRadius = 2;

/* labels */
export const xLabelOffset = "35";
export const yLabelOffset = "35";

/* ticks */
export const xTickAnchor = "start"; // ("start" | "middle" | "end")
export const yTickAnchor = "end"; // ("start" | "middle" | "end")
export const xTickOffset = "18"; // adjust distance from axis
export const yTickOffset = "-0.4em"; // adjust distance from axis
export const xTickShift = "0"; // shift position along axis
export const yTickShift = "0.4em"; // shift position along axis
