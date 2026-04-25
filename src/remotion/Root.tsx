import { Composition } from 'remotion';
import { ReceiptScan, type ReceiptScanProps } from './ReceiptScan';

export const RECEIPT_SCAN_FPS = 30;
export const RECEIPT_SCAN_DURATION_FRAMES = 210;
export const RECEIPT_SCAN_WIDTH = 1280;
export const RECEIPT_SCAN_HEIGHT = 720;

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
    </>
  );
};
