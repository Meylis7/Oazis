export interface HeaderData {
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  navLinks: NavLink[];
  bookingButton: {
    text: string;
    href: string;
  };
}

export interface NavLink {
  label: string;
  href: string;
}

export const headerData: HeaderData = {
  logo: {
    src: '/images/logo.png',
    alt: 'logo',
    width: 260,
    height: 30,
  },
  navLinks: [
    {
      label: 'Расписание',
      href: '#schedule',
    },
    {
      label: 'Контакты',
      href: '/contacts',
    },
    {
      label: 'Регистрация',
      href: '/registration',
    },
  ],
  bookingButton: {
    text: 'Забронировать место',
    href: '#',
  },
};
