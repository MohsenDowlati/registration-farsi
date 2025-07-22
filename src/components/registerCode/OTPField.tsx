import React, { useEffect, useRef, useState } from 'react';
import app from '@styles/app.module.css';
import style from '@styles/otp.module.css';

// eslint-disable-next-line react/function-component-definition
const OTPField: React.FC<danamit.OTPFieldProps> = ({ length = 6, isOkay = false, onComplete }) => {
  const [values, setValues] = useState<string[]>(Array(length).fill(''));
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
  const [isSelected, setIsSelected] = useState<boolean>(false);

  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, [length]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    // only digits
    const cleaned = e.target.value.replace(/\D/g, '');
    const digit = cleaned.charAt(cleaned.length - 1) || '';
    const next = [...values];
    next[idx] = digit;
    setValues(next);

    // move focus
    if (digit && idx < length - 1) {
      inputsRef.current[idx + 1]?.focus();
    }

    // completion
    if (next.every((c) => c !== '')) {
      onComplete?.(next.join(''));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
    const next = [...values];
    if (e.key === 'Backspace') {
      e.preventDefault();
      if (values[idx]) {
        // clear current
        next[idx] = '';
        setValues(next);
      } else if (idx > 0) {
        // move back and clear
        inputsRef.current[idx - 1]?.focus();
        next[idx - 1] = '';
        setValues(next);
      }
    } else if (e.key === 'ArrowLeft' && idx > 0) {
      inputsRef.current[idx - 1]?.focus();
    } else if (e.key === 'ArrowRight' && idx < length - 1) {
      inputsRef.current[idx + 1]?.focus();
    }
  };

  return (
    <div
      className={`flex items-center justify-center
        ${app.textField}
        ${isOkay || !isSelected ? app.textFieldOK : app.textFieldError}
      `}
    >
      {values.map((val, idx) => (
        <input
          key={`opt-${idx + 1}`}
          type="tel"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          className={style.otpInput}
          value={val}
          onChange={(e) => handleChange(e, idx)}
          onKeyDown={(e) => handleKeyDown(e, idx)}
          ref={(el) => (inputsRef.current[idx] = el)}
          placeholder="●"
          onFocus={() => setIsSelected(true)}
        />
      ))}
    </div>
  );
};

export default OTPField;
