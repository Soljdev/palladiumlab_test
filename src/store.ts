import { reactive } from 'vue'

export const globalState = reactive({
  count: 0,
  commons: {
    siteTitle: 'Ремонт и дизайн в Москве и Московской области',
    contacts: {
      adress: {
        title: 'Офис',
        value: 'Москва, ул. Уличная, д. 1, оф. 1',
      },
      email: {
        title: 'E-mail',
        value: 'company@company.ru',
      },
      worktime: { 
        title: 'Режим работы',
        value: 'Пн-Вт: 1000 - 1900; Сб-Вс: 1000 - 1500',
      },
      phone: {
        title: 'Телефон',
        value: '8 (800) 900-00-00',
      },
      socialLinks: {
        vk: '#',
        tg: '#',
        fb: '#',
      },
    },
  },
  mainItems: [
    {
      id: 1,
      title: 'Услуги по ремонту',
      desc: 'С другой стороны реализация намеченных плановых заданий требуют от нас анализа.',
      url: '#',
      colors: 'bg-main-red',
      show: false,
      img: './public/img/s1.jpeg',
    },
    {
      id: 2,
      title: 'Виды работ',
      desc: 'С другой стороны реализация намеченных плановых заданий требуют от нас анализа.',
      url: '#',
      colors: 'bg-main-green',
      show: false,
      img: './public/img/s2.jpeg',
    },
    {
      id: 3,
      title: 'Дизайн интерьера',
      desc: 'С другой стороны реализация намеченных плановых заданий требуют от нас анализа.',
      url: '#',
      colors: 'bg-main-blue',
      show: false,
      img: './public/img/s3.jpeg',
    },
    {
      id: 4,
      title: 'Ремонт помещений',
      desc: 'С другой стороны реализация намеченных плановых заданий требуют от нас анализа.',
      url: '#',
      colors: 'bg-main-purple',
      show: false,
      img: './public/img/s4.jpeg',
    },
  ],
  navs: [
    {
      name: 'Главная',
      url: '/',
    },
    {
      name: 'О компании',
      url: '#',
    },
    {
      name: 'Услуги',
      url: '#',
    },
    {
      name: 'Цены',
      url: '#',
    },
    {
      name: 'Портфолио',
      url: '#',
    },
    {
      name: 'Контакты',
      url: '#',
    },
  ],
})
