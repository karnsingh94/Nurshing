import React from 'react';

const PALETTES = [
  { bg: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', text: '#ffffff' }, // Deep Blue
  { bg: 'linear-gradient(135deg, #065f46 0%, #10b981 100%)', text: '#ffffff' }, // Emerald
  { bg: 'linear-gradient(135deg, #991b1b 0%, #ef4444 100%)', text: '#ffffff' }, // Crimson
  { bg: 'linear-gradient(135deg, #581c87 0%, #a855f7 100%)', text: '#ffffff' }, // Purple
  { bg: 'linear-gradient(135deg, #c2410c 0%, #f97316 100%)', text: '#ffffff' }, // Vibrant Orange
  { bg: 'linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)', text: '#ffffff' }, // Teal
  { bg: 'linear-gradient(135deg, #3730a3 0%, #6366f1 100%)', text: '#ffffff' }, // Indigo
  { bg: 'linear-gradient(135deg, #831843 0%, #ec4899 100%)', text: '#ffffff' }, // Pink
  { bg: 'linear-gradient(135deg, #1f2937 0%, #4b5563 100%)', text: '#ffffff' }  // Dark Slate
];

export function getCollegeInitials(name) {
  if (!name) return 'IToT';
  
  // Clean up common prefixes / suffixes to get meaningful 2-3 letter initials
  let cleanName = name
    .replace(/\(.*?\)/g, '') // remove parentheses like (W)
    .replace(/National Skill Training Institute/gi, 'NSTI')
    .replace(/Government/gi, 'Govt')
    .replace(/Institute of Training of Trainers/gi, 'IToT')
    .trim();

  const words = cleanName.split(/[\s,.\-]+/).filter(w => w.length > 0);
  
  if (words.length === 1) {
    return words[0].slice(0, 3).toUpperCase();
  }
  
  // Take first letters of up to 3 words
  const letters = words.slice(0, 3).map(w => w[0].toUpperCase()).join('');
  return letters || 'IT';
}

export function getCollegePalette(idOrName) {
  const str = String(idOrName || 'college');
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  const index = Math.abs(hash) % PALETTES.length;
  return PALETTES[index];
}

export default function CollegeLogo({ college, name, className = '', style = {}, size = 56 }) {
  const collegeName = college?.name || name || 'College';
  const initials = getCollegeInitials(collegeName);
  const palette = getCollegePalette(college?.id || collegeName);

  return (
    <div
      className={`collegeLogo flex items-center justify-center font-extrabold select-none shrink-0 ${className}`}
      style={{
        background: palette.bg,
        color: palette.text,
        width: typeof size === 'number' ? `${size}px` : size,
        height: typeof size === 'number' ? `${size}px` : size,
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.12)',
        border: '2px solid rgba(255, 255, 255, 0.8)',
        fontSize: initials.length > 3 ? '13px' : initials.length === 3 ? '15px' : '17px',
        letterSpacing: '0.5px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        textTransform: 'uppercase',
        ...style
      }}
      title={collegeName}
    >
      {initials}
    </div>
  );
}
