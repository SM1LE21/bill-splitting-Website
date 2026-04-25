import { Composition } from 'remotion';
import { ReceiptScan, type ReceiptScanProps } from './ReceiptScan';
import {
  FeaturesShowcase,
  FEATURES_SHOWCASE_DURATION_FRAMES,
} from './FeaturesShowcase';
import { CTAParticles } from './ambient/CTAParticles';
import { BenefitsReceipts } from './ambient/BenefitsReceipts';
import { ProcessFlow } from './ambient/ProcessFlow';

export const RECEIPT_SCAN_FPS = 30;
export const RECEIPT_SCAN_DURATION_FRAMES = 210;
export const RECEIPT_SCAN_WIDTH = 1280;
export const RECEIPT_SCAN_HEIGHT = 720;

export const FEATURES_SHOWCASE_FPS = 30;
export const FEATURES_SHOWCASE_WIDTH = 1280;
export const FEATURES_SHOWCASE_HEIGHT = 720;
export { FEATURES_SHOWCASE_DURATION_FRAMES };

export const CTA_PARTICLES_FPS = 30;
export const CTA_PARTICLES_DURATION_FRAMES = 600;
export const CTA_PARTICLES_WIDTH = 1280;
export const CTA_PARTICLES_HEIGHT = 720;

export const BENEFITS_RECEIPTS_FPS = 30;
export const BENEFITS_RECEIPTS_DURATION_FRAMES = 600;
export const BENEFITS_RECEIPTS_WIDTH = 1280;
export const BENEFITS_RECEIPTS_HEIGHT = 720;

export const PROCESS_FLOW_FPS = 30;
export const PROCESS_FLOW_DURATION_FRAMES = 90;
export const PROCESS_FLOW_WIDTH = 1280;
export const PROCESS_FLOW_HEIGHT = 24;

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="ReceiptScan"
        component={ReceiptScan}
        durationInFrames={RECEIPT_SCAN_DURATION_FRAMES}
        fps={RECEIPT_SCAN_FPS}
        width={RECEIPT_SCAN_WIDTH}
        height={RECEIPT_SCAN_HEIGHT}
        defaultProps={
          {
            accentColor: '#2563EB',
          } satisfies ReceiptScanProps
        }
      />
      <Composition
        id="FeaturesShowcase"
        component={FeaturesShowcase}
        durationInFrames={FEATURES_SHOWCASE_DURATION_FRAMES}
        fps={FEATURES_SHOWCASE_FPS}
        width={FEATURES_SHOWCASE_WIDTH}
        height={FEATURES_SHOWCASE_HEIGHT}
      />
      <Composition
        id="CTAParticles"
        component={CTAParticles}
        durationInFrames={CTA_PARTICLES_DURATION_FRAMES}
        fps={CTA_PARTICLES_FPS}
        width={CTA_PARTICLES_WIDTH}
        height={CTA_PARTICLES_HEIGHT}
      />
      <Composition
        id="BenefitsReceipts"
        component={BenefitsReceipts}
        durationInFrames={BENEFITS_RECEIPTS_DURATION_FRAMES}
        fps={BENEFITS_RECEIPTS_FPS}
        width={BENEFITS_RECEIPTS_WIDTH}
        height={BENEFITS_RECEIPTS_HEIGHT}
      />
      <Composition
        id="ProcessFlow"
        component={ProcessFlow}
        durationInFrames={PROCESS_FLOW_DURATION_FRAMES}
        fps={PROCESS_FLOW_FPS}
        width={PROCESS_FLOW_WIDTH}
        height={PROCESS_FLOW_HEIGHT}
      />
    </>
  );
};
