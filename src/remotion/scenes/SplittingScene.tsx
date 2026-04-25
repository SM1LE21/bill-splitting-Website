import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { SceneFrame, SUBTEXT, TEXT, easeOut } from './_shared';
import { CharacterAvatar, type CharacterId } from './_characters';

const people: { id: CharacterId }[] = [
  { id: 'tun' },
  { id: 'sarah' },
  { id: 'pablo' },
];

export const SplittingScene: React.FC = () => {
  const frame = useCurrentFrame();
  const billY = interpolate(frame, [0, 18], [40, 0], {
    extrapolateRight: 'clamp',
    easing: easeOut,
  });
  const billOp = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: 'clamp' });
  const splitOp = interpolate(frame, [28, 50], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const numberPulse = interpolate(frame, [60, 70, 80], [1, 1.08, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

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
          gap: 40,
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
        <div style={{ display: 'flex', gap: 36, opacity: splitOp }}>
          {people.map((p) => (
            <div
              key={p.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <CharacterAvatar id={p.id} size={72} />
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: TEXT,
                  fontVariantNumeric: 'tabular-nums',
                  transform: `scale(${numberPulse})`,
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
