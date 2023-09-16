"use client";

import FaceBackground from "./FaceBackground";
import Eyes from "./Eyes";
import Mouth from "./Mouth";
import SmilieContainer from "./SmilieContainer";

export default function Smilie({
  className = "",
  radius = 100,
  strokeWidth = 4,
  eyeOffsetX = 42,
  eyeOffsetY = 22,
  eyeRadius = 14,
  mouthWidth = 4,
  mouthRadius = 56,
  mouthOffsetY = 0,
  random = false,
}) {
  if (random) {
    strokeWidth += Math.floor(Math.random() * 5) - 2;
    eyeOffsetX += Math.floor(Math.random() * 31) - 15;
    eyeOffsetY += Math.floor(Math.random() * 41) - 20;
    eyeRadius += Math.floor(Math.random() * 21) - 10;
    mouthWidth += Math.floor(Math.random() * 5) - 2;
    mouthRadius += Math.floor(Math.random() * 41) - 20;
    mouthOffsetY += Math.floor(Math.random() * 41) - 20;
  }

  return (
    <SmilieContainer radius={radius} className={className}>
      <FaceBackground
        radius={radius - strokeWidth * 0.5}
        strokeWidth={strokeWidth}
      />
      <Eyes
        eyeRadius={eyeRadius}
        eyeOffsetX={eyeOffsetX}
        eyeOffsetY={eyeOffsetY}
      />
      <Mouth
        mouthRadius={mouthRadius}
        mouthWidth={mouthWidth}
        mouthOffsetY={mouthOffsetY}
      />
    </SmilieContainer>
  );
}
