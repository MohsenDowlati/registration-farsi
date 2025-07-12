import React from 'react';
import Text from '@/constants';
import { ArrowRightSvg } from '@/svg';
import Style from '@/styles/regNav.module.css';
import { useRouter } from 'next/router';

interface RegNavProps {
  // eslint-disable-next-line react/require-default-props
  skip?: boolean;
  link: string;
}

// eslint-disable-next-line react/function-component-definition
const RegNav: React.FC<RegNavProps> = ({ skip = false, link }) => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(link);
  };

  return (
    <nav className={Style.navContainer}>
      {skip ?? <p>{Text.navbar['navbar-skip']}</p>}

      <ArrowRightSvg className={Style.navBack} onClick={handleNavigation} />
    </nav>
  );
};

export default RegNav;
