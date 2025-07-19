'use client';

import React, { useEffect, useRef, useState } from 'react';
import app from '@styles/app.module.css';
import style from '@styles/otp.module.css';

interface OTPFieldProps {
  // eslint-disable-next-line react/require-default-props
  length?: number;
  isOkay: boolean;
  onComplete: (code: string) => void;
}

// eslint-disable-next-line react/function-component-definition
const OTPField: React.FC<OTPFieldProps> = ({ length = 6, isOkay, onComplete }) => {
  const [values, setValues] = useState<string[]>(Array(length).fill(''));
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const [isSelected, setIsSelected] = useState<boolean>(false);

  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const char = e.target.value.replace(/\D/, '');
    if (!char) return;

    const next = [...values];
    next[idx] = char;
    setValues(next);

    if (idx < length - 1) {
      inputsRef.current[idx + 1]?.focus();
    }

    if (next.every((c) => c !== '')) {
      onComplete?.(next.join(''));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
    if (e.key === 'Backspace' && !values[idx] && idx > 0) {
      inputsRef.current[idx - 1]?.focus();
    }
  };

  const handleRef = (e: HTMLInputElement | null, i: number) => {
    inputsRef.current[i] = e;
  };

  return (
    <div
      className={`flex items-center justify-center
        ${app.textField}
        ${isOkay || !isSelected ? app.textFieldOK : app.textFieldError}
      `}
    >
      {values.map((val, i) => (
        <input
          key={`${i + 1}-input`}
          type="text"
          inputMode="numeric"
          maxLength={1}
          className={style.otpInput}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          ref={(el) => handleRef(el, i)}
          placeholder="●"
          onClick={() => setIsSelected(true)}
        />
      ))}
    </div>
  );
};

export default OTPField;
