import { extent, scaleLinear } from "d3";
import { preprocessData } from "./dataSpec";
import plotSpec from "./plotSpec";
import AxisBottom from "@/app/(components)/(d3-plot)/AxisBottom";
import AxisLeft from "@/app/(components)/(d3-plot)/AxisLeft";
import ScatterMarks from "@/app/(components)/(d3-plot)/ScatterMarks";
import "./style.css";

export default function IrisScatterPlot({ data }) {
  const {
    width,
    height,
    innerWidth,
    innerHeight,
    margin,
    xVal,
    yVal,
    xLabel,
    yLabel,
    xLabelOffset,
    yLabelOffset,
  } = plotSpec;

  data = preprocessData(data);

  const scales = {
    x: scaleLinear().domain(extent(data, xVal)).range([0, innerWidth]).nice(),
    y: scaleLinear().domain(extent(data, yVal)).range([0, innerHeight]).nice(),
  };

  return (
    <svg className="d3-svg" viewBox={`0 0 ${width} ${height}`}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom scale={scales.x} plotSpec={plotSpec} />
        <AxisLeft scale={scales.y} plotSpec={plotSpec} />
        <g className="d3-marks">
          <ScatterMarks data={data} scales={scales} plotSpec={plotSpec} />
        </g>
        <text
          className="text-anchor-middle d3-axis-label"
          x={innerWidth / 2}
          y={innerHeight}
          dy={xLabelOffset}
        >
          {xLabel}
        </text>
        <text
          className="text-anchor-middle d3-axis-label"
          transform={`translate(0 ${innerHeight * 0.5})` + `rotate(-90)`}
          dy={-yLabelOffset}
        >
          {yLabel}
        </text>
      </g>
    </svg>
  );
}
