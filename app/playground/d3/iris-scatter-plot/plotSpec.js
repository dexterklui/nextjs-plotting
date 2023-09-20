import { accessors } from "./dataSpec";

/*************************/
/*        Content        */
/*************************/

export const keyVal = accessors.key;
export const xVal = accessors.petalLength;
export const yVal = accessors.sepalWidth;
export const xLabel = "Pepal Length";
export const yLabel = "Sepal Width";
export const xTickFormatter = (val) => val.toFixed(1);
export const yTickFormatter = (val) => val.toFixed(1);

export const tooltip = (d) =>
  `Species: ${accessors.species(d)}\n` +
  `${xLabel}: ${xVal(d)}\n` +
  `${yLabel}: ${yVal(d)}`;

/**************************/
/*        Geometry        */
/**************************/

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

export const markRadius = 5;

export const xLabelOffset = "35";
export const yLabelOffset = "35";
export const xTickOffset = "18";
export const yTickOffset = "-0.4em";
