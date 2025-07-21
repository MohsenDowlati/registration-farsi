import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { bottomNavigation } from '@common/navigation';
import styles from '@styles/bottomNav.module.css';

// eslint-disable-next-line react/function-component-definition
const BottomNav: React.FC = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <nav className={styles.navigation}>
        <div className={styles.navBox}>
          {bottomNavigation.map((links) => (
            <Link
              key={links.id}
              href={links.href}
              className={`${styles.link} ${
                router.pathname === links.href ? styles.primary : styles.secondary
              }`}
            >
              {links.icon}
              <span className={styles.linkName}>{links.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default BottomNav;
