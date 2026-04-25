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
            position: 'relative',
            boxShadow: `0 0 0 ${8 + ring * 32}px ${ACCENT}${ringHex}`,
          }}
        >
          <svg
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg>
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
