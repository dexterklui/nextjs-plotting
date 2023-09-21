import {
  innerHeight,
  xTickAnchor,
  xTickFormatter,
  xTickOffset,
  xTickShift,
} from "./plotSpec";

export default function AxisBottom({ xScale }) {
  return xScale.ticks().map((tickVal) => (
    <g
      className="d3-tick"
      key={tickVal}
      transform={`translate(${xScale(tickVal)}, 0)`}
    >
      <line y2={innerHeight} />
      <text
        className={`text-anchor-${xTickAnchor}`}
        y={innerHeight}
        dx={xTickShift}
        dy={xTickOffset}
      >
        {xTickFormatter(tickVal)}
      </text>
    </g>
  ));
}
