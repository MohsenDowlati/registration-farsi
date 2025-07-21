import React from 'react';
import { AcceptButton, NameInput, RegNav } from '@/components';
import { RegisterNavigation } from '@common/navigation';
import Texts from '@/constants';
import style from '@styles/name.module.css';

// eslint-disable-next-line react/function-component-definition
const Name: React.FC = () => {
  const handleFirstName = (name: string) => {
    // eslint-disable-next-line no-console
    console.log(name);
  };

  const handleLastName = (name: string) => {
    // eslint-disable-next-line no-console
    console.log(name);
  };

  const handleNickName = (name: string) => {
    // eslint-disable-next-line no-console
    console.log(name);
  };

  return (
    <section>
      <RegNav link={RegisterNavigation.register.Phone} />
      <h1 className={style.nameHeader}>{Texts.Name['name-header']}</h1>
      <div className={style.inputsContainer}>
        <NameInput
          text={Texts.Name['name-input-first-name']}
          onChange={(name) => handleFirstName(name)}
        />
        <NameInput
          text={Texts.Name['name-input-last-name']}
          onChange={(name) => handleLastName(name)}
        />
        <h2 className={style.nameUserHeader} dir="rtl">
          {Texts.Name['name-user-name-header']}
        </h2>
        <NameInput
          text={Texts.Name['name-input-nick-name']}
          onChange={(name) => handleNickName(name)}
        />
      </div>

      <AcceptButton link={RegisterNavigation.register.Username} isOK />
    </section>
  );
};

export default Name;
