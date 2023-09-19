export default function AxisBottom({ xScale, innerHeight }) {
  return xScale.ticks().map((tickVal) => (
    <g key={tickVal} transform={`translate(${xScale(tickVal)}, 0)`}>
      <line y2={innerHeight} stroke="black" />
      <text y={innerHeight} dy="1em" style={{ textAnchor: "middle" }}>
        {`${(tickVal * 1e-6).toFixed(1)}B`}
      </text>
    </g>
  ));
}
