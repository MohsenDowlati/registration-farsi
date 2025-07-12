import React from 'react';
import { AcceptButton, GoogleLogin, PhoneField, RegNav } from '@/components';
import Text from '@/constants';
import style from '@/styles/phone.module.css';
import registerNavigation from '@/common/navigation';

// eslint-disable-next-line react/function-component-definition
const Phone: React.FC = () => {
  return (
    <section>
      <RegNav link={registerNavigation.Home} />
      <h1 className={style.headerPhone} dir="rtl">
        {Text.phone['register-phone-header']}
      </h1>
      <PhoneField />
      <div>
        <p className={style.acceptTerms} dir="rtl">
          با ادامه دادن این مرحله، شما با شرایط استفاده و سیاست حفظ حریم خصوصی ما موافقت می‌کنید.
        </p>
      </div>
      <GoogleLogin />
      <AcceptButton link="" isOK />
    </section>
  );
};

export default Phone;
