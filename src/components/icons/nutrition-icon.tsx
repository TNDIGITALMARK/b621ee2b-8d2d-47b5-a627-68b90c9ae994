import React from 'react';

export function NutritionIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Apple/nutrition icon matching design reference */}
      <path
        d="M24 8C18 8 14 12 14 18C14 24 18 32 24 40C30 32 34 24 34 18C34 12 30 8 24 8Z"
        stroke="#B87454"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M24 8C24 8 26 6 28 6C30 6 31 7 31 9"
        stroke="#8B6F4F"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse cx="20" cy="20" rx="2" ry="3" fill="#C4D0C0" opacity="0.6" />
    </svg>
  );
}
