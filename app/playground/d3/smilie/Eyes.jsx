export default function Eyes({ eyeRadius, eyeOffsetX, eyeOffsetY }) {
  return (
    <>
      <circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} fill="black" />
      <circle cx={eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} fill="black" />
    </>
  );
}
