import { useState } from 'react';
import { toast } from 'react-toastify';
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
    if (longUrl.length === 0) {
      toast.error('No URL to copy!');
      return;
    }
    navigator.clipboard.writeText(`${window.location.origin}/_/${longUrl}`).then(() => {
      toast.success('Copied to clipboard!');
    }).catch((err) => {
      console.error('Failed to copy: ', err);
      toast.error('Failed to copy to clipboard.');
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
