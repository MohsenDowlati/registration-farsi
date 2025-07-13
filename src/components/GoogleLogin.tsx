import React from 'react';
import Text from '@/constants';
import style from '@/styles/google.module.css';
import app from '@/styles/app.module.css';
import { SocialSvg } from '@/svg';

// eslint-disable-next-line react/function-component-definition
const GoogleLogin: React.FC = () => {
  return (
    <div>
      <div className={style.googleAuthContainer}>
        <div className={style.googleAuthSplitter} />
        <p className={style.googleAuthOr}>{Text.google['google-header']}</p>
        <div className={style.googleAuthSplitter} />
      </div>
      <div className={`${app.textField} flex justify-center items-center border-[#4C4C4C]`}>
        <p dir="rtl" className={style.googleAuthText}>
          {Text.google['google-auth']}
        </p>
        <SocialSvg />
      </div>
    </div>
  );
};

export default GoogleLogin;
