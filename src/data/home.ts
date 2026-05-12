export interface HomePageContent {
  hero: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    descriptionBold: string;
    descriptionExtra: string;
    buttons: Array<{
      text: string;
      href: string;
      variant: 'primary' | 'secondary';
    }>;
  };
  heroSlider: {
    images: {
      count: number;
      baseUrl: string;
    };
    price: string;
    features: Array<{ text: string }>;
    mobileButtons: Array<{
      text: string;
      href: string;
      variant: 'primary' | 'secondary';
    }>;
  };
  youtube: {
    videoId: string;
    embedUrl: string;
  };
  countdown: {
    title: string;
    targetDate: string;
  };
  features: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
    }>;
    additionalCards: Array<{
      title: string;
      description: string;
      image: string;
      imageAlt: string;
    }>;
  };
  safety: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    backgroundImage: string;
    items: Array<{ text: string }>;
  };
  medical: {
    title: string;
    items: Array<{ text: string }>;
  };
  schedule: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    description: string;
    items: Array<{
      time: string;
      activity: string;
    }>;
  };
}

export const heroSection = {
  title: 'Летний лагерь для детей 9-12 лет',
  titleHighlight: 'Летний лагерь для детей 9-12 лет',
  subtitle: 'с проживанием на природе и насыщенной программой',
  descriptionBold: '7 дней без телефонов',
  descriptionExtra: '— с играми, друзьями и живым общением. Программа на русском языке + адаптация для англоговорящих детей',
  buttons: [
    {
      text: 'Забронировать место на поток 2026',
      href: '#',
      variant: 'primary' as const,
    },
    {
      text: 'Познакомиться с распорядком дня и условиями лагеря',
      href: '#',
      variant: 'secondary' as const,
    },
  ],
};

export const heroSliderImages = {
  count: 6,
  baseUrl: '/images/hero-slider',
};

export const heroSliderFeatures = {
  price: '7 дней — $265',
  features: [
    {
      text: '3-разовое питание + полдник и вечерний снек',
    },
    {
      text: 'Группы по 8–10 детей с закрепленным вожатым и помощником',
    },
    {
      text: '15+ активностей ежедневно: спорт, квесты, поделки, костёр, командные игры, водные эстафеты, купание на озере',
    },
    {
      text: 'Лагерь проходит на базе Eagle Lake Camp (Minnesota)',
    },
  ],
};

export const mobileButtons = [
  {
    text: 'Забронировать место на поток 2026',
    href: '#',
    variant: 'primary' as const,
  },
  {
    text: 'Познакомиться с распорядком дня и условиями лагеря',
    href: '#',
    variant: 'secondary' as const,
  },
];

export const youtubeEmbed = {
  videoId: 'KvoGE-adqvM',
  src: 'https://www.youtube.com/embed/KvoGE-adqvM',
  embedUrl: 'https://www.youtube.com/embed/KvoGE-adqvM',
  title: 'YouTube video player',
};

export const countdownSection = {
  title: 'До начала смены осталось',
  targetDate: '2026-08-30T00:00:00',
};

export const featuresSection = {
  title: 'За 7 дней ребёнок проживёт опыт,',
  titleHighlight: 'За 7 дней ребёнок проживёт опыт,',
  subtitle: 'который не даст ни школа, ни кружки',
  description: 'Каждый день — это сочетание активности, общения и развития в безопасной среде',
  items: [
    {
      title: 'Живое общение без телефонов',
      description:
        'Дети полностью погружаются в реальное общение — без телефонов, планшетов и соцсетей',
    },
    {
      title: 'Развитие мягких навыков',
      description:
        'Лидерство, командная работа, адаптивность, творчество и креативность через игры и активности',
    },
    {
      title: 'Здоровый образ жизни',
      description:
        'Физическая активность, здоровое питание, режим дня и позитивное влияние природы',
    },
    {
      title: 'Безопасность и уход',
      description:
        'Медицинский персонал на месте, строгие протоколы безопасности, инструменты отслеживания благополучия',
    },
    {
      title: 'Языковая практика',
      description:
        'Общение с англоговорящими ровесниками, английский язык в реальных игровых ситуациях',
    },
    {
      title: 'Дружба и память',
      description:
        'Прочные дружбы и воспоминания, которые останутся на всю жизнь. Групповые фото и видео от смены',
    },
  ],

  additionalCards: [
    {
      title: 'Новые друзья за 7 дней',
      description: 'Маленькие группы до 10 человек → ребёнок не теряется и быстро находит друзей',
      image: '/images/camp-1.png',
      imageAlt: 'Дети в лагере',
    },
    {
      title: 'Контроль и дисциплина',
      description: 'Дети не могут покидать группу без разрешения, соблюдают правила лагеря',
      image: '/images/camp-2.png',
      imageAlt: 'Вожатые с детьми',
    },
    {
      title: 'Активная программа каждый день',
      description: 'Спорт, игры, квесты, купание, вечерние встречи — ребенок всегда занят',
      image: '/images/camp-1.png',
      imageAlt: 'Активности в лагере',
    },
    {
      title: 'Безопасная среда',
      description: 'Вожатые находятся с детьми постоянно и контролируют весь день',
      image: '/images/camp-2.png',
      imageAlt: 'Безопасность в лагере',
    },
    {
      title: 'Развитие и ценности',
      description:
        'На потоке мы проводим ежедневно библейские программы, на которых мы говорим об уважении старших, уважении друг друга, о послушании родителям, о важности обучения и развития, о безопасности в этом опасном мире, о выборе и последствиях',
      image: '/images/camp-1.png',
      imageAlt: 'Ценности в лагере',
    },
  ],
};


