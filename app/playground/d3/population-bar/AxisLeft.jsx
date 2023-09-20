import { axesFormatters } from "./dataSpec";

const formatter = axesFormatters.location;

export default function AxisLeft({ yScale }) {
  return yScale.domain().map((location) => (
    <g
      className="d3-tick"
      key={location}
      transform={`translate(0, ${yScale(location) + yScale.bandwidth() * 0.5})`}
    >
      <text className="text-anchor-end" dx="-.25em" dy="0.2em">
        {formatter(location)}
      </text>
    </g>
  ));
}
