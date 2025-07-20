import React from 'react';
import Text from '@/constants';
import { ArrowRightSvg } from '@/svg';
import Style from '@/styles/regNav.module.css';
import { useRouter } from 'next/router';

// eslint-disable-next-line react/function-component-definition
const RegNav: React.FC<danamit.RegNavProps> = ({ link, linkSkip = '' }) => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(link);
  };

  const handleSkip = () => {
    router.push(linkSkip);
  };

  return (
    <nav className={`${linkSkip ? Style.navContainerSkip : Style.navContainerOrdinary}`}>
      {linkSkip && (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
        <p className={Style.navSkip} onClick={handleSkip}>
          {Text.navbar['navbar-skip']}
        </p>
      )}

      <ArrowRightSvg className={Style.navBack} onClick={handleNavigation} />
    </nav>
  );
};

export default RegNav;
