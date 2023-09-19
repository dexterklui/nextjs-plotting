export default function Marks({ data, popAcsr, locAcsr, xScale, yScale }) {
  return data.map((d) => (
    <rect
      key={locAcsr(d)}
      x={0}
      y={yScale(locAcsr(d))}
      width={xScale(popAcsr(d))}
      height={yScale.bandwidth()}
    />
  ));
}
