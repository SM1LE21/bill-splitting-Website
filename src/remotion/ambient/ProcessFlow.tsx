import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from 'remotion';

const ACCENT = '#2563EB';

export const ProcessFlow: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, durationInFrames } = useVideoConfig();
  const progress = (frame % durationInFrames) / durationInFrames;
  const glowX = progress * (width + 200) - 100;

  return (
    <AbsoluteFill style={{ background: 'transparent', overflow: 'hidden' }}>
      {/* Base line */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
          height: 1,
          transform: 'translateY(-50%)',
          background: `linear-gradient(to right, ${ACCENT}33, ${ACCENT}66, ${ACCENT}33)`,
        }}
      />
      {/* Moving pulse */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: glowX - 70,
          width: 140,
          height: 8,
          transform: 'translateY(-50%)',
          background:
            'radial-gradient(ellipse at center, rgba(37,99,235,0.9) 0%, rgba(37,99,235,0) 70%)',
          filter: 'blur(2px)',
        }}
      />
    </AbsoluteFill>
  );
};
