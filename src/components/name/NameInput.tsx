import React, { useState } from 'react';
import app from '@styles/app.module.css';
import styles from '@styles/name.module.css';

interface NameInputProps {
  text: string;
  // eslint-disable-next-line react/require-default-props
  isValid?: boolean;
  onChange: (value: string) => void;
  // eslint-disable-next-line react/require-default-props
  ltr?: boolean;
}

// eslint-disable-next-line react/function-component-definition
const NameInput: React.FC<NameInputProps> = ({ text, isValid = true, onChange, ltr = false }) => {
  const [isSelected, setIsSelected] = useState(false);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value);
  }

  return (
    <div
      dir={ltr ? 'ltr' : 'rtl'}
      className={`${app.textField} ${
        isValid || !isSelected ? app.textFieldOK : app.textFieldError
      }`}
    >
      <input
        placeholder={text}
        type="text"
        inputMode="text"
        className={`${!ltr ? 'mr-4' : 'ml-4'} ${styles.nameInput}`}
        onChange={handleInput}
        onClick={() => setIsSelected(true)}
      />
    </div>
  );
};

export default NameInput;