export const safetySection = {
  title: 'Ребёнок находится под присмотром 24/7 —',
  titleHighlight: 'Ребёнок находится под присмотром 24/7 —',
  subtitle: 'от подъёма до отбоя',
  backgroundImage: '/images/camp-1.png',
  items: [
    {
      text: 'Вожатые закреплены за группами и находятся с детьми постоянно',
    },
    {
      text: 'Дети не могут покидать группу без разрешения',
    },
    {
      text: 'Группы до 10 человек — внимание к каждому',
    },
    {
      text: 'Контроль поведения и соблюдение правил лагеря',
    },
    {
      text: 'Возможность связи с родителями через директора и вожатого',
    },
  ],
};


export const medicalSafetySection = {
  title: 'Медицинская безопасность',
  items: [
    {
      text: 'При необходимости ребёнку оказывается медицинская помощь',
    },
    {
      text: 'Медик контролируют приём лекарств',
    },
    {
      text: 'В экстренных случаях обеспечивается госпитализация',
    },
  ],
};


export const scheduleSection = {
  title: 'Ребёнок находится под присмотром 24/7 —',
  titleHighlight: 'Ребёнок находится под присмотром 24/7 —',
  subtitle: 'от подъёма до отбоя',
  description:
    'Сбалансированный режим: активность, отдых, питание, утреняя и вечерняя программа',
  items: [
    { time: '7:30', activity: 'Подъём' },
    { time: '7:50', activity: 'Весёлая зарядка' },
    { time: '8:30', activity: 'Завтрак' },
    { time: '9:30', activity: 'Активность' },
    { time: '11:30', activity: 'Перекус' },
    { time: '12:00', activity: 'Активность' },
    { time: '1:00 PM', activity: 'Обед' },
    { time: '2:00 PM', activity: 'Отдых' },
    { time: '3:30 PM', activity: 'Полдник' },
    { time: '4:00 PM', activity: 'Активность' },
    { time: '6:00 PM', activity: 'Ужин' },
    { time: '7:00 PM', activity: 'Вечерняя программа' },
    { time: '8:30 PM', activity: 'Снек' },
    { time: '9:00 PM', activity: 'Отбой' },
  ],
};


export const featureSectionImages = [
  { src: '/images/camp-1.png', alt: 'Дети в лагере Oasis Camp', width: 470, height: 30 },
  { src: '/images/camp-2.png', alt: 'Вожатые с детьми в лагере', width: 470, height: 30 },
];


export const packingListSection = {
  bringTitle: 'Что',
  bringTitleHighlight: 'взять',
  bringTitleSuffix: 'с собой:',
  bringItems: [
    'Пастельные принадлежности (спальный мешок и подушку)',
    'Одежду на каждый день',
    'Тёплую кофту',
    'Одежду для купания (футболку для купания)',
    'Полотенце',
    'Спортивную одежду и обувь',
    'Кепка/Крем от загара/Средство от комаров',
    'Средства личной гигиены',
    'Фонарик',
    'Бутылка для воды',
    'Не давайте новую одежду, вещи не должны быть дорогими, всё-таки мы едем на природу',
  ],
  dontBringTitle: 'Что',
  dontBringTitleHighlight: 'не нужно',
  dontBringTitleSuffix: 'брать с собой:',
  dontBringItems: [
    'Деньги',
    'Электронику',
    'Электронные игры',
    'Перочинные ножи или любое другое оружие',
    'Пищевые продукты',
    'Cellphones',
  ],
  communicationNote:
    'Связь можно будет поддерживать через вожатого вашего ребёнка или директора лагеря',
};


