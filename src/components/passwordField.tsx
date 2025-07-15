import React, { useState } from 'react';
import app from '@styles/app.module.css';
import styles from '@styles/password.module.css';
import { HideSvg, UnhideSvg } from '@/svg';

interface PasswordInputProps {
  text: string;
  // eslint-disable-next-line react/require-default-props
  isValid: boolean;
  // eslint-disable-next-line react/require-default-props
  isVisible?: boolean;
  onChange: (value: string) => void;
  handleVisibility: () => void;
}

// eslint-disable-next-line react/function-component-definition
const PasswordField: React.FC<PasswordInputProps> = ({
  text,
  isValid,
  onChange,
  isVisible = false,
  handleVisibility,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value);
  }

  return (
    <div className={`${app.textField} ${isValid ? app.textFieldOK : app.textFieldError} my-[10px]`}>
      <input
        placeholder={isSelected ? '' : text}
        dir={isSelected ? 'ltr' : 'rtl'}
        type={isVisible ? 'text' : 'password'}
        inputMode="text"
        className={`${isSelected ? 'ml-4' : 'mr-4'} ${styles.passwordInput}`}
        onChange={handleInput}
        onClick={() => setIsSelected(true)}
      />
      {/* eslint-disable-next-line no-nested-ternary */}
      {!isSelected ? null : isVisible ? (
        <HideSvg onClick={handleVisibility} className="mr-[10px]" />
      ) : (
        <UnhideSvg onClick={handleVisibility} className="mr-[10px]" />
      )}
    </div>
  );
};

export default PasswordField;
