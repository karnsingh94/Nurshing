import { useState } from 'react';
import { collegePhotos } from '../data/collegePhotos.js';

const states = { HR: 'Haryana', RJ: 'Rajasthan', TG: 'Telangana', OR: 'Odisha', JK: 'Jammu & Kashmir', KA: 'Karnataka', BR: 'Bihar', ML: 'Meghalaya', UP: 'Uttar Pradesh', PB: 'Punjab', MH: 'Maharashtra', WB: 'West Bengal', TR: 'Tripura', HP: 'Himachal Pradesh', JH: 'Jharkhand', CT: 'Chhattisgarh', AP: 'Andhra Pradesh', GJ: 'Gujarat', GA: 'Goa', TN: 'Tamil Nadu', MP: 'Madhya Pradesh', KL: 'Kerala', UT: 'Uttarakhand' };
const escape = (text) => String(text || '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' }[c]));

const GRADIENTS = [
  ['#1e3a8a', '#3b82f6'], ['#065f46', '#10b981'], ['#991b1b', '#ef4444'],
  ['#581c87', '#a855f7'], ['#c2410c', '#f97316'], ['#0f766e', '#14b8a6'],
  ['#3730a3', '#6366f1'], ['#831843', '#ec4899'], ['#1f2937', '#4b5563']
];

export function collegePlaceholder(college) {
  const name = college?.name || 'College';
  const location = [college?.city || college?.district, states[college?.state] || college?.state].filter(Boolean).join(', ');
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash << 5) - hash + name.charCodeAt(i);
    hash |= 0;
  }
  const [c1, c2] = GRADIENTS[Math.abs(hash) % GRADIENTS.length];
  const words = name.replace(/\(.*?\)/g, '').replace(/National Skill Training Institute/gi, 'NSTI').replace(/Government/gi, 'Govt').replace(/Institute of Training of Trainers/gi, 'IToT').trim().split(/[\s,.\-]+/).filter(Boolean);
  const initials = words.length === 1 ? words[0].slice(0, 3).toUpperCase() : words.slice(0, 3).map(w => w[0].toUpperCase()).join('');

  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="640" height="400" viewBox="0 0 640 400"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${c1}"/><stop offset="100%" stop-color="${c2}"/></linearGradient></defs><rect width="640" height="400" fill="url(#g)"/><circle cx="320" cy="140" r="65" fill="rgba(255,255,255,0.2)" stroke="white" stroke-width="4"/><text x="320" y="154" text-anchor="middle" fill="white" font-family="system-ui, sans-serif" font-weight="900" font-size="44">${escape(initials)}</text><text x="320" y="260" text-anchor="middle" fill="white" font-family="system-ui, sans-serif" font-weight="800" font-size="22">${escape(name.length > 55 ? name.slice(0,52)+'…' : name)}</text><text x="320" y="295" text-anchor="middle" fill="rgba(255,255,255,0.85)" font-family="system-ui, sans-serif" font-weight="600" font-size="18">${escape(location)}</text></svg>`);
}

export default function CollegeImage({ college, alt, ...props }) {
  const [failedSource, setFailedSource] = useState(null);
  const photo = collegePhotos[college?.id];
  const source = photo?.src || college?.thumbnailSignedUrl || college?.thumbnail;
  const available = source && failedSource !== source;
  return <img {...props} src={available ? source : collegePlaceholder(college)}
    alt={available ? (alt || `${college?.name} campus`) : `${college?.name || 'College'} — campus photo unavailable`}
    title={available ? `${college?.name} — ${photo?.location || college?.city || college?.state || ''}` : `Campus photo unavailable for ${college?.name || 'this college'}`}
    loading={props.loading || 'lazy'} decoding="async"
    onError={available ? () => setFailedSource(source) : undefined} />;
}
