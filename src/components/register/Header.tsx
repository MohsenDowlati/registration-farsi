import React from 'react';
import style from '@/styles/register.module.css';
import Text from '../../constants';

// eslint-disable-next-line react/function-component-definition
const Header: React.FC = () => {
  return (
    <div className={style.headerContainer}>
      <h1 className={style.headerTitle}>
        {Text.register['register-title-top']}
        <br />
        {Text.register['register-title-bottom']}
      </h1>
      <h3 className={style.headerDescription} dir="rtl">
        {Text.register['register-description']}
      </h3>
    </div>
  );
};

export default Header;
