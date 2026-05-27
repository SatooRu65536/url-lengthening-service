import { REVERSE_WORD_CONVRT_MAP, WORD_CONVRT_MAP } from '~/const/wordConvertMap';
import { fromBase64, toBase64 } from './base64';

// URL を長くする
export function convertToLongUrl(shortUrl: string): string {
  return [...toBase64(shortUrl)].map((c) => WORD_CONVRT_MAP[c]).join('-');
}

// URL をもとに戻す
export function convertToOriginalUrl(longUrl: string): string {
  return fromBase64(longUrl.split('-').map((word) => REVERSE_WORD_CONVRT_MAP[word]).join(''));
}
