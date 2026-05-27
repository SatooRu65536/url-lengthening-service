import { useState } from 'react';
import Button from '~/components/base/Button';
import { convertToLongUrl } from '~/utils/convert';
import styles from './index.module.scss';

export default function TopPage() {
  const [inputUrl, setInputUrl] = useState('');
  const longUrl = convertToLongUrl(inputUrl);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputUrl(event.target.value);
  };

  const handleCopyToClipboard = () => {
    const longUrl = convertToLongUrl(inputUrl);
    navigator.clipboard.writeText(longUrl).then(() => {
      alert('Copied to clipboard!');
    }).catch((err) => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <section className={styles.section}>
      <input
        type="text"
        id="url"
        placeholder="Enter URL here"
        onChange={handleInputChange}
        value={inputUrl}
        className={styles.inputUrl}
      />

      <textarea
        id="result"
        placeholder="Result will appear here"
        className={styles.outputUrl}
        rows={4}
        readOnly
        value={longUrl}
        disabled
      />

      <Button id="copyButton" onClick={handleCopyToClipboard} className={styles.copyButton}>
        Copy to Clipboard
      </Button>
    </section>
  );
}
