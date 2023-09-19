import AxisBottom from "./AxisBottom";
import AxisLeft from "./AxisLeft";
import Marks from "./Marks";
import { max, scaleBand, scaleLinear } from "d3";

const width = 600;
const height = 300;
const margin = {
  top: 20,
  right: 20,
  bottom: 20,
  left: 95,
};
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;

/**
 * @param {Object} props
 * @type {Array} props.data
 * @type {String} props.fieldKeys.location
 * @type {String} props.fieldKeys.population
 * @type {String} props.fieldKeys.year
 * @type {String} props.year - the year to plot
 * @type {Number} props.count - number of highest pop countries to plot
 */
export default function PopulationBarSvg({ data, fieldKeys, year, count }) {
  const locAcsr = (d) => d[fieldKeys.location]; // location accessor
  const popAcsr = (d) => +d[fieldKeys.population]; // population accessor

  data = data
    .filter((d) => d[fieldKeys.year] === year)
    .sort((a, b) => popAcsr(b) - popAcsr(a))
    .slice(0, count);

  // equally divide range for each item in domain
  const yScale = scaleBand().domain(data.map(locAcsr)).range([0, innerHeight]);

  // assign the position in linear scale within range
  const xScale = scaleLinear()
    .domain([0, max(data, popAcsr)])
    .range([0, innerWidth]);

  return (
    <svg viewBox={`0 0 ${width} ${height}`}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom xScale={xScale} innerHeight={innerHeight} />
        <AxisLeft yScale={yScale} />
        <Marks
          data={data}
          popAcsr={popAcsr}
          locAcsr={locAcsr}
          xScale={xScale}
          yScale={yScale}
        />
      </g>
    </svg>
  );
}
