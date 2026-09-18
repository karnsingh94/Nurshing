// Only routes implemented by this site may be used for local navigation.
export const localRoutes = new Map([
  ['/', '/home'],
  ['/home', '/home'],
  ['/site/index', '/home'],
  ['/architecture', '/architecture'],
  ['/architecture-colleges', '/architecture'],
  ['/arts', '/arts'],
  ['/arts-colleges', '/arts'],
  ['/commerce', '/commerce'],
  ['/commerce-colleges', '/commerce'],
  ['/computer', '/computer'],
  ['/computer-colleges', '/computer'],
  ['/dental', '/dental'],
  ['/dental-colleges', '/dental'],
  ['/design', '/design'],
  ['/design-colleges', '/design'],
  ['/education', '/education'],
  ['/education-colleges', '/education'],
  ['/engineering', '/engineering'],
  ['/engineering-colleges', '/engineering'],
  ['/hospitality', '/hospitality'],
  ['/hotel-management-colleges', '/hospitality'],
  ['/hospitality-colleges', '/hospitality'],
  ['/law', '/law'],
  ['/law-colleges', '/law'],
  ['/logo', '/logo'],
  ['/management', '/management'],
  ['/management-colleges', '/management'],
  ['/medical', '/medical'],
  ['/medical-colleges', '/medical'],
  ['/paramedical', '/paramedical'],
  ['/paramedical-colleges', '/paramedical'],
  ['/pharmacy', '/pharmacy'],
  ['/pharmacy-colleges', '/pharmacy'],
  ['/science', '/science'],
  ['/science-colleges', '/science'],
  ['/veterinary', '/veterinary'],
  ['/veterinary-colleges', '/veterinary'],
  ['/vocational', '/vocational'],
  ['/vocational-courses-colleges', '/vocational'],
]);

// Resolve navigation against this website, including legacy imported links.
export function localLink(href) {
  const value = String(href || '').trim();
  if (!value) return undefined;
  if (value.startsWith('#')) return value;
  if (/^(mailto|tel):/i.test(value)) return value;
  try {
    const base = typeof window === 'undefined' ? 'https://site.invalid' : window.location.origin;
    const url = new URL(value, base);
    if (!['https:', 'http:'].includes(url.protocol)) return undefined;
    const legacy = /(^|\.)getmyuni\.com$/i.test(url.hostname);
    if (url.origin !== base && !legacy) return undefined;
    const path = decodeURIComponent(url.pathname).replace(/\/+$/, '').replace(/\.html$/i, '').trim().replace(/\s+/g, '-').toLowerCase() || '/';
    const route = localRoutes.get(path) || url.pathname;
    // Prevent protocol-relative URLs, including encoded slashes and backslashes.
    if (!route.startsWith('/') || /^[/\\]{2}/.test(route) || /[\\]/.test(route) || /^[/\\]{2}/.test(decodeURIComponent(route))) return undefined;
    return route + url.search + url.hash;
  } catch {
    return undefined;
  }
}

export const allowedLink = localLink;
