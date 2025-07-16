import app from '@/styles/app.module.css';
import styles from '@/styles/button.module.css';

// eslint-disable-next-line @typescript-eslint/naming-convention
interface btnProps {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  backgroundColor?: string;
}

// eslint-disable-next-line react/function-component-definition
const Button: React.FC<btnProps> = ({ text, onClick, backgroundColor = app.bgPrimary }) => {
  return (
    <button
      className={`${styles.btn_main} ${backgroundColor}`}
      onClick={onClick}
      type="button"
      dir="rtl"
    >
      {text}
    </button>
  );
};

export default Button;
