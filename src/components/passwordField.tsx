import React, { useState } from 'react';
import app from '@styles/app.module.css';
import styles from '@styles/name.module.css';
import { HideSvg, UnhideSvg } from '@/svg';

interface NameInputProps {
  text: string;
  // eslint-disable-next-line react/require-default-props
  isValid: boolean;
  // eslint-disable-next-line react/require-default-props
  isVisible?: boolean;
  onChange: (value: string) => void;
}

// eslint-disable-next-line react/function-component-definition
const NameInput: React.FC<NameInputProps> = ({ text, isValid, onChange, isVisible = false }) => {
  const [isSelected, setIsSelected] = useState(false);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value);
  }

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      dir={isSelected ? 'rtl' : 'ltr'}
      className={`${app.textField} ${isValid ? app.textFieldOK : app.textFieldError}`}
      onClick={() => setIsSelected(true)}
    >
      <input
        placeholder={text}
        type={isVisible ? 'text' : 'password'}
        inputMode="text"
        className={`ms-4 ${styles.nameInput}`}
        onChange={handleInput}
      />
      {isSelected && isVisible ? <HideSvg /> : <UnhideSvg />}
    </div>
  );
};

export default NameInput;
