export default function AxisBottom({ scale, plotSpec }) {
  const { innerHeight, xTickAnchor, xTickFormatter, xTickOffset, xTickShift } =
    plotSpec;

  return scale.ticks().map((tickVal) => (
    <g
      className="d3-tick"
      key={tickVal}
      transform={`translate(${scale(tickVal)}, 0)`}
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
