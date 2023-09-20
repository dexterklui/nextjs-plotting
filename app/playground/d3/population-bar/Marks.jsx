import { accessors, tooltip } from "./dataSpec";

const { location, population } = accessors;

export default function Marks({ data, xScale, yScale }) {
  return data.map((d) => (
    <rect
      className="d3-mark"
      key={location(d)}
      x={0}
      y={yScale(location(d))}
      width={xScale(population(d))}
      height={yScale.bandwidth()}
    >
      <title>{tooltip(d)}</title>
    </rect>
  ));
}
