export function validateUrl(url: string): boolean {
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return false;
  }
  return URL.canParse(url);
}
