import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import {
  ACCENT,
  Avatar,
  PURPLE,
  SECONDARY,
  SHORT_SCENE_DURATION,
  Sparkles,
  SUCCESS,
  SUBTEXT,
  SceneFrame,
  TEAL,
  WARM,
  easeOut,
} from './_shared';

const people = [
  { initial: 'T', color: ACCENT },
  { initial: 'S', color: SECONDARY },
  { initial: 'P', color: TEAL },
  { initial: 'M', color: PURPLE },
];

export const ResolutionScene: React.FC = () => {
  const frame = useCurrentFrame();

  const settledOp = interpolate(frame, [0, 14], [0, 1], {
    extrapolateRight: 'clamp',
    easing: easeOut,
  });
  const settledScale = interpolate(frame, [0, 12, 18], [0.8, 1.1, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const sparkleOp = interpolate(frame, [10, 22, 36], [0, 0.9, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const wordmarkOp = interpolate(frame, [22, 34], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const wordmarkY = interpolate(frame, [22, 34], [10, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeOut,
  });

  return (
    <SceneFrame
      label="All settled"
      duration={SHORT_SCENE_DURATION}
      labelColor={SUCCESS}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 36,
        }}
      >
        <div style={{ display: 'flex', gap: 20 }}>
          {people.map((p, i) => {
            const bob = Math.sin((frame - i * 4) / 6) * 4;
            const op = interpolate(frame, [4 + i * 2, 14 + i * 2], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });
            return (
              <div
                key={p.initial}
                style={{
                  opacity: op,
                  transform: `translateY(${bob}px)`,
                }}
              >
                <Avatar initial={p.initial} color={p.color} size={68} />
              </div>
            );
          })}
        </div>

        <div
          style={{
            position: 'relative',
            opacity: settledOp,
            transform: `scale(${settledScale})`,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            background: SUCCESS,
            color: 'white',
            padding: '12px 24px',
            borderRadius: 999,
            fontSize: 18,
            fontWeight: 700,
            boxShadow: '0 12px 30px rgba(16,185,129,0.35)',
          }}
        >
          <Sparkles
            cx={-30}
            cy={20}
            count={6}
            radius={50}
            opacity={sparkleOp}
            color={WARM}
          />
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M4.5 12.75l6 6 9-13.5" />
          </svg>
          Everyone&apos;s squared up
        </div>

        <div
          style={{
            opacity: wordmarkOp,
            transform: `translateY(${wordmarkY}px)`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 6,
            marginTop: 16,
          }}
        >
          <div
            style={{
              fontSize: 36,
              fontWeight: 800,
              letterSpacing: -0.5,
              background: `linear-gradient(135deg, ${ACCENT} 0%, ${WARM} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            ExpenseMate
          </div>
          <div
            style={{
              fontSize: 13,
              color: SUBTEXT,
              fontWeight: 500,
              letterSpacing: 1,
            }}
          >
            Snap. Split. Done.
          </div>
        </div>

        {/* Floating sparkles around the whole composition */}
        <Sparkles
          cx={200}
          cy={140}
          count={3}
          radius={60}
          opacity={sparkleOp * 0.7}
          color={WARM}
        />
        <Sparkles
          cx={1080}
          cy={180}
          count={3}
          radius={50}
          opacity={sparkleOp * 0.7}
          color={ACCENT}
        />
      </div>
    </SceneFrame>
  );
};
