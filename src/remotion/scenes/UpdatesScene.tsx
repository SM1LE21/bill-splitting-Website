import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { ACCENT, Avatar, SECONDARY, SceneFrame, SUBTEXT, TEXT, easeOut } from './_shared';

export const UpdatesScene: React.FC = () => {
  const frame = useCurrentFrame();
  const toastY = interpolate(frame, [0, 16], [-80, 0], {
    extrapolateRight: 'clamp',
    easing: easeOut,
  });
  const toastOp = interpolate(frame, [0, 16], [0, 1], { extrapolateRight: 'clamp' });
  const ring = interpolate(frame, [18, 28, 38], [0, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const ringHex = Math.round((1 - ring) * 30)
    .toString(16)
    .padStart(2, '0');

  return (
    <SceneFrame label="Real-time Updates">
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: 32,
        }}
      >
        <div
          style={{
            width: 96,
            height: 96,
            borderRadius: 24,
            background: ACCENT,
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 44,
            position: 'relative',
            boxShadow: `0 0 0 ${8 + ring * 32}px ${ACCENT}${ringHex}`,
          }}
        >
          🔔
        </div>
        <div
          style={{
            transform: `translateY(${toastY}px)`,
            opacity: toastOp,
            background: 'white',
            borderRadius: 12,
            padding: '14px 22px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            border: '1px solid #E5E7EB',
            minWidth: 380,
          }}
        >
          <Avatar initial="S" color={SECONDARY} size={40} />
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: TEXT }}>
              Sarah added an expense
            </div>
            <div style={{ fontSize: 13, color: SUBTEXT }}>
              Dinner · €25.00 · 2 sec ago
            </div>
          </div>
        </div>
      </div>
    </SceneFrame>
  );
};
