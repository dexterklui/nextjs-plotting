import { innerHeight, xTickFormatter, xTickOffset } from "./plotSpec";

export default function AxisBottom({ xScale }) {
  return xScale.ticks().map((tickVal) => (
    <g
      className="d3-tick"
      key={tickVal}
      transform={`translate(${xScale(tickVal)}, 0)`}
    >
      <line y2={innerHeight} />
      <text className="text-anchor-middle" y={innerHeight} dy={xTickOffset}>
        {xTickFormatter(tickVal)}
      </text>
    </g>
  ));
}
