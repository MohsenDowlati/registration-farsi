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
  // eslint-disable-next-line react/require-default-props
  handleVisibility?: () => void;
}

// eslint-disable-next-line react/function-component-definition
const PasswordField: React.FC<PasswordInputProps> = ({
  text,
  isValid,
  onChange,
  isVisible: externalVisible,
  handleVisibility: externalToggle,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [internalVisible, setInternalVisible] = useState(false);
  const visible = externalVisible ?? internalVisible;
  const toggleVisibility = externalToggle ?? (() => setInternalVisible((v) => !v));

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value);
  }

  return (
    <div
      className={`${app.textField} ${isValid ? app.textFieldOK : app.textFieldError} my-[10px]`}
      dir={isSelected ? 'ltr' : 'rtl'}
    >
      <input
        placeholder={isSelected ? '' : text}
        type={visible ? 'text' : 'password'}
        inputMode="text"
        className={`${isSelected ? 'ml-4' : 'mr-4'} ${styles.passwordInput}`}
        onChange={handleInput}
        onClick={() => setIsSelected(true)}
      />
      {/* eslint-disable-next-line no-nested-ternary */}
      {!isSelected ? null : visible ? (
        <HideSvg onClick={toggleVisibility} className="mr-[10px]" />
      ) : (
        <UnhideSvg onClick={toggleVisibility} className="mr-[10px]" />
      )}
    </div>
  );
};

export default PasswordField;
