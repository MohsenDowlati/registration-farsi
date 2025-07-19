import React, { useState } from 'react';
import Text from '@/constants';
import style from '@/styles/phoneField.module.css';
import app from '@/styles/app.module.css';

interface PhoneFieldProps {
  onChange: (newPhone: string) => void;
  isOK: boolean;
}

// eslint-disable-next-line react/function-component-definition
const PhoneField: React.FC<PhoneFieldProps> = ({ onChange, isOK }) => {
  const [isSelected, setSelected] = useState(false);

  function handlePhone(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value);
  }

  // maybe add isSelected method later
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      className={`${app.textField} ${isOK || !isSelected ? app.textFieldOK : app.textFieldError}`}
      onClick={() => setSelected(true)}
    >
      <div className={`${style.preNumber} ${app.bgSecondary}`}>
        {Text.phone['register-phone-default-pre-number']}
      </div>
      <input
        className={`${style.phoneFieldContainer} ${
          isOK || !isSelected ? style.placeHolderOK : style.placeHolderError
        }`}
        type="tel"
        pattern="[0-9]*"
        inputMode="numeric"
        onChange={handlePhone}
        placeholder={Text.phone['register-phone-default-number']}
        required
      />
    </div>
  );
};

export default PhoneField;
