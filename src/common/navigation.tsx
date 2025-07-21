import { CreateSvg, HomeSvg, ExploreSvg, GameSvg, LibrarySvg } from '@/svg';

const RegisterNavigation = {
  register: {
    Home: '/',
    Phone: '/register/phone',
    EntryCode: '/register/entryCode',
    Name: '/register/name',
    Username: '/register/userName',
    Age: '/register/age',
    Photo: '/register/photo',
    UserType: '/register/userType',
    Topics: '/register/topics',
    Email: '/register/email',
    Password: '/register/password',
  },
  boarding: {
    Boarding: '/boarding/boarding',
  },
  login: {
    Login: '/login/login',
    Password: '/login/password',
    OTP: '/login/entryCode',
  },
  main: {
    Home: '/main/home',
    Explore: '/main/explore',
    Game: '/main/game',
    create: '/main/create',
    library: '/main/library',
  },
};

const bottomNavigation: danamit.BottomNavigation = [
  {
    id: 1,
    label: 'Home',
    text: 'خانه',
    href: RegisterNavigation.main.Home,
    icon: <HomeSvg className="w-6 h-6" />,
  },
  {
    id: 2,
    label: 'Explore',
    text: 'کشف',
    href: RegisterNavigation.main.Explore,
    icon: <ExploreSvg className="w-6 h-6" />,
  },
  {
    id: 3,
    label: 'Game',
    text: 'بازی',
    href: RegisterNavigation.main.Game,
    icon: <GameSvg />,
  },
  {
    id: 4,
    label: 'Create',
    text: 'ساختن',
    href: RegisterNavigation.main.create,
    icon: <CreateSvg className="w-6 h-6" />,
  },
  {
    id: 5,
    label: 'Library',
    text: 'کتابخانه',
    href: RegisterNavigation.main.library,
    icon: <LibrarySvg className="w-6 h-6" />,
  },
];

export { RegisterNavigation, bottomNavigation };
