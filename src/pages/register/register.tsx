import React from 'react';
import Text from '@/constants';
import btnStyle from '@styles/app.module.css';
import style from '@styles/register.module.css';
import { Button, Header } from '@components/index';
import Image from 'next/image';
import { useRouter } from 'next/router';

// eslint-disable-next-line react/function-component-definition
const Register: React.FC = () => {
  const router = useRouter();
  const signUp = () => {
    router.push('/register/phone');
  };

  const signIn = () => {
    // eslint-disable-next-line no-console
    console.log('SignIn');
  };

  return (
    <section className={style.containerLayout}>
      <Header />
      <Image className={style.imageContainer} src="" alt="" />
      <div>
        <Button text={Text.register['register-signup']} onClick={signUp} />
        <Button
          text={Text.register['register-login']}
          onClick={signIn}
          backgroundColor={btnStyle.bgSecondary}
        />
      </div>
    </section>
  );
};

export default Register;
