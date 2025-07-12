import React from 'react';
import { ArrowLeftSvg } from '@/svg';
import app from '@/styles/app.module.css';
import { useRouter } from 'next/router';

interface AcceptButtonProps {
  link: string;
  isOK: boolean;
}

// TODO: handle error

// eslint-disable-next-line react/function-component-definition
const AcceptButton: React.FC<AcceptButtonProps> = ({ link, isOK }) => {
  const router = useRouter();
  const handleNavigation = () => {
    router.push(link);
  };
  return (
    <div className={`${app.nextBtn} ${isOK ? app.bgPrimary : app.bgSecondary}`}>
      <ArrowLeftSvg onClick={handleNavigation} className="" />
    </div>
  );
};

export default AcceptButton;
