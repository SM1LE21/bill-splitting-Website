import React from 'react';
import { AbsoluteFill, Sequence } from 'remotion';
import { SCENE_DURATION, SHORT_SCENE_DURATION } from './scenes/_shared';
import { OpeningScene } from './scenes/OpeningScene';
import { ScanningScene } from './scenes/ScanningScene';
import { SplittingScene } from './scenes/SplittingScene';
import { GroupScene } from './scenes/GroupScene';
import { SettlementScene } from './scenes/SettlementScene';
import { ResolutionScene } from './scenes/ResolutionScene';

const acts = [
  { Component: OpeningScene, duration: SHORT_SCENE_DURATION },
  { Component: ScanningScene, duration: SCENE_DURATION },
  { Component: SplittingScene, duration: SCENE_DURATION },
  { Component: GroupScene, duration: SCENE_DURATION },
  { Component: SettlementScene, duration: SCENE_DURATION },
  { Component: ResolutionScene, duration: SHORT_SCENE_DURATION },
];

export const FEATURES_SHOWCASE_DURATION_FRAMES = acts.reduce(
  (sum, act) => sum + act.duration,
  0
);

export const FeaturesShowcase: React.FC = () => {
  let cursor = 0;
  return (
    <AbsoluteFill style={{ background: '#FFFFFF' }}>
      {acts.map(({ Component, duration }, i) => {
        const from = cursor;
        cursor += duration;
        return (
          <Sequence key={i} from={from} durationInFrames={duration}>
            <Component />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
