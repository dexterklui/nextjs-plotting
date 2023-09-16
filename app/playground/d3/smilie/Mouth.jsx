import { arc } from "d3";

export default function Mouth({ mouthRadius, mouthWidth, mouthOffsetY }) {
  const mouthArc = arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius + mouthWidth)
    .startAngle(Math.PI * 0.7)
    .endAngle(Math.PI * 1.3);

  return <path d={mouthArc()} transform={`translate(0, ${mouthOffsetY})`} />;
}
