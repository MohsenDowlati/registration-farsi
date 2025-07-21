import React from 'react';
import { AcceptButton, GoogleLogin, PasswordField, PhoneField, RegNav } from '@/components';
import text from '@/constants';
import { RegisterNavigation } from '@common/navigation';
import style from '@styles/login.module.css';
import Link from 'next/link';

// eslint-disable-next-line react/function-component-definition
const Login: React.FC = () => {
  return (
    <section>
      <RegNav link={RegisterNavigation.register.Home} />
      <h1 dir="rtl" className={style.loginHeader}>
        {text.login['login-header']}
      </h1>
      <PhoneField
        onChange={() => {
          // eslint-disable-next-line no-console
          console.log('l');
        }}
        isOK
      />
      <PasswordField
        text={text.login['login-password']}
        onChange={() => {
          // eslint-disable-next-line no-console
          console.log('s');
        }}
        isValid
        isVisible={false}
      />
      <div className={style.loginSubButtonContainer}>
        <p dir="rtl" className={style.loginSubButton}>
          <Link href={RegisterNavigation.login.Password}>
            {text.login['login-forget-password']}
          </Link>
        </p>
        <p dir="rtl" className={style.loginSubButton}>
          <Link href={RegisterNavigation.login.OTP}>{text.login['login-otp']}</Link>
        </p>
      </div>
      <GoogleLogin />
      <AcceptButton link={RegisterNavigation.login.Login} isOK />
    </section>
  );
};

export default Login;
