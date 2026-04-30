import type { ReactNode } from 'react';

interface PhoneFrameProps {
  children: ReactNode;
  className?: string;
}

export default function PhoneFrame({ children, className = '' }: PhoneFrameProps) {
  return (
    <div className={`relative mx-auto w-full max-w-[280px] ${className}`}>
      <div className="relative aspect-[9/19.5] overflow-hidden rounded-[3rem] bg-[#1D1D1F] shadow-2xl">
        <div className="absolute inset-[3px] overflow-hidden rounded-[2.85rem] border-[6px] border-[#1D1D1F] bg-white">
          <PhoneStatusBar />
          <div className="absolute inset-x-0 bottom-0 top-[28px] overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneStatusBar() {
  return (
    <div className="relative z-20 flex h-[28px] items-center justify-between bg-white px-5 text-[10px] font-semibold text-gray-900">
      <span>9:41</span>
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-1.5 h-[18px] w-[60px] -translate-x-1/2 rounded-full bg-black"
      />
      <span className="inline-flex items-center gap-[3px]">
        <SignalIcon />
        <WifiIcon />
        <BatteryIcon />
      </span>
    </div>
  );
}

function SignalIcon() {
  return (
    <svg width="14" height="8" viewBox="0 0 14 8" fill="currentColor" aria-hidden="true">
      <rect x="0" y="5" width="2" height="3" rx="0.4" />
      <rect x="3.5" y="3.5" width="2" height="4.5" rx="0.4" />
      <rect x="7" y="2" width="2" height="6" rx="0.4" />
      <rect x="10.5" y="0" width="2" height="8" rx="0.4" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg
      width="13"
      height="8"
      viewBox="0 0 13 8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M1 2.6 a 8.5 8.5 0 0 1 11 0" />
      <path d="M2.8 4.4 a 5.5 5.5 0 0 1 7.4 0" />
      <path d="M4.6 6.2 a 2.6 2.6 0 0 1 3.8 0" />
      <circle cx="6.5" cy="7.6" r="0.6" fill="currentColor" />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg width="22" height="8" viewBox="0 0 22 8" aria-hidden="true">
      <rect
        x="0.4"
        y="0.4"
        width="19.2"
        height="7.2"
        rx="1.6"
        stroke="currentColor"
        strokeWidth="0.7"
        fill="none"
      />
      <rect x="2" y="2" width="13" height="4" rx="0.8" fill="currentColor" />
      <rect x="20.4" y="2.6" width="1.2" height="2.8" rx="0.4" fill="currentColor" />
    </svg>
  );
}
