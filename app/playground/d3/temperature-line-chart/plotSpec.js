import { curveNatural, timeFormat } from "d3";
import { accessors } from "./dataSpec";

/*************************/
/*        Content        */
/*************************/

const { date, temperature } = accessors;

const keyVal = date;
const xVal = date;
const yVal = temperature;
const xLabel = "Time";
const yLabel = "Temperature";
const xTickFormatter = timeFormat("%a");
const yTickFormatter = (val) => val;

const tooltip = (d) => `${xLabel}: ${xVal(d)}\n` + `${yLabel}: ${yVal(d)}`;

/**************************/
/*        Geometry        */
/**************************/

/* plot dimension */
// NOTE: this is viewBox width and height
const width = 600;
const height = 320;

const margin = {
  top: 20,
  right: 20,
  bottom: 40,
  left: 50,
};

const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;

/* marks */
const lineWidth = 2;
const curveFactory = curveNatural;
const scatterMarksRadius = 2;

/* labels */
const xLabelOffset = "35";
const yLabelOffset = "35";

/* ticks */
const xTickAnchor = "start"; // ("start" | "middle" | "end")
const yTickAnchor = "end"; // ("start" | "middle" | "end")
const xTickOffset = "18"; // adjust distance from axis
const yTickOffset = "-0.4em"; // adjust distance from axis
const xTickShift = "0"; // shift position along axis
const yTickShift = "0.4em"; // shift position along axis

/************************/
/*        Export        */
/************************/

const plotSpec = {
  keyVal,
  xVal,
  yVal,
  xLabel,
  yLabel,
  xTickFormatter,
  yTickFormatter,
  tooltip,
  width,
  height,
  margin,
  innerWidth,
  innerHeight,
  lineWidth,
  curveFactory,
  scatterMarksRadius,
  xLabelOffset,
  yLabelOffset,
  xTickAnchor,
  yTickAnchor,
  xTickOffset,
  yTickOffset,
  xTickShift,
  yTickShift,
};

export default plotSpec;
