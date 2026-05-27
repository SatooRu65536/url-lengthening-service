import classNames from 'classnames';
import styles from './index.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button {...props} className={classNames(className, styles.button)}>
      {children}
    </button>
  );
}
