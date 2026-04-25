import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import {
  ACCENT,
  PURPLE,
  SECONDARY,
  SceneFrame,
  SUBTEXT,
  TEAL,
  easeOut,
} from './_shared';

const bars = [
  { label: 'Food', height: 180, color: ACCENT },
  { label: 'Travel', height: 240, color: SECONDARY },
  { label: 'Rent', height: 130, color: TEAL },
  { label: 'Fun', height: 200, color: PURPLE },
];

export const TrackingScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <SceneFrame label="Expense Tracking">
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          paddingBottom: 140,
          gap: 32,
        }}
      >
        {bars.map((bar, i) => {
          const startFrame = 6 + i * 6;
          const grow = interpolate(frame, [startFrame, startFrame + 18], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: easeOut,
          });
          return (
            <div
              key={bar.label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 14,
              }}
            >
              <div
                style={{
                  width: 80,
                  height: bar.height * grow,
                  background: bar.color,
                  borderRadius: '12px 12px 4px 4px',
                  boxShadow: `0 6px 20px ${bar.color}33`,
                }}
              />
              <div
                style={{
                  fontSize: 16,
                  color: SUBTEXT,
                  fontWeight: 600,
                  opacity: grow,
                }}
              >
                {bar.label}
              </div>
            </div>
          );
        })}
      </div>
    </SceneFrame>
  );
};
