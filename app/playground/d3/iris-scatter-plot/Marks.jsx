import { keyVal, markRadius, tooltip, xVal, yVal } from "./plotSpec";

export default function Marks({ data, xScale, yScale }) {
  return data.map((d) => (
    <circle
      className="d3-mark opacity-50"
      key={keyVal(d)}
      cx={xScale(xVal(d))}
      cy={yScale(yVal(d))}
      r={markRadius}
    >
      <title>{tooltip(d)}</title>
    </circle>
  ));
}
