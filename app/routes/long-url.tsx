import type { Route } from './+types/long-url';
import { useEffect, useState } from 'react';
import { convertToOriginalUrl } from '~/utils/convert';
import { validateUrl } from '~/utils/validateUrl';

export const meta: Route.MetaFunction = () => [
  { title: 'URL Lengthening Service' },
  { name: 'description', content: 'URL Lengthening Service' },
];

const COUNTDOWN_SECONDS = 5;

export default function Home({ params }: Route.ComponentProps) {
  const [count, setCount] = useState(COUNTDOWN_SECONDS);

  const originalUrl = convertToOriginalUrl(params.slug);
  const isValid = validateUrl(originalUrl);

  useEffect(() => {
    if (!isValid) return;

    const interval = setInterval(() => {
      if (count > 0) {
        setCount((prev) => prev - 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [originalUrl]);

  if (!isValid) {
    return <div>無効なURLです。</div>;
  }

  if (count < 1) {
    window.location.href = originalUrl;
  }

  return (
    <div>
      <div>このURLへリダイレクトします。</div>
      <div>
        <a href={originalUrl}>{originalUrl}</a>
      </div>
      <div>{count > 0 ? `${count}秒後に遷移します。` : '遷移中...'}</div>
    </div>
  );
}
