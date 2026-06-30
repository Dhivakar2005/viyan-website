export const getAssetPath = (path) => {
  if (!path) return '';
  if (/^https?:\/\//i.test(path)) return path;

  let cleanPath = path;
  if (cleanPath.startsWith('public/')) {
    cleanPath = cleanPath.slice(7);
  }
  if (cleanPath.startsWith('/')) {
    cleanPath = cleanPath.slice(1);
  }

  const baseUrl = import.meta.env.BASE_URL || '/';
  return `${baseUrl}${cleanPath}`;
};
