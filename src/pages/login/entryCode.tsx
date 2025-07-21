import React from 'react';
import { AcceptButton, OTPField, RegNav } from '@/components';
import { registerNavigation } from '@common/navigation';
import Texts from '@/constants';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { selectOTPIsOkay, setOTP } from '@/store/otpSlice';
import style from '@styles/otp.module.css';

// eslint-disable-next-line react/function-component-definition
const EntryCode: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isOkay = useSelector(selectOTPIsOkay);

  const resendCode = () => {
    // eslint-disable-next-line no-console
    console.log('resendCode');
  };

  return (
    <section>
      <RegNav link={registerNavigation.login.Login} />
      <h1 className={style.otpHeader} dir="rtl">
        {Texts.codeOTP['code-header']}{' '}
      </h1>
      <OTPField isOkay={isOkay} onComplete={(code) => dispatch(setOTP(code))} />
      <div dir="rtl" className={style.otpTextContainer}>
        <p className={style.otpText}>{Texts.codeOTP['code-sub']}</p>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
        <p className={style.otpLink} onClick={resendCode}>
          {Texts.codeOTP['code-sub-link']}
        </p>
      </div>
      <AcceptButton link={registerNavigation.boarding.Boarding} isOK={isOkay} />
    </section>
  );
};

export default EntryCode;
