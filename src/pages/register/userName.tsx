import React from 'react';
import Text from '@/constants';
import { AcceptButton, RegNav } from '@/components';
import style from '@styles/name.module.css';
import RegisterNavigation from '@/common/navigation';

// eslint-disable-next-line react/function-component-definition
const UserName: React.FC = () => {
  return (
    <section>
      <RegNav link={RegisterNavigation.Name} />
      <h1 className={style.userNameHeader}>{Text.Username['username-header']}</h1>
      <h3 className={style.userNameUsername}>{Text.Username['username-username']}</h3>
      <h5 className={style.userNameAgain}>{Text.Username['username-another']}</h5>
      <AcceptButton link={RegisterNavigation.Age} isOK />
    </section>
  );
};

export default UserName;
