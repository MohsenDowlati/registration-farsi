import app from '@/styles/app.module.css';
import styles from '@/styles/button.module.css';
import React from 'react';

// eslint-disable-next-line react/function-component-definition
const Button: React.FC<danamit.BtnProps> = ({ text, onClick, backgroundColor = app.bgPrimary }) => {
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
