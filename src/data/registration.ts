export interface RegistrationStep {
  label: string;
  description: string;
}

export interface FormField {
  id: string;
  htmlFor: string;
  label: string;
  type: string;
  placeholder?: string;
  inputType?: string;
}

export interface RadioOption {
  id: string;
  name: string;
  label: string;
}

export interface WaiverSection {
  title: string;
  content: string;
  note?: string;
}

export interface SignatureForm {
  intro: string;
  title: string;
  subtitle: string;
  fields: FormField[];
}

export const registrationHeader = {
  titleHighlight: '3 шага ',
  titleSuffix: 'регистрации',
  afterRegistrationNote: 'После этого: вас добавят в Viber-группу лагеря',
  stepOneImage: {
    src: '/images/oazis.png',
    alt: 'Oasis Camp — летний лагерь для детей',
    width: 670,
    height: 400,
  },
};

export const registrationSteps: RegistrationStep[] = [
  {
    label: 'Шаг 1',
    description: 'Заполните форму регистрации',
  },
  {
    label: 'Шаг 2',
    description: 'Подпишите Release and Waiver of Liability',
  },
  {
    label: 'Шаг 3',
    description: 'Оплатите участие или введите код спонсорской регистрации',
  },
];

export const step1Data = {
  titleHighlight: 'Заполните регистрацию ',
  titleSuffix: 'для участия ребёнка в лагере',
  subtitle:
    'После регистрации вы будете включены в Viber группу лагеря, где будет выставляться подробная информация каждого дня. Видео, фото и короткие сообщения. Скачайте и оформитесь на Viber если у вас нет аккаунта',
  childSection: {
    title: '1. Information about child / Информация о ребёнке',
    fields: [
      { id: 'name', htmlFor: 'name', label: 'Имя', type: 'text', placeholder: 'Имя' },
      { id: 'surename', htmlFor: 'surename', label: 'Last / Фамилия', type: 'text', placeholder: 'Фамилия' },
      { id: 'brithDate', htmlFor: 'brithDate', label: 'DOB / Дата рождения', type: 'text', placeholder: 'XX.XX.XXXX' },
      { id: 'email', htmlFor: 'email', label: 'Email', type: 'email', placeholder: 'Email' },
    ] as FormField[],
  },
  parentsSection: {
    title: '2. Parents information / Контактная информация родителей',
    mother: {
      label: 'Mother / Мать:',
      fields: [
        { id: 'M-name', htmlFor: 'M-name', label: 'Имя', type: 'text', placeholder: 'Имя' },
        { id: 'M-surename', htmlFor: 'M-surename', label: 'Last / Фамилия', type: 'text', placeholder: 'Фамилия' },
        { id: 'M-cellPhone', htmlFor: 'M-cellPhone', label: 'Cell / Телефон', type: 'text', placeholder: '+' },
        { id: 'address', htmlFor: 'address', label: 'Address / Адрес проживания', type: 'address', placeholder: 'Адрес проживания' },
      ] as FormField[],
    },
    father: {
      label: 'Father / Отец:',
      fields: [
        { id: 'F-name', htmlFor: 'F-name', label: 'Имя', type: 'text', placeholder: 'Имя' },
        { id: 'F-surename', htmlFor: 'F-surename', label: 'Last / Фамилия', type: 'text', placeholder: 'Фамилия' },
        { id: 'F-cellPhone', htmlFor: 'F-cellPhone', label: 'Cell / Телефон', type: 'text', placeholder: '+' },
      ] as FormField[],
    },
  },
  medicalSection: {
    title: '3. Medical info / Медицинская информация',
    fields: [
      { id: 'physicianName', htmlFor: 'physicianName', label: "Primary Physician's name / Имя лечащего врача", type: 'text', placeholder: 'Имя лечащего врача' },
      { id: 'clinicPhone', htmlFor: 'clinicPhone', label: 'Primary clinic phone / Телефон клиники', type: 'text', placeholder: '+' },
    ] as FormField[],
  },
  insuranceSection: {
    title: '4. Health insurance / Медицинская страховка',
    fields: [
      { id: 'companyName', htmlFor: 'companyName', label: 'Company / Страховая компания', type: 'text', placeholder: 'Имя лечащего врача' },
      { id: 'police', htmlFor: 'police', label: 'Policy #', type: 'text', placeholder: '+' },
      { id: 'group', htmlFor: 'group', label: 'Group #', type: 'text', placeholder: '+' },
    ] as FormField[],
  },
  additionalSection: {
    title: '5. Дополнительно',
    fields: [
      { id: 'emergency', htmlFor: 'emergency', label: 'Контакт на случай ЧС', type: 'text', placeholder: '+' },
      { id: 'alergic', htmlFor: 'alergic', label: 'Аллергии', type: 'text', placeholder: '' },
    ] as FormField[],
    textareaId: 'importantMessage',
    textareaLabel: 'Любая важная информация',
  },
  campExperienceSection: {
    title: '6. Был ли ребёнок раньше в лагерях?',
    options: [
      { id: 'lagers-yes', name: 'lagers', label: 'Да, уже ездил' },
      { id: 'lagers-no', name: 'lagers', label: 'Нет, будет впервые' },
    ] as RadioOption[],
  },
  prioritiesSection: {
    title: '7. Что для вас важнее всего?',
    options: [
      { id: 'control', name: 'important', label: 'Безопасность и контроль' },
      { id: 'friends', name: 'important', label: 'Новые друзья и общение' },
      { id: 'rest', name: 'important', label: 'Активный отдых' },
      { id: 'learn', name: 'important', label: 'Развитие и программа' },
    ] as RadioOption[],
  },
  phoneSection: {
    title: '8. Насколько ребёнок зависит от телефона?',
    options: [
      { id: 'always', name: 'addictPhone', label: 'Почти постоянно в телефоне' },
      { id: 'sometimes', name: 'addictPhone', label: 'Иногда пользуется' },
      { id: 'noUse', name: 'addictPhone', label: 'Спокойно обходится' },
    ] as RadioOption[],
  },
  submitButton: 'Задать вопрос',
  submitNote: 'Проверим данные и свяжемся с вами для подтверждения участия',
  viberLabel: 'ВАЖНО:',
  viberNote:
    'Скачайте и установите Viber. После регистрации вы получите приглашение в информационную группу лагеря',
};


