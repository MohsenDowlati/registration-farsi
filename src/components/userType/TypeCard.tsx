import React from 'react';
import style from '@styles/userType.module.css';
import RegisterNavigation from '@common/navigation';
import { useRouter } from 'next/router';

interface TypeCardProps {
  text: string;
  color: string;
}

// eslint-disable-next-line react/function-component-definition
const TypeCard: React.FC<TypeCardProps> = ({ text, color }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(RegisterNavigation.register.Topics);
  };

  return (
    <button className={`${style.typeCard} ${color}`} type="button" onClick={handleClick}>
      <p className={style.typeCardText}>{text}</p>
    </button>
  );
};

export default TypeCard;
