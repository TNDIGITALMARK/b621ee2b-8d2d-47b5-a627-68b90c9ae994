import React from 'react';

export function StrengthIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Dumbbell/strength icon matching design reference */}
      <rect x="8" y="20" width="4" height="8" rx="1" stroke="#B87454" strokeWidth="2" fill="none" />
      <rect x="36" y="20" width="4" height="8" rx="1" stroke="#B87454" strokeWidth="2" fill="none" />
      <line x1="12" y1="24" x2="36" y2="24" stroke="#8B6F4F" strokeWidth="2" strokeLinecap="round" />
      <rect x="18" y="22" width="12" height="4" rx="1" fill="#C4D0C0" opacity="0.6" />
      <circle cx="10" cy="24" r="2" fill="#B87454" opacity="0.4" />
      <circle cx="38" cy="24" r="2" fill="#B87454" opacity="0.4" />
    </svg>
  );
}
