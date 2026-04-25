import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { ACCENT, Avatar, SceneFrame, SECONDARY, SUBTEXT, TEAL, TEXT, easeOut } from './_shared';

export const SplittingScene: React.FC = () => {
  const frame = useCurrentFrame();
  const billY = interpolate(frame, [0, 16], [40, 0], {
    extrapolateRight: 'clamp',
    easing: easeOut,
  });
  const billOp = interpolate(frame, [0, 16], [0, 1], { extrapolateRight: 'clamp' });
  const splitOp = interpolate(frame, [22, 36], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const people = [
    { initial: 'T', color: ACCENT },
    { initial: 'S', color: SECONDARY },
    { initial: 'P', color: TEAL },
  ];

  return (
    <SceneFrame label="Smart Bill Splitting">
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
        <div
          style={{
            opacity: billOp,
            transform: `translateY(${billY}px)`,
            background: 'white',
            padding: '28px 48px',
            borderRadius: 16,
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)',
            textAlign: 'center',
            border: '1px solid #E5E7EB',
          }}
        >
          <div style={{ fontSize: 14, color: SUBTEXT, letterSpacing: 2 }}>
            DINNER · 3 PEOPLE
          </div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: TEXT,
              fontVariantNumeric: 'tabular-nums',
              marginTop: 6,
            }}
          >
            €120.00
          </div>
        </div>
        <div style={{ display: 'flex', gap: 28, opacity: splitOp }}>
          {people.map((p) => (
            <div
              key={p.initial}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <Avatar initial={p.initial} color={p.color} />
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: TEXT,
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                €40
              </div>
            </div>
          ))}
        </div>
      </div>
    </SceneFrame>
  );
};
