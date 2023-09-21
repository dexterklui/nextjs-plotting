import { accessors } from "./dataSpec";

/*************************/
/*        Content        */
/*************************/

const keyVal = accessors.key;
const xVal = accessors.petalLength;
const yVal = accessors.sepalWidth;
const xLabel = "Pepal Length";
const yLabel = "Sepal Width";
const xTickFormatter = (val) => val.toFixed(1);
const yTickFormatter = (val) => val.toFixed(1);

const tooltip = (d) =>
  `Species: ${accessors.species(d)}\n` +
  `${xLabel}: ${xVal(d)}\n` +
  `${yLabel}: ${yVal(d)}`;

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
const scatterMarksRadius = 5;

/* labels */
const xLabelOffset = "35";
const yLabelOffset = "35";

/* ticks */
const xTickAnchor = "middle"; // ("start" | "middle" | "end")
const yTickAnchor = "end"; // ("start" | "middle" | "end")
const xTickOffset = "18";
const yTickOffset = "-0.4em";
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
