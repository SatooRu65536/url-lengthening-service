export function validateUrl(url: string): boolean {
  return URL.canParse(url);
}
