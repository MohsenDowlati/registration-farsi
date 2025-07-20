import React from 'react';
import { ArrowLeftSvg } from '@/svg';
import app from '@/styles/app.module.css';
import { useRouter } from 'next/router';

// eslint-disable-next-line react/function-component-definition
const AcceptButton: React.FC<danamit.AcceptButtonProps> = ({ link, isOK }) => {
  const router = useRouter();
  const handleNavigation = () => {
    if (isOK) {
      router.push(link);
    }
  };
  return (
    <button
      className={`${app.nextBtn} ${isOK ? app.bgPrimary : app.bgError}`}
      onClick={handleNavigation}
      type="button"
    >
      <ArrowLeftSvg className="" />
    </button>
  );
};

export default AcceptButton;
