export default function AxisLeft({ scale, plotSpec }) {
  const { innerWidth, yTickAnchor, yTickFormatter, yTickOffset, yTickShift } =
    plotSpec;

  return scale.ticks().map((tickVal) => (
    <g
      className="d3-tick"
      key={tickVal}
      transform={`translate(0, ${scale(tickVal)})`}
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
