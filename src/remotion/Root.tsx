import { Composition } from 'remotion';
import { ReceiptScan, type ReceiptScanProps } from './ReceiptScan';
import {
  FeaturesShowcase,
  FEATURES_SHOWCASE_DURATION_FRAMES,
} from './FeaturesShowcase';

export const RECEIPT_SCAN_FPS = 30;
export const RECEIPT_SCAN_DURATION_FRAMES = 210;
export const RECEIPT_SCAN_WIDTH = 1280;
export const RECEIPT_SCAN_HEIGHT = 720;

export const FEATURES_SHOWCASE_FPS = 30;
export const FEATURES_SHOWCASE_WIDTH = 1280;
export const FEATURES_SHOWCASE_HEIGHT = 720;
export { FEATURES_SHOWCASE_DURATION_FRAMES };

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
    </>
  );
};
