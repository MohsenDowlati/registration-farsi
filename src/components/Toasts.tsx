import { CrossSvg } from '@svg/index';
import styles from '@styles/Toasts.module.css';

function Toasts({ message, setToast, toast, type }: cat.Toaster): JSX.Element {
  const handleClose = () => {
    setToast(false);
  };

  const danger = (
    <div className={`${styles.container} ${toast ? 'opacity-100' : 'opacity-0'}`}>
      <div className={styles.alertIcon}>
        <CrossSvg className="w-5 h-5" />
        <span className="sr-only">Error icon</span>
      </div>
      <div className={styles.content}>{message}</div>
      <button onClick={handleClose} type="button" className={styles.closeBtn}>
        <span className="sr-only">Close</span>
        <CrossSvg className="w-5 h-5" />
      </button>
    </div>
  );

  return <span>{toast && type === 'danger-toast' ? danger : null}</span>;
}

export default Toasts;
