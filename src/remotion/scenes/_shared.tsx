import React from 'react';
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from 'remotion';

export const SCENE_DURATION = 90;
export const FADE = 8;
export const ACCENT = '#2563EB';
export const ACCENT_SOFT = '#EFF6FF';
export const SECONDARY = '#4F46E5';
export const TEAL = '#0891B2';
export const PURPLE = '#9333EA';
export const TEXT = '#111827';
export const SUBTEXT = '#6B7280';

export const easeOut = Easing.bezier(0.16, 1, 0.3, 1);

export const useSceneOpacity = () => {
  const frame = useCurrentFrame();
  return interpolate(
    frame,
    [0, FADE, SCENE_DURATION - FADE, SCENE_DURATION],
    [0, 1, 1, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );
};

export const SceneFrame: React.FC<{
  children: React.ReactNode;
  label: string;
}> = ({ children, label }) => {
  const opacity = useSceneOpacity();
  return (
    <AbsoluteFill
      style={{
        opacity,
        fontFamily: 'system-ui, -apple-system, sans-serif',
        background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 48,
          left: 0,
          right: 0,
          textAlign: 'center',
          fontSize: 14,
          letterSpacing: 4,
          fontWeight: 700,
          color: ACCENT,
          textTransform: 'uppercase',
        }}
      >
        {label}
      </div>
      {children}
    </AbsoluteFill>
  );
};

export const Avatar: React.FC<{
  initial: string;
  color: string;
  size?: number;
  style?: React.CSSProperties;
}> = ({ initial, color, size = 72, style }) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: '50%',
      background: color,
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: size * 0.4,
      boxShadow: '0 6px 16px rgba(0,0,0,0.12)',
      ...style,
    }}
  >
    {initial}
  </div>
);
