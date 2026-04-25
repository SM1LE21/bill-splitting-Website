import React from 'react';
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
} from 'remotion';

export type ReceiptScanProps = {
  accentColor?: string;
};

const items = [
  { name: 'Caesar Salad', price: 12.5 },
  { name: 'Steak Frites', price: 24.0 },
  { name: 'House Wine 0.5L', price: 18.0 },
  { name: 'Tiramisu', price: 8.5 },
  { name: 'Espresso x3', price: 9.0 },
];

const RECEIPT_WIDTH = 360;
const RECEIPT_HEIGHT = 540;
const ITEMS_TOP = 220;
const ITEM_PITCH = 36;
const SCAN_START = 30;
const SCAN_END = 180;

export const ReceiptScan: React.FC<ReceiptScanProps> = ({
  accentColor = '#2563EB',
}) => {
  const frame = useCurrentFrame();

  const receiptOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const receiptY = interpolate(frame, [0, 20], [40, 0], {
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const scanProgress = interpolate(
    frame,
    [SCAN_START, SCAN_END],
    [0, 1],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );
  const scanY = scanProgress * RECEIPT_HEIGHT;

  const getItemActivation = (index: number) => {
    const itemY = ITEMS_TOP + index * ITEM_PITCH;
    const targetProgress = itemY / RECEIPT_HEIGHT;
    const targetFrame = SCAN_START + targetProgress * (SCAN_END - SCAN_START);
    return interpolate(frame, [targetFrame, targetFrame + 10], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });
  };

  const total = items.reduce(
    (acc, item, idx) => acc + item.price * getItemActivation(idx),
    0
  );

  const doneOpacity = interpolate(frame, [185, 210], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const scanVisible = scanProgress > 0 && scanProgress < 1;

  return (
    <AbsoluteFill
      style={{
        background:
          'linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 50%, #EEF2FF 100%)',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          gap: 80,
        }}
      >
        <div
          style={{
            position: 'relative',
            width: RECEIPT_WIDTH,
            height: RECEIPT_HEIGHT,
            opacity: receiptOpacity,
            transform: `translateY(${receiptY}px)`,
            background: 'white',
            borderRadius: 14,
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.18)',
            padding: '32px 28px',
            overflow: 'hidden',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: 8 }}>
            <div
              style={{
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: 2,
                color: '#111827',
              }}
            >
              BISTRO DU NORD
            </div>
            <div style={{ fontSize: 13, color: '#6B7280', marginTop: 4 }}>
              Diekirch · 25 April 2026
            </div>
          </div>
          <div
            style={{
              borderTop: '1.5px dashed #D1D5DB',
              margin: '20px 0',
            }}
          />

          <div
            style={{ display: 'flex', flexDirection: 'column', gap: 6 }}
          >
            {items.map((item, idx) => {
              const activation = getItemActivation(idx);
              return (
                <div
                  key={item.name}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: 17,
                    color: '#374151',
                    padding: '6px 8px',
                    borderRadius: 6,
                    background: `rgba(37, 99, 235, ${activation * 0.1})`,
                    transform: `translateX(${(1 - activation) * 4}px)`,
                  }}
                >
                  <span>{item.name}</span>
                  <span
                    style={{
                      fontVariantNumeric: 'tabular-nums',
                      fontWeight: 600,
                    }}
                  >
                    €{item.price.toFixed(2)}
                  </span>
                </div>
              );
            })}
          </div>

          {scanVisible && (
            <>
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: scanY,
                  height: 60,
                  background: `linear-gradient(180deg, transparent, ${accentColor}33, transparent)`,
                  pointerEvents: 'none',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: scanY + 30,
                  height: 2,
                  background: accentColor,
                  boxShadow: `0 0 16px ${accentColor}`,
                  pointerEvents: 'none',
                }}
              />
            </>
          )}
        </div>

        <div
          style={{
            opacity: receiptOpacity,
            transform: `translateY(${receiptY}px)`,
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
            minWidth: 280,
          }}
        >
          <div
            style={{
              fontSize: 14,
              color: '#6B7280',
              textTransform: 'uppercase',
              letterSpacing: 2,
              fontWeight: 600,
            }}
          >
            Running total
          </div>
          <div
            style={{
              fontSize: 88,
              fontWeight: 800,
              color: '#111827',
              fontVariantNumeric: 'tabular-nums',
              lineHeight: 1,
            }}
          >
            €{total.toFixed(2)}
          </div>
          <div
            style={{
              fontSize: 15,
              color: accentColor,
              opacity: doneOpacity,
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              fontWeight: 600,
            }}
          >
            <span
              style={{
                display: 'inline-flex',
                width: 22,
                height: 22,
                borderRadius: 11,
                background: accentColor,
                color: 'white',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              ✓
            </span>
            Items recognised, ready to split
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
