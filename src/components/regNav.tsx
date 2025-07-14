import React from 'react';
import Text from '@/constants';
import { ArrowRightSvg } from '@/svg';
import Style from '@/styles/regNav.module.css';
import { useRouter } from 'next/router';

interface RegNavProps {
  // eslint-disable-next-line react/require-default-props
  skip?: boolean;
  link: string;
  // eslint-disable-next-line react/require-default-props
  linkSkip?: string;
}

// eslint-disable-next-line react/function-component-definition
const RegNav: React.FC<RegNavProps> = ({ skip = false, link, linkSkip = '' }) => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(link);
  };

  const handleSkip = () => {
    router.push(linkSkip);
  };

  return (
    <nav className={`${skip ? Style.navContainerSkip : Style.navContainerOrdinary}`}>
      {skip && (
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
