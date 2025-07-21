import React from 'react';
import { RegNav, TypeCard } from '@/components';
import text from '@/constants';
import style from '@styles/userType.module.css';
import { RegisterNavigation } from '@common/navigation';
import { useRouter } from 'next/router';

// eslint-disable-next-line react/function-component-definition
const UserType: React.FC = () => {
  const types = {
    entertainment: {
      id: 1,
      name: 'Entertainment',
      text: text.userType['type-type1'],
      color: 'bg-[#0EB55B]',
    },
    business: {
      id: 2,
      name: 'Business',
      text: text.userType['type-type2'],
      color: 'bg-[#E60C31]',
    },
    teacher: {
      id: 3,
      name: 'Teacher',
      text: text.userType['type-type3'],
      color: 'bg-[#ED7D3A]',
    },
    student: {
      id: 4,
      name: 'Student',
      text: text.userType['type-type4'],
      color: 'bg-[#0061FF]',
    },
  };

  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(RegisterNavigation.register.Topics);

    // eslint-disable-next-line no-console
    console.log(id);
  };

  return (
    <section>
      <RegNav link={RegisterNavigation.register.Photo} />
      <h1 className={style.typeHeader} dir="rtl">
        {text.userType['type-header']}
      </h1>
      <div className={style.typeCardsContainer}>
        <TypeCard
          text={types.entertainment.text}
          color={types.entertainment.color}
          onClick={() => handleClick(types.entertainment.id)}
        />
        <TypeCard
          text={types.business.text}
          color={types.business.color}
          onClick={() => handleClick(types.business.id)}
        />
        <TypeCard
          text={types.teacher.text}
          color={types.teacher.color}
          onClick={() => handleClick(types.teacher.id)}
        />
        <TypeCard
          text={types.student.text}
          color={types.student.color}
          onClick={() => handleClick(types.student.id)}
        />
      </div>
    </section>
  );
};

export default UserType;
