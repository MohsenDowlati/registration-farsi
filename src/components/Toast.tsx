import {
  CrossSvg,
  ErrorToastSvg,
  WarningToastSvg,
  InfoToastSvg,
  ConfirmToastSvg,
} from '@svg/index';
import styles from '@styles/toast.module.css';
import toaster from '@common/toastType';

interface ToastsProps {
  message: string;
  setToast: (toast: boolean) => void;
  toast: boolean;
  type: string;
}

function Toast({ message, setToast, toast, type }: ToastsProps): JSX.Element {
  const handleClose = () => {
    setToast(false);
  };

  const danger = (
    <div
      className={`${styles.container} ${styles.containerError} ${
        toast ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <button onClick={handleClose} type="button" className={styles.closeBtn}>
        <span className="sr-only">Close</span>
        <CrossSvg className={styles.closeBtnError} />
      </button>
      <div className={styles.content}>{message}</div>
      <div className={styles.alertIcon}>
        <ErrorToastSvg className="w-5 h-5" />
      </div>
    </div>
  );

  const confirm = (
    <div
      className={`${styles.container} ${styles.containerConfirm} ${
        toast ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <button onClick={handleClose} type="button" className={styles.closeBtn}>
        <span className="sr-only">Close</span>
        <CrossSvg className={styles.closeBtnConfirm} />
      </button>
      <div className={styles.content}>{message}</div>
      <div className={styles.alertIcon}>
        <ConfirmToastSvg className="w-5 h-5" />
      </div>
    </div>
  );

  const info = (
    <div
      className={`${styles.container} ${styles.containerInfo} ${
        toast ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <button onClick={handleClose} type="button" className={styles.closeBtn}>
        <span className="sr-only">Close</span>
        <CrossSvg className={styles.closeBtnInfo} />
      </button>
      <div className={styles.content}>{message}</div>
      <div className={styles.alertIcon}>
        <InfoToastSvg className="w-5 h-5" />
      </div>
    </div>
  );

  const warning = (
    <div
      className={`${styles.container} ${styles.containerWarning} ${
        toast ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <button onClick={handleClose} type="button" className={styles.closeBtn}>
        <span className="sr-only">Close</span>
        <CrossSvg className={styles.closeBtnWarning} />
      </button>
      <div className={styles.content}>{message}</div>
      <div className={styles.alertIcon}>
        <WarningToastSvg className="w-5 h-5" />
      </div>
    </div>
  );

  return (
    <span>
      {/* eslint-disable-next-line no-nested-ternary */}
      {toast
        ? // eslint-disable-next-line no-nested-ternary
          type === toaster.danger
          ? danger
          : // eslint-disable-next-line no-nested-ternary
          type === toaster.warning
          ? warning
          : // eslint-disable-next-line no-nested-ternary
          type === toaster.info
          ? info
          : type === toaster.confirm
          ? confirm
          : null
        : null}
    </span>
  );
}

export default Toast;
