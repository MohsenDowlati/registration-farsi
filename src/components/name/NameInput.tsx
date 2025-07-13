import React from 'react';
import app from '@styles/app.module.css';
import styles from '@styles/name.module.css';

interface NameInputProps {
  text: string;
  // eslint-disable-next-line react/require-default-props
  isValid?: boolean;
  onChange: (value: string) => void;
}

// eslint-disable-next-line react/function-component-definition
const NameInput: React.FC<NameInputProps> = ({ text, isValid = true, onChange }) => {
  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value);
  }

  return (
    <div dir="rtl" className={`${app.textField} ${isValid ? app.textFieldOK : app.textFieldError}`}>
      <input
        placeholder={text}
        type="text"
        inputMode="text"
        className={styles.nameInput}
        onChange={handleInput}
      />
    </div>
  );
};

export default NameInput;
