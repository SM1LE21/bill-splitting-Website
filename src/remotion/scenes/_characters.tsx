import React from 'react';

export type CharacterId = 'tun' | 'sarah' | 'pablo' | 'marie';

export const CHARACTER_NAMES: Record<CharacterId, string> = {
  tun: 'Tun',
  sarah: 'Sarah',
  pablo: 'Pablo',
  marie: 'Marie',
};

export const CHARACTER_BG: Record<CharacterId, string> = {
  tun: '#DBEAFE',
  sarah: '#E0E7FF',
  pablo: '#CFFAFE',
  marie: '#FAE8FF',
};

const SKIN_LIGHT = '#FFD9B5';
const SKIN_MED = '#E8B58A';
const STROKE = '#1F2937';

type Props = {
  size?: number;
  style?: React.CSSProperties;
};

const Frame: React.FC<{
  size: number;
  bg: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ size, bg, children, style }) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: '50%',
      background: bg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      boxShadow: '0 6px 16px rgba(0,0,0,0.12)',
      ...style,
    }}
  >
    {children}
  </div>
);

export const CharacterTun: React.FC<Props> = ({ size = 64, style }) => (
  <Frame size={size} bg={CHARACTER_BG.tun} style={style}>
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Face */}
      <circle cx="32" cy="34" r="22" fill={SKIN_LIGHT} />
      {/* Short hair */}
      <path
        d="M 12 30 Q 12 12 32 12 Q 52 12 52 30 Q 52 26 50 23 Q 32 16 14 23 Q 12 26 12 30 Z"
        fill="#1F1F1F"
      />
      {/* Glasses */}
      <circle cx="24" cy="34" r="5" fill="white" stroke={STROKE} strokeWidth={1.6} />
      <circle cx="40" cy="34" r="5" fill="white" stroke={STROKE} strokeWidth={1.6} />
      <line x1="29" y1="34" x2="35" y2="34" stroke={STROKE} strokeWidth={1.6} />
      {/* Eyes */}
      <circle cx="24" cy="34" r="1.6" fill={STROKE} />
      <circle cx="40" cy="34" r="1.6" fill={STROKE} />
      {/* Mouth */}
      <path
        d="M 26 44 Q 32 48 38 44"
        stroke={STROKE}
        strokeWidth={2}
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  </Frame>
);

export const CharacterSarah: React.FC<Props> = ({ size = 64, style }) => (
  <Frame size={size} bg={CHARACTER_BG.sarah} style={style}>
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Long wavy hair behind face */}
      <path
        d="M 8 36 Q 6 12 32 10 Q 58 12 56 36 Q 56 46 50 50 Q 50 30 32 22 Q 14 30 14 50 Q 8 46 8 36 Z"
        fill="#A0522D"
      />
      {/* Face */}
      <circle cx="32" cy="34" r="20" fill={SKIN_LIGHT} />
      {/* Hair fringe */}
      <path
        d="M 14 28 Q 14 16 32 14 Q 50 16 50 28 Q 50 24 46 22 Q 32 18 18 22 Q 14 24 14 28 Z"
        fill="#A0522D"
      />
      {/* Eyes */}
      <circle cx="25" cy="34" r="1.8" fill={STROKE} />
      <circle cx="39" cy="34" r="1.8" fill={STROKE} />
      {/* Smile */}
      <path
        d="M 24 42 Q 32 48 40 42"
        stroke={STROKE}
        strokeWidth={2}
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  </Frame>
);

export const CharacterPablo: React.FC<Props> = ({ size = 64, style }) => (
  <Frame size={size} bg={CHARACTER_BG.pablo} style={style}>
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Face */}
      <circle cx="32" cy="34" r="22" fill={SKIN_MED} />
      {/* Hair */}
      <path
        d="M 12 28 Q 12 10 32 10 Q 52 10 52 28 Q 52 22 48 20 Q 32 14 16 20 Q 12 22 12 28 Z"
        fill="#2A1B0F"
      />
      {/* Beard */}
      <path
        d="M 18 42 Q 18 52 32 56 Q 46 52 46 42 Q 42 48 32 48 Q 22 48 18 42 Z"
        fill="#2A1B0F"
      />
      {/* Eyes */}
      <circle cx="25" cy="34" r="1.8" fill={STROKE} />
      <circle cx="39" cy="34" r="1.8" fill={STROKE} />
      {/* Mouth (small smile inside the beard) */}
      <path
        d="M 28 44 Q 32 46 36 44"
        stroke={STROKE}
        strokeWidth={1.6}
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  </Frame>
);

export const CharacterMarie: React.FC<Props> = ({ size = 64, style }) => (
  <Frame size={size} bg={CHARACTER_BG.marie} style={style}>
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Long blonde hair */}
      <path
        d="M 10 36 Q 8 10 32 10 Q 56 10 54 36 Q 56 50 48 54 Q 50 30 32 22 Q 14 30 16 54 Q 8 50 10 36 Z"
        fill="#E0BB6F"
      />
      {/* Face */}
      <circle cx="32" cy="34" r="20" fill={SKIN_LIGHT} />
      {/* Hair side */}
      <path
        d="M 14 28 Q 14 14 32 14 Q 50 14 50 28 Q 50 24 46 22 Q 32 18 18 22 Q 14 24 14 28 Z"
        fill="#E0BB6F"
      />
      {/* Earrings */}
      <circle cx="13" cy="38" r="1.6" fill="#F59E0B" />
      <circle cx="51" cy="38" r="1.6" fill="#F59E0B" />
      {/* Eyes */}
      <circle cx="25" cy="34" r="1.8" fill={STROKE} />
      <circle cx="39" cy="34" r="1.8" fill={STROKE} />
      {/* Smile */}
      <path
        d="M 24 42 Q 32 48 40 42"
        stroke={STROKE}
        strokeWidth={2}
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  </Frame>
);

export const CharacterAvatar: React.FC<Props & { id: CharacterId }> = ({ id, size, style }) => {
  switch (id) {
    case 'tun':
      return <CharacterTun size={size} style={style} />;
    case 'sarah':
      return <CharacterSarah size={size} style={style} />;
    case 'pablo':
      return <CharacterPablo size={size} style={style} />;
    case 'marie':
      return <CharacterMarie size={size} style={style} />;
  }
};
