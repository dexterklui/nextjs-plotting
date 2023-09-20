import { axesFormatters } from "./dataSpec";

const formatter = axesFormatters.population;

export default function AxisBottom({ xScale, innerHeight }) {
  return xScale.ticks().map((tickVal) => (
    <g
      className="d3-tick"
      key={tickVal}
      transform={`translate(${xScale(tickVal)}, 0)`}
    >
      <line y2={innerHeight} stroke="black" />
      <text className="text-anchor-middle" y={innerHeight} dy="1em">
        {formatter(tickVal)}
      </text>
    </g>
  ));
}
