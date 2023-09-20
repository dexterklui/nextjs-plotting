import { extent, scaleLinear } from "d3";
import { preprocessData } from "./dataSpec";
import {
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
} from "./plotSpec";
import AxisBottom from "./AxisBottom";
import AxisLeft from "./AxisLeft";
import Marks from "./Marks";
import "@/app/(css)/d3.css";

export default function IrisScatterPlot({ data }) {
  data = preprocessData(data);

  const xScale = scaleLinear()
    .domain(extent(data, xVal))
    .range([0, innerWidth])
    .nice();

  const yScale = scaleLinear()
    .domain(extent(data, yVal))
    .range([0, innerHeight])
    .nice();

  return (
    <svg className="d3-svg" viewBox={`0 0 ${width} ${height}`}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom xScale={xScale} />
        <AxisLeft yScale={yScale} />
        <Marks data={data} xScale={xScale} yScale={yScale} />
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
