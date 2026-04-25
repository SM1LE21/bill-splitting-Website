import React from 'react';
import { AbsoluteFill, Sequence } from 'remotion';
import { FADE, SCENE_DURATION, SHORT_SCENE_DURATION } from './scenes/_shared';
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

// Each scene starts FADE frames before the previous ends, so the trailing
// fade-out of one scene cross-fades with the leading fade-in of the next.
const sequenceStarts: number[] = (() => {
  const starts: number[] = [];
  let cursor = 0;
  for (const act of acts) {
    starts.push(cursor);
    cursor += act.duration - FADE;
  }
  return starts;
})();

export const FEATURES_SHOWCASE_DURATION_FRAMES =
  sequenceStarts[sequenceStarts.length - 1] + acts[acts.length - 1].duration;

export const FeaturesShowcase: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: '#FFFFFF' }}>
      {acts.map(({ Component, duration }, i) => (
        <Sequence
          key={i}
          from={sequenceStarts[i]}
          durationInFrames={duration}
        >
          <Component />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
