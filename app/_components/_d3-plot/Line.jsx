import { line } from "d3";

export default function Line({ data, scales, plotSpec }) {
  const { xVal, yVal, lineWidth, curveFactory } = plotSpec;

  const pathGenerator = line()
    .x((d) => scales.x(xVal(d)))
    .y((d) => scales.y(yVal(d)))
    .curve(curveFactory);
  const pathStr = pathGenerator(data);

  return <path strokeWidth={lineWidth} d={pathStr} />;
}
