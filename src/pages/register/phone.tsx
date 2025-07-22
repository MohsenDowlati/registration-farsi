import React, { useEffect, useState } from 'react';
import { AcceptButton, GoogleLogin, PhoneField, RegNav } from '@/components';
import Text from '@/constants';
import style from '@/styles/phone.module.css';
import { RegisterNavigation } from '@/common/navigation';
import toaster from '@common/toastType';
import { useDispatch, useSelector } from 'react-redux';
import { selectPhoneOK, selectPhoneValue, setPhone } from '@/store/phoneSlice';
import Toast from '@components/Toast';
import { postOTP } from '@services/auth/OTP';
import axios from 'axios';

// eslint-disable-next-line react/function-component-definition
const Phone: React.FC = () => {
  const dispatch = useDispatch();
  const phone = useSelector(selectPhoneValue);
  const isOK = useSelector(selectPhoneOK);

  const [needToast, setNeedToast] = useState(false);
  const [message, setMessage] = useState('');
  const [toasterType, setToasterType] = useState('');

  const handleOTP = async (): Promise<boolean> => {
    const payload = { phoneNumber: phone, purpose: 'registration' };
    try {
      const { status } = await postOTP(payload);
      if (status === 200) {
        return true;
      }
    } catch (error: unknown) {
      let msg: string;
      if (axios.isAxiosError(error)) {
        msg = (error.response?.data as { message?: string })?.message || error.message;
      } else if (error instanceof Error) {
        msg = error.message;
      } else {
        msg = String(error);
      }
      setMessage(msg);
      setToasterType(toaster.danger);
      setNeedToast(true);
    }
    return false;
  };

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
      <AcceptButton
        link={RegisterNavigation.register.EntryCode}
        isOK={isOK}
        handleAPI={handleOTP}
      />
      <Toast message={message} setToast={setNeedToast} toast={needToast} type={toasterType} />
    </section>
  );
};

export default Phone;
