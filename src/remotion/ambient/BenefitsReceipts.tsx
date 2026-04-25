import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';

type ReceiptProps = {
  rotation: number;
  driftX: number;
  driftY: number;
  dashOffset: number;
};

const Receipt: React.FC<ReceiptProps> = ({
  rotation,
  driftX,
  driftY,
  dashOffset,
}) => (
  <svg
    viewBox="0 0 220 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      width: 280,
      height: 400,
      transform: `rotate(${rotation}deg) translate(${driftX}px, ${driftY}px)`,
    }}
  >
    <path
      d="M20 10 H200 V290 L180 310 L160 290 L140 310 L120 290 L100 310 L80 290 L60 310 L40 290 L20 310 Z"
      stroke="#1f2937"
      strokeWidth={2}
    />
    {[50, 80, 110, 140, 170, 200, 230].map((y, i) => (
      <line
        key={y}
        x1="40"
        x2="180"
        y1={y}
        y2={y}
        stroke="#1f2937"
        strokeWidth={2}
        strokeDasharray="6 8"
        strokeDashoffset={dashOffset + i * 5}
      />
    ))}
  </svg>
);

export const BenefitsReceipts: React.FC = () => {
  const frame = useCurrentFrame();

  const leftRot = -2 + Math.sin(frame * 0.018) * 2.5;
  const leftDrift = Math.sin(frame * 0.014) * 4;
  const leftY = Math.cos(frame * 0.011) * 5;

  const rightRot = 6 + Math.sin(frame * 0.016) * 2.5;
  const rightDrift = Math.cos(frame * 0.013) * 4;
  const rightY = Math.sin(frame * 0.012) * 5;

  const dashOffset = (frame * 0.4) % 14;

  return (
    <AbsoluteFill style={{ background: 'transparent', overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          left: -90,
          top: 80,
          opacity: 0.07,
          color: '#111827',
        }}
      >
        <Receipt
          rotation={leftRot}
          driftX={leftDrift}
          driftY={leftY}
          dashOffset={dashOffset}
        />
      </div>
      <div
        style={{
          position: 'absolute',
          right: -90,
          bottom: 80,
          opacity: 0.07,
          color: '#111827',
        }}
      >
        <Receipt
          rotation={rightRot}
          driftX={rightDrift}
          driftY={rightY}
          dashOffset={-dashOffset}
        />
      </div>
    </AbsoluteFill>
  );
};
