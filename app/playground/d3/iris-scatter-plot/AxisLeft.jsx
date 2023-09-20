import { innerWidth, yTickFormatter, yTickOffset } from "./plotSpec";

export default function AxisLeft({ yScale }) {
  return yScale.ticks().map((tickVal) => (
    <g
      className="d3-tick"
      key={tickVal}
      transform={`translate(0, ${yScale(tickVal)})`}
    >
      <line x2={innerWidth} />
      <text className="text-anchor-end" dx={yTickOffset} dy="0.4em">
        {yTickFormatter(tickVal)}
      </text>
    </g>
  ));
}
