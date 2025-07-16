import React from 'react';
import { AcceptButton, PhotoHolder, RegNav } from '@/components';
import RegisterNavigation from '@common/navigation';
import Text from '@/constants';
import style from '@styles/photo.module.css';

// eslint-disable-next-line react/function-component-definition
const Photo: React.FC = () => {
  return (
    <section>
      <RegNav
        link={RegisterNavigation.register.Age}
        skip
        linkSkip={RegisterNavigation.register.UserType}
      />
      <h1 className={style.photoHeader} dir="rtl">
        {Text.photo['photo-header']}
      </h1>
      <PhotoHolder />
      <AcceptButton link={RegisterNavigation.register.UserType} isOK />
    </section>
  );
};

export default Photo;
