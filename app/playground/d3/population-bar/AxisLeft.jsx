function shortenLocationName(name) {
  let result = "";
  switch (name) {
    case "United States of America":
      result = "USA";
      break;
    case "Russian Federation":
      result = "Russia";
      break;
    default:
      result = name;
  }
  return result;
}

export default function AxisLeft({ yScale }) {
  return yScale.domain().map((location) => (
    <g key={location} transform={`translate(0, ${yScale(location)})`}>
      <text
        dx="-.25em"
        dy={yScale.bandwidth() * 0.5}
        style={{ textAnchor: "end" }}
      >
        {shortenLocationName(location)}
      </text>
    </g>
  ));
}
