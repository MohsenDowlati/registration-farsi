import React, { useState } from 'react';
import app from '@styles/app.module.css';
import styles from '@styles/name.module.css';

interface EmailFieldProps {
  text: string;
  // eslint-disable-next-line react/require-default-props
  isValid?: boolean;
  onChange: (value: string) => void;
}

// eslint-disable-next-line react/function-component-definition
const EmailField: React.FC<EmailFieldProps> = ({ text, isValid = true, onChange }) => {
  const [isSelected, setIsSelected] = useState(false);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value);
  }

  return (
    <div
      className={`${app.textField} ${
        isValid || !isSelected ? app.textFieldOK : app.textFieldError
      }`}
    >
      <input
        placeholder={text}
        type="text"
        inputMode="text"
        className={`ml-4 ${styles.nameInput}`}
        onChange={handleInput}
        onClick={() => setIsSelected(true)}
      />
    </div>
  );
};

export default EmailField;
