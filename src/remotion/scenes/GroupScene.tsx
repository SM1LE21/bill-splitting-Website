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
  TEXT,
} from './_shared';

const SIZE = 360;
const CENTER = SIZE / 2;
const RING_RADIUS = 150;

const people = [
  { x: 0, y: -RING_RADIUS, initial: 'T', name: 'Tun', color: ACCENT, fadeStart: 14 },
  { x: 140, y: -50, initial: 'S', name: 'Sarah', color: SECONDARY, fadeStart: 22 },
  { x: 90, y: 120, initial: 'P', name: 'Pablo', color: TEAL, fadeStart: 30 },
  { x: -130, y: 80, initial: 'M', name: 'Marie', color: PURPLE, fadeStart: 38 },
];

export const GroupScene: React.FC = () => {
  const frame = useCurrentFrame();
  const ringOp = interpolate(frame, [0, 14], [0, 1], { extrapolateRight: 'clamp' });
  const lineProgress = interpolate(frame, [54, 72], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const badgeOp = interpolate(frame, [62, 78], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <SceneFrame label="Group Management">
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <div style={{ position: 'relative', width: SIZE, height: SIZE }}>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              border: `2px dashed ${ACCENT}55`,
              opacity: ringOp,
            }}
          />

          <svg
            width={SIZE}
            height={SIZE}
            style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
          >
            {people.map((p, i) => {
              const length = Math.hypot(p.x, p.y);
              return (
                <line
                  key={i}
                  x1={CENTER + p.x}
                  y1={CENTER + p.y}
                  x2={CENTER}
                  y2={CENTER}
                  stroke={`${ACCENT}66`}
                  strokeWidth={2}
                  strokeDasharray={length}
                  strokeDashoffset={(1 - lineProgress) * length}
                  strokeLinecap="round"
                />
              );
            })}
          </svg>

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
              zIndex: 2,
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
            const nameOp = interpolate(
              frame,
              [p.fadeStart + 8, p.fadeStart + 20],
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
                  zIndex: 3,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  <Avatar initial={p.initial} color={p.color} size={64} />
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: TEXT,
                      opacity: nameOp,
                      background: 'white',
                      padding: '2px 8px',
                      borderRadius: 999,
                      boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
                    }}
                  >
                    {p.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          style={{
            opacity: badgeOp,
            transform: `translateY(${(1 - badgeOp) * 8}px)`,
            background: 'white',
            border: `1px solid ${ACCENT}33`,
            borderRadius: 999,
            padding: '8px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            fontSize: 14,
            color: TEXT,
            fontWeight: 600,
            boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              background: ACCENT,
            }}
          />
          Family trip · 4 members
        </div>
      </div>
    </SceneFrame>
  );
};
