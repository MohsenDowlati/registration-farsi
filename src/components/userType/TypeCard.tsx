import React from 'react';
import style from '@styles/userType.module.css';

// eslint-disable-next-line react/function-component-definition
const TypeCard: React.FC<danamit.TypeCardProps> = ({ text, color, onClick }) => {
  return (
    <button className={`${style.typeCard} ${color}`} type="button" onClick={onClick}>
      <p className={style.typeCardText}>{text}</p>
    </button>
  );
};

export default TypeCard;