export const step2Data = {
  titlePrefix: 'PLEASE READ CAREFULLY.',
  titleHighlight: ' THIS DOCUMENT CONTAINS A RELEASE AND WAIVER OF LIABILITY ',
  subtitle:
    'Пожалуйста, внимательно прочитайте документ ниже. Для завершения регистрации необходимо подтвердить согласие родителя и ребёнка',
  documentImage: {
    src: '/images/liability.png',
    alt: 'Release and Waiver of Liability — Oasis Camp',
    width: 1160,
    height: 600,
  },
  sections: [
    {
      title: 'AGE GUIDELINES:',
      content:
        'The Oasis Camp is for children ages 9 to 12 years old. The participants will be divided into small groups dependent on age and gender.',
    },
    {
      title: 'MEDICAL TREATMENT:',
      content:
        'I hereby give permission to the physicians and nurses selected by Oasis Camp Directors to assess and give medical treatment, including prescriptions, when necessary to my son/daughter. If my son or daughter is arriving to camp with prescription medicine that I provide to camp staff, I authorize a designated camp staff person to dispense this prescribed medicine. In the event that a guest requires special medication, transportation, X-ray or treatment beyond that which is possible at the resort, the parents will be charged with the additional expense. In case of surgical emergency, I hereby give permission to the physician selected by the Director of Oasis Camp to hospitalize, secure proper treatment for and to order injection, anesthesia or surgery for my child as named above and will be responsible for any additional expense that may result from such services.',
    },
    {
      title: 'ALLERGIES:',
      content:
        'While I understand that Oasis Camp does its best to protect against exposure to nut products where there are allergies of which I have given written notice, I recognize that Oasis Camp does not accept responsibility or liability and I hereby release Oasis Camp for any illness or injury which may occur as a result of exposure by my child to any such food or other item to which my child has an allergy.',
    },
    {
      title: 'CONSENT FOR TRANSPORTATION:',
      content:
        'I give permission for my child to be transported in a motor vehicle driven by designated Oasis Camp Staff to an off-site location to receive medical treatment in the event of an emergency or if medical treatment is required. I recognize that by participating in this activity, as with any activity involving motor vehicle transportation, my child may risk personal injury or permanent loss. I hereby attest and verify that I have been advised of the potential risks, that I have full knowledge of the risks involved in this activity, and that I assume any expenses that may be incurred in the event of an accident, illness, or other incapacity, regardless of whether I have authorized such expenses.',
    },
    {
      title: 'DRESS CODE:',
      content:
        'Children should dress appropriately for the activities scheduled. Oasis Camp recommends shorts and a light weight shirt or top, and some type of athletic shoe or sneaker in order to participate in recreational or athletic activities. Sandals, flip-flops, rubber "crocs"- style shoes, and other open-toed shoes are not recommended as acceptable attire for active recreation activities. Shirts should have a minimum of 1" wide shoulder straps. Clothing that displays drugs, alcohol, tobacco, offensive language, excessive bagginess, or is excessively revealing will not be permitted.',
    },
    {
      title: 'PERSONAL BELONGINGS:',
      content:
        "Please put the child's name on all articles of clothing, bags, etc. Children should not bring toys, fireworks, jewelry, money, or any possession of value with them. Children will be responsible for their belongings. Oasis Camp is not responsible for any lost, stolen or damaged articles. No weapons of any kind, or items that may be used or mistaken as weapons. No cell phones, radios, MP3 players, iPods, tablets, laptops or other electronic equipment.",
    },
    {
      title: 'SUNSCREEN/INSECT REPELLENT:',
      content:
        "Please provide sunscreen and insect repellent. Spray or mist sunscreen and/or insect repellent are recommended. Sunscreen and/or insect repellent must be labeled with child's name. Children may not share these items with others.",
    },
    {
      title: 'CAMP RULES:',
      content:
        "No roughhousing or physical force; all campers must keep their hands to themselves and are not allowed to kick, hit, or hurt each other in any way. Campers will respect other people's property and camp property. No swearing or foul language; no name calling. Campers will clean up after themselves and be responsible for their personal belongings. No camper may leave their assigned group at any time without permission from their counselor.",
    },
    {
      title: 'DISMISSAL AND BEHAVIOR:',
      content:
        "The Director reserves the right to dismiss a camper without a refund who, in his opinion, is a hazard to the safety or rights of others or who appears to him to have rejected the reasonable controls of the resort. I certify that I have no knowledge of any physical or mental impairment that would be affected by the named guest's participation in the Oasis Camp Program. I also give permission to the Directors of Oasis Camp to search my child's belongings for items prohibited by camp, if suspected. I agree to reimburse Oasis Camp for any intentional damage or defacement of camp property caused by my child.",
      note: 'Immediate dismissal from the camp can occur at any time given severe circumstances. Refunds due to a discipline dismissal will not be granted.',
    },
    {
      title: 'NUTRITION/SNACKS:',
      content:
        "Children not allowed to bring a snack. Provide non-glass container for drink with label and the child's name. Please do not send gum or candy.",
    },
    {
      title: 'SWIMMING:',
      content:
        'Children will need to bring a swimsuit or wear a swimsuit under their clothing for swim schedule time. Provide towels. Lycra swim shirts or rash guards are permissible. Cotton t-shirts, denim, or cotton shorts may not be worn in the water.',
    },
    {
      title: 'MEDIA AND PHOTOGRAPHY RELEASE:',
      content:
        'I/We, named above grant permission to Oasis Camp, it\'s leadership team and volunteers the irrevocable and unrestricted right to produce photographs and video taken of my child, while at Oasis Camp Summer Camp for any lawful purpose including publication, promotion, illustration, advertising, trade, or historical archive in any manner or in any medium. I hereby release Oasis Camp and its legal representatives from liability for any violation or claims relating to said images or video. I waive my right, my child\'s rights, and my family\'s rights to any and all compensation stemming from the use of these materials.',
    },
    {
      title: 'LIABILITY:',
      content:
        'While every precaution is taken for the safety and good health of our guests, some sports and activities carry with them the inherent risk of personal injury beyond the risks associated with many of the recreational activities at Oasis Camp. I understand and accept these risks and agree that by allowing my child to participate in those activities, he/she may be taking part in a recreational activity that presents the potential for personal injury. I understand that Oasis Camp assumes no responsibility for injuries or illnesses that participant may sustain, a.) as a result of participant\'s physical condition, b.) resulting from participant\'s participation in the activity, c.) as a result of another participant\'s or third person\'s actions, or d.) as a result of participant\'s use of Oasis Camp\'s facilities, surroundings, and/or equipment in connection with this activity. The participant releases and agrees to hold harmless, defend and indemnify Oasis Camp and its directors, staff volunteers, and supporters (the "Releasees") from and against any and all claims for personal injury (including loss of life) and all other losses or damages that the participant may suffer as a result of his or her participation and/or enrollment in Oasis Camp\'s activities, notwithstanding that any such loss, injury or damage may have arisen by reason of negligence of the ["Releasees"].',
    },
  ] as WaiverSection[],
  parentForm: {
    intro:
      'This release constitutes a waiver of legal rights and by signing below, you are also indicating that you have read carefully and understand the contents of this waiver and release.',
    title: 'PARENT/GUARDIAN',
    subtitle: '(родитель или законный представитель)',
    fields: [
      { id: 'parentName', htmlFor: 'parentName', label: 'Full name', type: 'text', placeholder: '' },
      { id: 'parentDate', htmlFor: 'parentDate', label: 'Date', type: 'text', placeholder: '' },
      { id: 'parentSignature', htmlFor: 'parentSignature', label: 'Signature', type: 'textarea', placeholder: '' },
    ] as FormField[],
  } as SignatureForm,
  camperForm: {
    intro:
      'I have read the camp rules, understand them, and agree to follow them. I understand that if I break these rules, I will be asked to leave, and my parent/guardian will pick me up from camp.',
    title: 'CAMPER',
    subtitle: '(участник лагеря — ребёнок)',
    fields: [
      { id: 'camperName', htmlFor: 'camperName', label: 'Full name', type: 'text', placeholder: '' },
      { id: 'camperDate', htmlFor: 'camperDate', label: 'Date', type: 'text', placeholder: '' },
      { id: 'camperSignature', htmlFor: 'camperSignature', label: 'Signature', type: 'textarea', placeholder: '' },
    ] as FormField[],
  } as SignatureForm,
  viberLabel: 'ВАЖНО:',
  viberNote:
    'Скачайте и установите Viber. После регистрации вы получите приглашение в информационную группу лагеря',
  checkboxId: 'campRule',
  checkboxLabel: 'Я ознакомился с условиями и согласен с правилами лагеря',
  submitButton: 'Зарегистрироваться и Оплатить',
  submitNote: 'После подписания вы перейдёте к оплате или вводу регистрационного кода',
  noteLabel: 'NOTE:',
};
