import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import {
  ACCENT,
  Avatar,
  CORAL,
  CREAM,
  PURPLE,
  SECONDARY,
  SHORT_SCENE_DURATION,
  SceneFrame,
  TEAL,
  TEXT,
  WARM,
  easeOut,
} from './_shared';

const TABLE_RADIUS = 200;

const seats = [
  { angle: -Math.PI / 2, initial: 'T', color: ACCENT },
  { angle: 0, initial: 'S', color: SECONDARY },
  { angle: Math.PI / 2, initial: 'P', color: TEAL },
  { angle: Math.PI, initial: 'M', color: PURPLE },
];

export const OpeningScene: React.FC = () => {
  const frame = useCurrentFrame();
  const tableOp = interpolate(frame, [0, 12], [0, 1], { extrapolateRight: 'clamp' });
  const seatOp = interpolate(frame, [10, 22], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const billY = interpolate(frame, [22, 36], [-260, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeOut,
  });
  const billOp = interpolate(frame, [22, 32], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <SceneFrame
      label="Dinner with friends"
      duration={SHORT_SCENE_DURATION}
      background={`linear-gradient(135deg, ${CREAM} 0%, #FFF1E6 100%)`}
      labelColor={WARM}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ position: 'relative', width: 480, height: 480 }}>
          <div
            style={{
              position: 'absolute',
              inset: 60,
              borderRadius: '50%',
              background:
                'radial-gradient(circle at 30% 30%, #E9D8B7 0%, #C9A876 70%, #A8804E 100%)',
              boxShadow: '0 20px 50px rgba(168, 128, 78, 0.35)',
              opacity: tableOp,
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: `translate(-50%, calc(-50% + ${billY}px))`,
              opacity: billOp,
              width: 120,
              height: 150,
              background: 'white',
              borderRadius: 6,
              boxShadow: '0 12px 30px rgba(0,0,0,0.18)',
              padding: '14px 12px',
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
              border: '1px solid #E5E7EB',
            }}
          >
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: 1.5,
                textAlign: 'center',
                color: TEXT,
              }}
            >
              BISTRO
            </div>
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                style={{
                  height: 6,
                  background: '#E5E7EB',
                  borderRadius: 3,
                  width: i === 4 ? '60%' : '100%',
                }}
              />
            ))}
            <div
              style={{
                marginTop: 'auto',
                fontSize: 18,
                fontWeight: 800,
                color: TEXT,
                textAlign: 'right',
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              €120
            </div>
          </div>

          {seats.map((s, i) => {
            const x = Math.cos(s.angle) * TABLE_RADIUS;
            const y = Math.sin(s.angle) * TABLE_RADIUS;
            const questionStart = 36 + i * 4;
            const qOp = interpolate(
              frame,
              [questionStart, questionStart + 8, questionStart + 18],
              [0, 1, 1],
              { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
            );
            const qScale = interpolate(
              frame,
              [questionStart, questionStart + 8, questionStart + 18],
              [0.6, 1.15, 1],
              { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
            );
            return (
              <div
                key={s.initial}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  opacity: seatOp,
                }}
              >
                <Avatar initial={s.initial} color={s.color} size={56} />
                <div
                  style={{
                    position: 'absolute',
                    top: -42,
                    left: '50%',
                    transform: `translate(-50%, 0) scale(${qScale})`,
                    opacity: qOp,
                    fontSize: 36,
                    fontWeight: 800,
                    color: CORAL,
                    textShadow: '0 2px 4px rgba(0,0,0,0.08)',
                  }}
                >
                  ?
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SceneFrame>
  );
};
