import React, { useEffect } from 'react';
import { RegNav, Interval, AcceptButton } from '@/components';
import RegisterNavigation from '@common/navigation';
import Text from '@/constants';
import style from '@styles/age.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectAge, selectAgeOK, setAge } from '@/store/ageSlice';

// eslint-disable-next-line react/function-component-definition
const Age: React.FC = () => {
  const dispatch = useDispatch();
  const isOK = useSelector(selectAgeOK);
  const age = useSelector(selectAge);

  useEffect(() => {}, [age, isOK]);
  const handleAge = (val: string) => {
    dispatch(setAge(val));
  };
  return (
    <section>
      <RegNav link={RegisterNavigation.register.Username} />
      <h1 dir="rtl" className={style.ageHeader}>
        {Text.age['age-header']}
      </h1>
      <Interval
        min={7}
        max={60}
        step={3}
        onChange={handleAge}
        initialText={Text.age['age-initial-text']}
      />
      <h2 dir="rtl" className={style.ageDescription}>
        {Text.age['age-description']}
      </h2>
      <AcceptButton link={RegisterNavigation.register.Photo} isOK={isOK} />
    </section>
  );
};

export default Age;
