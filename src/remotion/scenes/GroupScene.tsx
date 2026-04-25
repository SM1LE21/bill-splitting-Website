import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import {
  ACCENT,
  ACCENT_SOFT,
  Avatar,
  PURPLE,
  SECONDARY,
  SceneFrame,
  TEAL,
} from './_shared';

const people = [
  { x: 0, y: -150, initial: 'T', color: ACCENT, fadeStart: 12 },
  { x: 140, y: -50, initial: 'S', color: SECONDARY, fadeStart: 18 },
  { x: 90, y: 120, initial: 'P', color: TEAL, fadeStart: 24 },
  { x: -130, y: 80, initial: 'M', color: PURPLE, fadeStart: 30 },
];

export const GroupScene: React.FC = () => {
  const frame = useCurrentFrame();
  const ringOp = interpolate(frame, [0, 14], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <SceneFrame label="Group Management">
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ position: 'relative', width: 360, height: 360 }}>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              border: `2px dashed ${ACCENT}55`,
              opacity: ringOp,
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 96,
              height: 96,
              borderRadius: '50%',
              background: ACCENT,
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 42,
              fontWeight: 800,
              opacity: ringOp,
              boxShadow: `0 0 0 8px ${ACCENT_SOFT}`,
            }}
          >
            +
          </div>
          {people.map((p, i) => {
            const op = interpolate(
              frame,
              [p.fadeStart, p.fadeStart + 12],
              [0, 1],
              { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
            );
            return (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: `translate(calc(-50% + ${p.x * op}px), calc(-50% + ${p.y * op}px)) scale(${op})`,
                  opacity: op,
                }}
              >
                <Avatar initial={p.initial} color={p.color} size={64} />
              </div>
            );
          })}
        </div>
      </div>
    </SceneFrame>
  );
};
