import { line } from "d3";
import {
  keyVal,
  xVal,
  yVal,
  lineWidth,
  markRadius,
  curveFactory,
  tooltip,
} from "./plotSpec";

export default function Marks({ data, xScale, yScale }) {
  const pathGenerator = line()
    .x((d) => xScale(xVal(d)))
    .y((d) => yScale(yVal(d)))
    .curve(curveFactory);
  const pathStr = pathGenerator(data);

  return (
    <g className="d3-mark">
      <path strokeWidth={lineWidth} d={pathStr} />
      {data.map((d) => (
        <circle
          key={keyVal(d)}
          cx={xScale(xVal(d))}
          cy={yScale(yVal(d))}
          r={markRadius}
        >
          <title>{tooltip(d)}</title>
        </circle>
      ))}
    </g>
  );
}
