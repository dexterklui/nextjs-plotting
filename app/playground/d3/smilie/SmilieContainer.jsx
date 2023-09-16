export default function SmilieContainer({ children, radius, className = "" }) {
  const diameter = 2 * radius;
  return (
    <svg viewBox={`0 0 ${diameter} ${diameter}`} className={className}>
      <g transform={`translate(${radius}, ${radius})`}>{children}</g>
    </svg>
  );
}
