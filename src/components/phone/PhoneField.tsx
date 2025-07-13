import React from 'react';
import Text from '@/constants';
import style from '@/styles/phoneField.module.css';
import app from '@/styles/app.module.css';

interface PhoneFieldProps {
  onChange: (newPhone: string) => void;
  isOK: boolean;
}

// eslint-disable-next-line react/function-component-definition
const PhoneField: React.FC<PhoneFieldProps> = ({ onChange, isOK }) => {
  function handlePhone(e: React.ChangeEvent<HTMLInputElement>) {
    // eslint-disable-next-line no-console
    onChange(e.target.value);
  }

  // maybe add isSelected method later
  return (
    <div className={`${app.textField} ${isOK ? app.textFieldOK : app.textFieldError}`}>
      <div className={`${style.preNumber} ${app.bgSecondary}`}>
        {Text.phone['register-phone-default-pre-number']}
      </div>
      <input
        className={`${style.phoneFieldContainer} ${
          isOK ? style.placeHolderOK : style.placeHolderError
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
