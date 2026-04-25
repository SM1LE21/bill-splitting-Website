import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { ACCENT, SceneFrame, easeOut } from './_shared';
import { CharacterAvatar } from './_characters';

export const SettlementScene: React.FC = () => {
  const frame = useCurrentFrame();
  const arrow = interpolate(frame, [10, 36], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeOut,
  });
  const checkOp = interpolate(frame, [38, 50], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <SceneFrame label="Debt Settlement">
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CharacterAvatar id="tun" size={96} />
        <div
          style={{
            width: 280,
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 24px',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: 0,
              right: `${(1 - arrow) * 100}%`,
              height: 3,
              background: ACCENT,
              borderRadius: 2,
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: `${arrow * 90}%`,
              top: '50%',
              transform: 'translateY(-50%)',
              width: 0,
              height: 0,
              borderLeft: `12px solid ${ACCENT}`,
              borderTop: '8px solid transparent',
              borderBottom: '8px solid transparent',
              opacity: arrow > 0.05 ? 1 : 0,
            }}
          />
          <div
            style={{
              position: 'relative',
              background: 'white',
              border: `1px solid ${ACCENT}`,
              color: ACCENT,
              padding: '6px 14px',
              borderRadius: 999,
              fontSize: 16,
              fontWeight: 700,
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            €50.00
          </div>
        </div>
        <CharacterAvatar id="sarah" size={96} />
        <div
          style={{
            position: 'absolute',
            top: '70%',
            left: '50%',
            transform: 'translateX(-50%)',
            opacity: checkOp,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            background: '#10B981',
            color: 'white',
            padding: '8px 18px',
            borderRadius: 999,
            fontSize: 16,
            fontWeight: 700,
            boxShadow: '0 10px 30px rgba(16,185,129,0.3)',
          }}
        >
          <svg
            width="18"
            height="18"
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
          Settled
        </div>
      </div>
    </SceneFrame>
  );
};
