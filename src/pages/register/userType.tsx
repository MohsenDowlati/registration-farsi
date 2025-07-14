import React from 'react';
import { AcceptButton, RegNav, TypeCard } from '@/components';
import text from '@/constants';
import style from '@styles/userType.module.css';
import RegisterNavigation from '@common/navigation';

// eslint-disable-next-line react/function-component-definition
const UserType: React.FC = () => {
  // TODO: user type
  const colors = {
    green: 'bg-[#0EB55B]',
    red: 'bg-[#E60C31]',
    pumpkin: 'bg-[#ED7D3A]',
    blue: 'bg-[#0061FF]',
  };

  return (
    <section>
      <RegNav link={RegisterNavigation.Photo} />
      <h1 className={style.typeHeader} dir="rtl">
        {text.userType['type-header']}
      </h1>
      <div className={style.typeCardsContainer}>
        <TypeCard text={text.userType['type-type1']} color={colors.green} />
        <TypeCard text={text.userType['type-type2']} color={colors.red} />
        <TypeCard text={text.userType['type-type3']} color={colors.pumpkin} />
        <TypeCard text={text.userType['type-type3']} color={colors.blue} />
      </div>
      <AcceptButton link={RegisterNavigation.Topics} isOK />
    </section>
  );
};

export default UserType;
