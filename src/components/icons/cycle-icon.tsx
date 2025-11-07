import React from 'react';

export function CycleIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Moon and cycle icon matching design reference */}
      <circle cx="24" cy="24" r="20" stroke="#B87454" strokeWidth="2" fill="none" />
      <path
        d="M24 8C18 8 13 13 13 19C13 25 18 30 24 30C30 30 35 25 35 19"
        stroke="#B87454"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="24" cy="24" r="3" fill="#C4D0C0" />
      <path
        d="M24 14L24 10M24 38L24 34M38 24L34 24M14 24L10 24"
        stroke="#8B6F4F"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}
