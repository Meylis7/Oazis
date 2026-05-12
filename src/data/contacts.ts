export interface FormField {
  type: 'text' | 'email' | 'tel' | 'textarea';
  id: string;
  label: string;
  placeholder?: string;
  required?: boolean;
}

export interface SocialNetworkItem {
  name: string;
  href: string;
  icon: 'instagram' | 'facebook' | 'tiktok' | 'youtube';
}

export interface ContactsPageData {
  title: string;
  titleHighlight: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  formAction: string;
  formFields: FormField[];
  submitButtonText: string;
}

export interface ContactSection {
  title: string;
  contactPersonPrefix: string;
  contactPerson: string;
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
}

export interface SocialNetworks {
  title: string;
  items: SocialNetworkItem[];
}

export interface MapSection {
  iframeSrc: string;
  providerLabel: string;
  providerHref: string;
  directionsHref: string;
  locationTitle: string;
  locationName: string;
  locationAddress: string;
}

export const contactsPageData: ContactsPageData = {
  title: 'Остались вопросы?',
  titleHighlight: 'Свяжитесь с нами удобным способом',
  image: {
    src: '/images/contact.png',
    alt: 'Фотография лагеря Oazis',
    width: 670,
    height: 400,
  },
  formAction: '#',
  formFields: [
    {
      type: 'text',
      id: 'name',
      label: 'Имя',
      placeholder: 'Имя',
      required: true,
    },
    {
      type: 'email',
      id: 'email',
      label: 'Email',
      placeholder: 'Email',
      required: true,
    },
    {
      type: 'textarea',
      id: 'message',
      label: 'Сообщение',
      placeholder: 'Ваш вопрос…',
    },
  ],
  submitButtonText: 'Задать вопрос',
};

export const contactSection: ContactSection = {
  title: 'Контакты',
  contactPersonPrefix: 'Контактное лицо —',
  contactPerson: 'Иван Пискун',
  phone: '952-393-3724',
  phoneHref: 'tel:9523933724',
  email: 'oasiscampmn@gmail.com',
  emailHref: 'mailto:oasiscampmn@gmail.com',
};

export const socialNetworks: SocialNetworks = {
  title: 'Соцсети',
  items: [
    {
      name: 'Instagram',
      href: 'https://instagram.com/oaziscamp',
      icon: 'instagram',
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com/oaziscamp',
      icon: 'facebook',
    },
  ],
};

export const mapSection: MapSection = {
  iframeSrc:
    'https://yandex.com/map-widget/v1/?l=sat&ll=-93.951743%2C46.404009&z=15&pt=-93.951743,46.404009,pm2rdm',
  providerLabel: 'Yandex Maps',
  providerHref: 'https://yandex.com/maps?utm_medium=mapframe&utm_source=maps',
  directionsHref:
    'https://yandex.com/maps/?l=sat&ll=-93.951743%2C46.404009&utm_medium=mapframe&utm_source=maps&z=15',
  locationTitle: 'Локация',
  locationName: 'Eagle Lake Camp and Retreat Center',
  locationAddress: '17040 Co. Rd 102, Brainerd, MN 56401',
};
