import React, { useEffect } from 'react';
import { AcceptButton, GoogleLogin, PhoneField, RegNav } from '@/components';
import Text from '@/constants';
import style from '@/styles/phone.module.css';
import registerNavigation from '@/common/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { selectPhoneOK, selectPhoneValue, setPhone } from '@/store/phoneSlice';

// eslint-disable-next-line react/function-component-definition
const Phone: React.FC = () => {
  const dispatch = useDispatch();
  const phone = useSelector(selectPhoneValue);
  const isOK = useSelector(selectPhoneOK);

  useEffect(() => {}, [phone, isOK]);

  return (
    <section>
      <RegNav link={registerNavigation.Home} />
      <h1 className={style.headerPhone} dir="rtl">
        {Text.phone['register-phone-header']}
      </h1>
      <PhoneField onChange={(val) => dispatch(setPhone(val))} isOK={isOK} />
      <div>
        <p className={style.acceptTerms} dir="rtl">
          با ادامه دادن این مرحله، شما با شرایط استفاده و سیاست حفظ حریم خصوصی ما موافقت می‌کنید.
        </p>
      </div>
      <GoogleLogin />
      <AcceptButton link={registerNavigation.EntryCode} isOK={isOK} />
    </section>
  );
};

export default Phone;
