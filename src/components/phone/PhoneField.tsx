import React from 'react';
import Text from '@/constants';
import style from '@/styles/phoneField.module.css';
import app from '@/styles/app.module.css';

// eslint-disable-next-line react/function-component-definition
const PhoneField: React.FC = () => {
  function handlePhone(e: React.ChangeEvent<HTMLInputElement>) {
    // eslint-disable-next-line no-console
    console.log(e.target.value);
  }

  return (
    <div className={app.textField}>
      <div className={`${style.preNumber} ${app.bgSecondary}`}>
        {Text.phone['register-phone-default-pre-number']}
      </div>
      <input
        className={style.phoneFieldContainer}
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
