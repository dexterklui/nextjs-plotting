import { geoNaturalEarth1 } from "d3";

const projection = geoNaturalEarth1();
const strokeWidth = 0.5;

/************************/
/*        Export        */
/************************/

const plotSpec = {
  projection,
  strokeWidth,
};

export default plotSpec;
