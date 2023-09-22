export default function ScatterMarks({ data, scales, plotSpec }) {
  const { keyVal, xVal, yVal, scatterMarksRadius, tooltip } = plotSpec;

  return data.map((d) => (
    <circle
      key={keyVal(d)}
      cx={scales.x(xVal(d))}
      cy={scales.y(yVal(d))}
      r={scatterMarksRadius}
    >
      {tooltip == null || <title>{tooltip(d)}</title>}
    </circle>
  ));
}
