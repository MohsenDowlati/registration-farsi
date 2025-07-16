import React from 'react';
import { AcceptButton, GoogleLogin, PasswordField, PhoneField, RegNav } from '@/components';
import text from '@/constants';
import RegisterNavigation from '@common/navigation';
import style from '@styles/login.module.css';

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
      />
      <div className={style.loginSubButtonContainer}>
        <p dir="rtl" className={style.loginSubButton}>
          {text.login['login-forget-password']}
        </p>
        <p dir="rtl" className={style.loginSubButton}>
          {text.login['login-otp']}
        </p>
      </div>
      <GoogleLogin />
      <AcceptButton link={RegisterNavigation.login.Login} isOK />
    </section>
  );
};

export default Login;
