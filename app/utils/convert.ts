// URLが入力されたら，特定のアルゴリズムで変換する
export function convertToLongUrl(shortUrl: string): string {
  // ここでは単純な例として、短縮URLの末尾に「-long」を追加するだけの変換を行います。
  // 実際のアルゴリズムは、要件に応じて複雑になる可能性があります。
  return `${shortUrl}-long`;
}

// URLが入力されたら，特定のアルゴリズムで変換する
export function convertToShortUrl(longUrl: string): string {
  // ここでは単純な例として、長いURLの末尾から「-long」を削除するだけの変換を行います。
  // 実際のアルゴリズムは、要件に応じて複雑になる可能性があります。
  return longUrl.replace(/-long$/, '');
}
