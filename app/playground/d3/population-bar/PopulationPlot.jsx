import { max, scaleBand, scaleLinear } from "d3";
import { accessors, plotYear, plotCount } from "./dataSpec";
import AxisBottom from "./AxisBottom";
import AxisLeft from "./AxisLeft";
import Marks from "./Marks";
import "@/app/(css)/d3.css";

const { location, population, year } = accessors;

const width = 600;
const height = 320;
const margin = {
  top: 20,
  right: 20,
  bottom: 40,
  left: 95,
};
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;

export default function PopulationBarSvg({ data }) {
  data = data
    .filter((d) => year(d) === plotYear)
    .sort((a, b) => population(b) - population(a))
    .slice(0, plotCount);

  const yScale = scaleBand()
    .domain(data.map(location))
    .range([0, innerHeight])
    .paddingInner(0.2);

  const xScale = scaleLinear()
    .domain([0, max(data, population)])
    .range([0, innerWidth]);

  return (
    <svg className="d3-svg" viewBox={`0 0 ${width} ${height}`}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom xScale={xScale} innerHeight={innerHeight} />
        <AxisLeft yScale={yScale} />
        <text
          className="text-anchor-middle d3-axis-label"
          x={innerWidth / 2}
          y={innerHeight}
          dy="2em"
        >
          Population
        </text>
        <Marks data={data} xScale={xScale} yScale={yScale} />
      </g>
    </svg>
  );
}
