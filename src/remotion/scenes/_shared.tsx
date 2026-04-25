import React from 'react';
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from 'remotion';

export const SCENE_DURATION = 90;
export const SHORT_SCENE_DURATION = 60;
export const FADE = 8;

export const ACCENT = '#2563EB';
export const ACCENT_SOFT = '#EFF6FF';
export const SECONDARY = '#4F46E5';
export const TEAL = '#0891B2';
export const PURPLE = '#9333EA';
export const WARM = '#F97316';
export const CORAL = '#FB7185';
export const YELLOW = '#FBBF24';
export const CREAM = '#FFF7ED';
export const SUCCESS = '#10B981';
export const TEXT = '#111827';
export const SUBTEXT = '#6B7280';

export const easeOut = Easing.bezier(0.16, 1, 0.3, 1);

export const useSceneOpacity = (duration: number = SCENE_DURATION) => {
  const frame = useCurrentFrame();
  return interpolate(
    frame,
    [0, FADE, duration - FADE, duration],
    [0, 1, 1, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );
};

type SceneFrameProps = {
  children: React.ReactNode;
  label: string;
  duration?: number;
  background?: string;
  labelColor?: string;
};

export const SceneFrame: React.FC<SceneFrameProps> = ({
  children,
  label,
  duration = SCENE_DURATION,
  background = 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)',
  labelColor = ACCENT,
}) => {
  const opacity = useSceneOpacity(duration);
  return (
    <AbsoluteFill
      style={{
        opacity,
        fontFamily: 'system-ui, -apple-system, sans-serif',
        background,
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
          color: labelColor,
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

export const Sparkles: React.FC<{
  cx: number;
  cy: number;
  count?: number;
  radius?: number;
  opacity: number;
  color?: string;
}> = ({ cx, cy, count = 6, radius = 80, opacity, color = WARM }) => {
  return (
    <svg
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        opacity,
      }}
    >
      {Array.from({ length: count }).map((_, i) => {
        const angle = (i / count) * 2 * Math.PI;
        const x = cx + Math.cos(angle) * radius;
        const y = cy + Math.sin(angle) * radius;
        const r = 4;
        return (
          <path
            key={i}
            d={`M ${x} ${y - r} L ${x + r * 0.3} ${y - r * 0.3} L ${x + r} ${y} L ${x + r * 0.3} ${y + r * 0.3} L ${x} ${y + r} L ${x - r * 0.3} ${y + r * 0.3} L ${x - r} ${y} L ${x - r * 0.3} ${y - r * 0.3} Z`}
            fill={color}
          />
        );
      })}
    </svg>
  );
};