export const accommodationSection = {
  title: 'Проживание, питание и правила',
  titleSuffix: '— всё продумано для безопасности и комфорта',
  accommodation: {
    title: 'Условия проживания и питание',
    items: [
      'Проживание в домиках на территории лагеря (не палатки)',
      'Кровати с матрасами',
      'Раздельное проживание мальчиков и девочек',
      '3-разовое питание + перекусы',
      'Вода и базовые бытовые условия',
    ],
  },
  parentTips: {
    title: 'Важно знать родителям',
    items: [
      'Не давайте ребенку дорогую одежду',
      'Рекомендуется удобная спортивная одежда и обувь',
      'Обязательно положите ребёнку головной убор: кепку, панамку или бандану',
      'Лагерь не несёт ответственность за утерянные вещи',
    ],
  },
  rules: {
    title: 'Правила и ограничения',
    items: [
      'Запрещены телефоны, планшеты и любая электроника',
      'Нельзя приносить деньги и ценные вещи',
      'Дети не могут покидать группу без разрешения',
      'Запрещены агрессия, грубость и нарушение дисциплины',
      'За серьезные нарушения возможен досрочный отъезд за счет родителей',
    ],
  },
  bookingButton: {
    text: 'Забронировать место на поток 2026',
    href: '/#',
  },
  images: [
    { src: '/images/rools-1.png', alt: 'Условия лагеря', width: 470, height: 30 },
    { src: '/images/rools-2.png', alt: 'Проживание в лагере', width: 470, height: 30 },
    { src: '/images/rools-3.png', alt: 'Правила лагеря', width: 470, height: 30 },
    { src: '/images/rools-4.png', alt: 'Безопасность в лагере', width: 470, height: 30 },
  ],
};


export const homeLocationSection = {
  title: 'Где и когда',
  titleHighlight: 'Где и когда',
  titleSuffix: 'проходит лагерь',
  subtitle: 'Вся организационная информация — чтобы вы могли спокойно спланировать поездку',
  datesTitle: 'Даты потока',
  dates: '9 августа — 15 августа',
  arrival: 'Заезд: воскресенье в 5:00 pm',
  departure: 'Выезд: суббота с 1:00 pm до 3:00 pm',
  importantTitle: 'Важно',
  importantItems: [
    'Check in',
    'Передача нужной информации и медикаментов — мед. работникам',
    'Знакомство ребёнка с вожатым',
  ],
  forParentsTitle: 'Для родителей',
  forParentsDescription:
    'Родители привозят детей и могут ознакомиться с территорией лагеря и местом проживания ребенка',
  forParentsItems: [
    'Зарегистрироваться необходимо до ужина — 6:30 pm',
    'Первая программа начинается в 7:00 pm',
    'Приглашаем на пикник в день выезда в 1:00 pm',
    'После пикника можно уезжать',
  ],
  map: {
    iframeSrc:
      'https://yandex.com/map-widget/v1/?l=sat&ll=-93.951743%2C46.404009&z=15&pt=-93.951743,46.404009,pm2rdm',
    providerLabel: 'Yandex Maps',
    providerHref: 'https://yandex.com/maps?utm_medium=mapframe&utm_source=maps',
    directionsHref:
      'https://yandex.com/maps/?l=sat&ll=-93.951743%2C46.404009&utm_medium=mapframe&utm_source=maps&z=15',
    locationTitle: 'Локация',
    locationName: 'Eagle Lake Camp and Retreat Center',
    locationAddress: 'Minnesota, США',
  },
};


export const supportSection = {
  title: 'Лагерь проводится благодаря',
  titleHighlight: 'волонтёрам и поддержке людей',
  subtitle: 'Мы некоммерческая организация — и делаем этот лагерь доступным для детей',
  description:
    'Oasis Camp проводится на добровольных и волонтёрских началах. Наша команда — это люди, которые вкладывают своё время и силы, чтобы дети могли провести безопасное, активное и полезное лето.',
  cta: 'Если вы хотите поддержать этот проект — мы будем искренне благодарны',
  buttons: [
    { text: 'Поддержать лагерь', href: '#' },
    { text: 'Сделать пожертвование', href: '#' },
  ],
  items: [
    'Мы имеем статус non-profit organization',
    'Все пожертвования могут быть списаны с налогооблагаемого дохода',
    'Вы помогаете сделать отдых доступным для большего количества детей',
  ],
};