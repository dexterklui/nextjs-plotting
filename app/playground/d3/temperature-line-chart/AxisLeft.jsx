import {
  innerWidth,
  yTickAnchor,
  yTickFormatter,
  yTickOffset,
  yTickShift,
} from "./plotSpec";

export default function AxisLeft({ yScale }) {
  return yScale.ticks().map((tickVal) => (
    <g
      className="d3-tick"
      key={tickVal}
      transform={`translate(0, ${yScale(tickVal)})`}
    >
      <line x2={innerWidth} />
      <text
        className={`text-anchor-${yTickAnchor}`}
        dx={yTickOffset}
        dy={yTickShift}
      >
        {yTickFormatter(tickVal)}
      </text>
    </g>
  ));
}
