import React from 'react';
import { AcceptButton, OTPField, RegNav } from '@/components';
import registerNavigation from '@common/navigation';
import Texts from '@/constants';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { selectOTPIsOkay, setOTP } from '@/store/otpSlice';
import style from '@styles/otp.module.css';

// eslint-disable-next-line react/function-component-definition
const EntryCode: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isOkay = useSelector(selectOTPIsOkay);

  return (
    <section>
      <RegNav link={registerNavigation.register.Phone} />
      <h1 className={style.otpHeader} dir="rtl">
        {Texts.codeOTP['code-header']}{' '}
      </h1>
      <OTPField isOkay={isOkay} onComplete={(code) => dispatch(setOTP(code))} />
      <div dir="rtl" className={style.otpTextContainer}>
        <p className={style.otpText}>{Texts.codeOTP['code-sub']}</p>
        <p className={style.otpLink}>{Texts.codeOTP['code-sub-link']}</p>
      </div>
      <AcceptButton link={registerNavigation.register.Name} isOK={isOkay} />
    </section>
  );
};

export default EntryCode;
