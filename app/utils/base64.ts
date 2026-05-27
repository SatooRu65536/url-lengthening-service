export function toBase64(str: string): string {
  return btoa(
    encodeURIComponent(str).replace(
      /%([0-9A-F]{2})/g,
      // eslint-disable-next-line ts/no-unsafe-argument
      (_, p1) => String.fromCharCode(Number.parseInt(p1, 16)),
    ),
  );
}

export function fromBase64(base64: string): string {
  return decodeURIComponent(
    Array.from(atob(base64))
      .map((c) =>
        `%${c.charCodeAt(0).toString(16).padStart(2, '0')}`,
      )
      .join(''),
  );
}
