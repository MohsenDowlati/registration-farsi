import React, { useEffect, useState } from 'react';
import { AcceptButton, GoogleLogin, PhoneField, RegNav } from '@/components';
import Text from '@/constants';
import style from '@/styles/phone.module.css';
import { RegisterNavigation } from '@/common/navigation';
import toaster from '@common/toastType';
import { useDispatch, useSelector } from 'react-redux';
import { selectPhoneOK, selectPhoneValue, setPhone } from '@/store/phoneSlice';
import Toast from '@components/Toast';

// eslint-disable-next-line react/function-component-definition
const Phone: React.FC = () => {
  const dispatch = useDispatch();
  const phone = useSelector(selectPhoneValue);
  const isOK = useSelector(selectPhoneOK);

  const [needToast, setNeedToast] = useState(false);

  useEffect(() => {}, [phone, isOK]);

  return (
    <section>
      <RegNav link={RegisterNavigation.register.Home} />
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
      <AcceptButton link={RegisterNavigation.register.EntryCode} isOK={isOK} />
      <Toast message="" setToast={setNeedToast} toast={needToast} type={toaster.info} />
    </section>
  );
};

export default Phone;
