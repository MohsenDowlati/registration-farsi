import React from 'react';
import { AcceptButton, NameInput, RegNav } from '@/components';
import style from '@styles/name.module.css';
import RegisterNavigation from '@/common/navigation';
import Texts from '@/constants';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/store/store';
import {
  selectIsValidUsername,
  selectWarn1,
  selectWarn2,
  selectWarn3,
  setUsername,
} from '@/store/usernameSlice';

// eslint-disable-next-line react/function-component-definition
const UserName: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isValid = useSelector(selectIsValidUsername);
  const warn1 = useSelector(selectWarn1);
  const warn2 = useSelector(selectWarn2);
  const warn3 = useSelector(selectWarn3);

  const [isSelected, setIsSelected] = React.useState(false);

  return (
    <section>
      <RegNav link={RegisterNavigation.register.Name} />
      <h1 className={style.userNameHeader}>{Texts.Username['username-header']}</h1>
      <div className="relative w-full h-[260px]">
        <div
          className={`${style.inputsContainer} absolute left-1/2 top-1/2
          transform -translate-x-1/2 -translate-y-1/2
          z-10`}
        >
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div className="p-0 z-10" onClick={() => setIsSelected(true)}>
            <NameInput
              text={Texts.Name['name-input-user-name']}
              isValid={isValid}
              onChange={(val) => dispatch(setUsername(val))}
              ltr
            />
          </div>
          {isSelected && (
            <div
              className={`${style.warningContainer} ${
                isValid ? style.warningContainerOK : style.warningContainerERROR
              }`}
              dir="rtl"
            >
              <p
                className={`${style.warningText} ${
                  warn1 ? style.warningTextOK : style.warningTextERROR
                } mt-[27px]`}
              >
                {Texts.Name['name-warning1']}
              </p>
              <p
                className={`${style.warningText} ${
                  warn2 ? style.warningTextOK : style.warningTextERROR
                }`}
              >
                {Texts.Name['name-warning2']}
              </p>
              <p
                className={`${style.warningText} ${
                  warn3 ? style.warningTextOK : style.warningTextERROR
                }`}
              >
                {Texts.Name['name-warning3']}
              </p>
            </div>
          )}
        </div>
      </div>
      <AcceptButton link={RegisterNavigation.register.Age} isOK={isValid} />
    </section>
  );
};

export default UserName;
