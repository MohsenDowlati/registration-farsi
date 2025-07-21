import React, { useEffect, useState } from 'react';
import { AcceptButton, PasswordField, RegNav } from '@/components';
import { RegisterNavigation } from '@common/navigation';
import Text from '@/constants';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsPassOK,
  selectIsVisible,
  selectPasswordConfirmOK,
  selectWarn1,
  selectWarn2,
  selectWarn3,
  selectWarn4,
  setPassword,
  setPasswordConfirm,
  setVisible,
} from '@/store/passwordSlice';
import { WarningSvg, ErrorSvg, ConfirmSvg } from '@/svg';
import style from '@styles/password.module.css';

// eslint-disable-next-line react/function-component-definition
const Password: React.FC = () => {
  const [isSelected, setIsSelected] = useState(false);

  const dispatch = useDispatch();
  const isPassOK = useSelector(selectIsPassOK);
  const isPassConfirmOK = useSelector(selectPasswordConfirmOK);
  const warn1 = useSelector(selectWarn1);
  const warn2 = useSelector(selectWarn2);
  const warn3 = useSelector(selectWarn3);
  const warn4 = useSelector(selectWarn4);
  const visible = useSelector(selectIsVisible);

  useEffect(() => {}, [isSelected]);

  return (
    <section>
      <RegNav link={RegisterNavigation.login.Login} />
      <h1 className={style.passwordHeader} dir="rtl">
        {Text.password['password-header-again']}
      </h1>
      <h3 className={style.passwordDescription} dir="rtl">
        {Text.password['password-description']}
      </h3>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div onClick={() => setIsSelected(true)}>
        <PasswordField
          text={Text.password['password-input']}
          isValid={isPassOK}
          onChange={(val) => dispatch(setPassword(val))}
          handleVisibility={() => dispatch(setVisible(!visible))}
          isVisible={visible}
        />
        <PasswordField
          text={Text.password['password-input-confirmation']}
          isValid={isPassConfirmOK}
          onChange={(val) => dispatch(setPasswordConfirm(val))}
          handleVisibility={() => dispatch(setVisible(!visible))}
          isVisible={visible}
        />
        <div dir="rtl">
          <div className={style.passwordWarningHolder}>
            {/* eslint-disable-next-line no-nested-ternary */}
            {!isSelected ? <WarningSvg /> : warn1 ? <ConfirmSvg /> : <ErrorSvg />}
            <p className={style.passwordWarning}>{Text.password['password-warn1']}</p>
          </div>
          <div className={style.passwordWarningHolder}>
            {/* eslint-disable-next-line no-nested-ternary */}
            {!isSelected ? <WarningSvg /> : warn2 ? <ConfirmSvg /> : <ErrorSvg />}
            <p className={style.passwordWarning}>{Text.password['password-warn2']}</p>
          </div>
          <div className={style.passwordWarningHolder}>
            {/* eslint-disable-next-line no-nested-ternary */}
            {!isSelected ? <WarningSvg /> : warn3 ? <ConfirmSvg /> : <ErrorSvg />}
            <p className={style.passwordWarning}>{Text.password['password-warn3']}</p>
          </div>
          <div className={style.passwordWarningHolder}>
            {/* eslint-disable-next-line no-nested-ternary */}
            {!isSelected ? <WarningSvg /> : warn4 ? <ConfirmSvg /> : <ErrorSvg />}
            <p className={style.passwordWarning}>{Text.password['password-warn4']}</p>
          </div>
        </div>
      </div>

      <AcceptButton link={RegisterNavigation.boarding.Boarding} isOK={isPassConfirmOK} />
    </section>
  );
};

export default Password;
