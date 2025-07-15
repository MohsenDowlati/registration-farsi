import React from 'react';
import { AcceptButton, PasswordField, RegNav } from '@/components';
import RegisterNavigation from '@common/navigation';
import Text from '@/constants';

// eslint-disable-next-line react/function-component-definition
const Password: React.FC = () => {
  return (
    <section>
      <RegNav link={RegisterNavigation.Email} />
      <h1>{Text.password['password-header']}</h1>
      <h3>{Text.password['password-description']}</h3>
      <div>
        <PasswordField
          text={Text.password['password-input']}
          isValid
          onChange={() => {
            // eslint-disable-next-line no-console
            console.log(Text.password['password-input']);
          }}
        />
        <PasswordField
          text={Text.password['password-input-confirmation']}
          isValid
          onChange={() => {
            // eslint-disable-next-line no-console
            console.log(Text.password['password-input-confirmation']);
          }}
        />
        <div />
        <div />
        <div />
      </div>

      <AcceptButton link={RegisterNavigation.Password} isOK />
    </section>
  );
};

export default Password;
