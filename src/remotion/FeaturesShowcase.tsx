import React from 'react';
import { AbsoluteFill, Sequence } from 'remotion';
import { SCENE_DURATION } from './scenes/_shared';
import { SplittingScene } from './scenes/SplittingScene';
import { ScanningScene } from './scenes/ScanningScene';
import { GroupScene } from './scenes/GroupScene';
import { TrackingScene } from './scenes/TrackingScene';
import { UpdatesScene } from './scenes/UpdatesScene';
import { SettlementScene } from './scenes/SettlementScene';

export const FEATURES_SHOWCASE_DURATION_FRAMES = SCENE_DURATION * 6;

export const FeaturesShowcase: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: '#FFFFFF' }}>
      <Sequence from={0} durationInFrames={SCENE_DURATION}>
        <SplittingScene />
      </Sequence>
      <Sequence from={SCENE_DURATION} durationInFrames={SCENE_DURATION}>
        <ScanningScene />
      </Sequence>
      <Sequence from={SCENE_DURATION * 2} durationInFrames={SCENE_DURATION}>
        <GroupScene />
      </Sequence>
      <Sequence from={SCENE_DURATION * 3} durationInFrames={SCENE_DURATION}>
        <TrackingScene />
      </Sequence>
      <Sequence from={SCENE_DURATION * 4} durationInFrames={SCENE_DURATION}>
        <UpdatesScene />
      </Sequence>
      <Sequence from={SCENE_DURATION * 5} durationInFrames={SCENE_DURATION}>
        <SettlementScene />
      </Sequence>
    </AbsoluteFill>
  );
};
