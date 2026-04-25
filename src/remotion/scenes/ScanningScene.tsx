import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { ACCENT, ACCENT_SOFT, SceneFrame, TEXT } from './_shared';

const items = [
  { name: 'Salad', price: 12 },
  { name: 'Pasta', price: 24 },
  { name: 'Wine', price: 18 },
  { name: 'Coffee', price: 9 },
];

export const ScanningScene: React.FC = () => {
  const frame = useCurrentFrame();
  const phoneOp = interpolate(frame, [0, 14], [0, 1], { extrapolateRight: 'clamp' });
  const scan = interpolate(frame, [16, 50], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <SceneFrame label="Receipt Scanning">
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: 320,
            height: 480,
            borderRadius: 36,
            background: '#1D1D1F',
            padding: 12,
            opacity: phoneOp,
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              borderRadius: 24,
              overflow: 'hidden',
              background: ACCENT_SOFT,
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: '40px 30px',
                background: 'white',
                borderRadius: 8,
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                padding: 22,
              }}
            >
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: TEXT,
                  textAlign: 'center',
                  letterSpacing: 2,
                }}
              >
                BISTRO
              </div>
              <div
                style={{ borderTop: '1.5px dashed #D1D5DB', margin: '4px 0' }}
              />
              {items.map((item, i) => {
                const lit = scan > (i + 1) * 0.18 ? 1 : 0;
                return (
                  <div
                    key={item.name}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: 14,
                      color: lit ? ACCENT : '#9CA3AF',
                      fontWeight: lit ? 600 : 400,
                    }}
                  >
                    <span>{item.name}</span>
                    <span>€{item.price}</span>
                  </div>
                );
              })}
            </div>
            <div
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: `${scan * 100}%`,
                height: 60,
                background: `linear-gradient(180deg, transparent, ${ACCENT}55, transparent)`,
                pointerEvents: 'none',
              }}
            />
          </div>
        </div>
      </div>
    </SceneFrame>
  );
};
