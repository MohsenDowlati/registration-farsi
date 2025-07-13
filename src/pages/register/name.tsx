import React, { useEffect } from 'react';
import { AcceptButton, NameInput, RegNav } from '@/components';
import registerNavigation from '@common/navigation';
import Texts from '@/constants';
import style from '@styles/name.module.css';
import { AppDispatch } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsValidUsername,
  selectWarn1,
  selectWarn2,
  selectWarn3,
  setUsername,
} from '@/store/usernameSlice';

// eslint-disable-next-line react/function-component-definition
const Name: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isValid = useSelector(selectIsValidUsername);
  const warn1 = useSelector(selectWarn1);
  const warn2 = useSelector(selectWarn2);
  const warn3 = useSelector(selectWarn3);

  const [isSelected, setIsSelected] = React.useState(false);

  const handleFirstName = (name: string) => {
    // eslint-disable-next-line no-console
    console.log(name);
  };

  const handleLastName = (name: string) => {
    // eslint-disable-next-line no-console
    console.log(name);
  };

  useEffect(() => {}, [isSelected, isValid]);

  return (
    <section>
      <RegNav link={registerNavigation.Phone} />
      <h1 className={style.nameHeader}>{Texts.Name['name-header']}</h1>
      <div className="relative w-full ">
        <div className={style.inputsContainer}>
          <NameInput
            text={Texts.Name['name-input-first-name']}
            onChange={(name) => handleFirstName(name)}
          />
          <NameInput
            text={Texts.Name['name-input-last-name']}
            onChange={(name) => handleLastName(name)}
          />
          <h2 className={style.nameUserHeader} dir="rtl">
            {Texts.Name['name-user-name-header']}
          </h2>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div className="p-0" onClick={() => setIsSelected(true)}>
            <NameInput
              text={Texts.Name['name-input-user-name']}
              isValid={isValid}
              onChange={(val) => dispatch(setUsername(val))}
            />
          </div>
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

      <AcceptButton link={registerNavigation.Username} isOK={isValid} />
    </section>
  );
};

export default Name;
