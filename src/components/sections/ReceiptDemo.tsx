'use client';

import { Player } from '@remotion/player';
import { ReceiptScan } from '@/remotion/ReceiptScan';
import {
  RECEIPT_SCAN_DURATION_FRAMES,
  RECEIPT_SCAN_FPS,
  RECEIPT_SCAN_HEIGHT,
  RECEIPT_SCAN_WIDTH,
} from '@/remotion/Root';

export default function ReceiptDemo() {
  return (
    <div className="bg-white py-24 sm:py-32 lg:py-40" id="receipt-demo">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            See it work
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From receipt to running total
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Snap a paper receipt and ExpenseMate reads every line in seconds.
            No typing, no spreadsheets, no math.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 shadow-sm">
          <Player
            component={ReceiptScan}
            durationInFrames={RECEIPT_SCAN_DURATION_FRAMES}
            fps={RECEIPT_SCAN_FPS}
            compositionWidth={RECEIPT_SCAN_WIDTH}
            compositionHeight={RECEIPT_SCAN_HEIGHT}
            inputProps={{ accentColor: '#2563EB' }}
            autoPlay
            loop
            controls={false}
            style={{ width: '100%', aspectRatio: '16 / 9' }}
          />
        </div>
      </div>
    </div>
  );
}
