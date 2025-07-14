import React from 'react';
import style from '@styles/userType.module.css';

interface TypeCardProps {
  text: string;
  color: string;
}

// eslint-disable-next-line react/function-component-definition
const TypeCard: React.FC<TypeCardProps> = ({ text, color }) => {
  return (
    <div className={`${style.typeCard} ${color}`}>
      <p className={style.typeCardText}>{text}</p>
    </div>
  );
};

export default TypeCard;
