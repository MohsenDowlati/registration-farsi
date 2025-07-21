import React from 'react';
import { AcceptButton, EmailField, RegNav } from '@/components';
import { RegisterNavigation } from '@common/navigation';
import Text from '@/constants';
import { useDispatch, useSelector } from 'react-redux';
import { selectEmailOK, setEmail } from '@/store/emailSlice';
import style from '@styles/topic.module.css';

// eslint-disable-next-line react/function-component-definition
const Email: React.FC = () => {
  const dispatch = useDispatch();
  // const email = useSelector(selectEmail);
  const isOK = useSelector(selectEmailOK);

  return (
    <section>
      <RegNav
        link={RegisterNavigation.register.Topics}
        linkSkip={RegisterNavigation.register.Password}
      />
      <h1 className={style.topicHeader}>{Text.email['email-header']}</h1>
      <h3 className={style.topicDescription} style={{ whiteSpace: 'pre-line' }} dir="rtl">
        {Text.email['email-description']}
      </h3>
      <EmailField
        text={Text.email['email-input']}
        onChange={(val) => dispatch(setEmail(val))}
        isValid={isOK}
      />
      <AcceptButton link={RegisterNavigation.register.Password} isOK={isOK} />
    </section>
  );
};

export default Email;
