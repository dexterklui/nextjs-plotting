"use client";

import { geoPath } from "d3";
import plotSpec from "./plotSpec";
import FeatureMarks from "./FeatureMarks";

const { projection, strokeWidth } = plotSpec;
const geoPathGenerator = geoPath(projection);

/**
 * @param {String} path - svg path data string of form "M L L ... Z"
 * @param {Number} [strokeWidth=1]
 * @return {[[Number, Number], [Number, Number]]} [[minX, minY], [maxX, maxY]]
 */
function getBoundBox(path, strokeWidth = 1) {
  const coords = path
    .slice(1, -1)
    .split("L")
    .map((pair) => pair.split(",").map((x) => +x));
  const [ix, iy] = coords[0];
  const [minPt, maxPt] = coords.reduce(
    (prev, curr) => {
      const [[px0, py0], [px1, py1]] = prev;
      const [cx, cy] = curr;
      const x0 = px0 < cx ? px0 : cx;
      const y0 = py0 < cy ? py0 : cy;
      const x1 = px1 > cx ? px1 : cx;
      const y1 = py1 > cy ? py1 : cy;
      return [[x0, y0], [x1, y1]]; // prettier-ignore
    }, [[ix, iy], [ix, iy]]); // prettier-ignore
  return [minPt.map((i) => i - strokeWidth), maxPt.map((i) => i + strokeWidth)];
}

export default function Map({ data }) {
  const sphereProjectionPath = geoPathGenerator({ type: "Sphere" });
  const [[x0, y0], [x1, y1]] = getBoundBox(sphereProjectionPath, strokeWidth);

  const ProjectionSphere = () => (
    <path
      className="fill-gray-200 stroke-stone-400"
      d={geoPathGenerator({ type: "Sphere" })}
      strokeWidth={strokeWidth}
    />
  );

  return (
    <svg className="d3-svg" viewBox={`${x0} ${y0} ${x1} ${y1}`}>
      <ProjectionSphere />
      <FeatureMarks data={data} geoPathGenerator={geoPathGenerator} />
    </svg>
  );
}
