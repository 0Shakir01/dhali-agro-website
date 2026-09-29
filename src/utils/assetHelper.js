/**
 * Helper to resolve public assets safely with Vite base path (e.g. /dhali-agro-website/)
 */
export function getAssetUrl(path) {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:') || path.startsWith('blob:')) {
    return path;
  }
  const base = import.meta.env.BASE_URL || '/';
  
  // If already prefixed with base, avoid duplicate prefix
  if (base !== '/' && path.startsWith(base)) {
    return path;
  }
  
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
}
