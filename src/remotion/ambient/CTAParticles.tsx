import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from 'remotion';

const PARTICLE_COUNT = 28;

const seedRand = (i: number, salt = 0) => {
  const s = Math.sin((i + 1) * 12.9898 + salt * 78.233) * 43758.5453;
  return s - Math.floor(s);
};

type ParticleType = 'euro' | 'coin' | 'star';

type Particle = {
  startX: number;
  startY: number;
  size: number;
  speedX: number;
  speedY: number;
  type: ParticleType;
  twinkle: number;
  spin: number;
};

const TYPES: ParticleType[] = ['euro', 'coin', 'star'];

const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
  startX: seedRand(i, 1) * 1280,
  startY: seedRand(i, 2) * 720,
  size: 10 + seedRand(i, 3) * 16,
  speedX: -8 + seedRand(i, 4) * 16,
  speedY: 14 + seedRand(i, 5) * 22,
  type: TYPES[Math.floor(seedRand(i, 6) * 3)],
  twinkle: seedRand(i, 7) * Math.PI * 2,
  spin: seedRand(i, 8) > 0.5 ? 1 : -1,
}));

export const CTAParticles: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  const t = frame / fps;

  return (
    <AbsoluteFill style={{ background: 'transparent', overflow: 'hidden' }}>
      {particles.map((p, i) => {
        const x = (((p.startX + p.speedX * t * 8) % width) + width) % width;
        const y = (((p.startY + p.speedY * t * 4) % height) + height) % height;
        const opacity = 0.35 + Math.sin(t * 2 + p.twinkle) * 0.2;
        const rotation = (frame * 0.4 * p.spin) % 360;

        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: x - p.size / 2,
              top: y - p.size / 2,
              width: p.size,
              height: p.size,
              opacity,
              transform: `rotate(${rotation}deg)`,
            }}
          >
            {p.type === 'euro' && (
              <span
                style={{
                  fontSize: p.size * 1.1,
                  color: '#FBBF24',
                  fontWeight: 800,
                  textShadow: '0 0 8px rgba(251, 191, 36, 0.55)',
                  fontFamily: 'system-ui, sans-serif',
                  display: 'block',
                  lineHeight: 1,
                }}
              >
                €
              </span>
            )}
            {p.type === 'coin' && (
              <div
                style={{
                  width: p.size,
                  height: p.size,
                  borderRadius: '50%',
                  background:
                    'radial-gradient(circle at 30% 30%, #FCD34D, #B45309)',
                  boxShadow: '0 0 12px rgba(251, 191, 36, 0.45)',
                }}
              />
            )}
            {p.type === 'star' && (
              <svg
                viewBox="0 0 24 24"
                width={p.size}
                height={p.size}
                fill="#FFFFFF"
                style={{ opacity: 0.7 }}
                aria-hidden="true"
              >
                <path d="M12 2 L14 9 L21 9 L15 13 L17 20 L12 16 L7 20 L9 13 L3 9 L10 9 Z" />
              </svg>
            )}
          </div>
        );
      })}
    </AbsoluteFill>
  );
};
