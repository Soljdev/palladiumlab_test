import { reactive } from 'vue'

export const globalState = reactive({
  commons: {
    siteTitle: 'Ремонт и дизайн в Москве и Московской области',
    contacts: {
      adress: {
        title: 'Офис',
        value: 'Москва, ул. Уличная, д. 1, оф. 1',
      },
      worktime: { 
        title: 'Режим работы',
        value: 'Пн-Вт: 10<sup>00</sup> - 19<sup>00</sup>; Сб-Вс: 10<sup>00</sup> - 15<sup>00</sup>',
      },
      email: {
        title: 'E-mail',
        value: 'company@company.ru',
      },
      phone: {
        title: 'Телефон',
        value: '8 (800) 900-00-00',
      },
    },
    socialLinks: {
      title: 'Социальные сети',
      items:{
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
  tailNavs: [
    {
      title: 'Новостройка',
      img: './public/img/t1.jpeg',
    },
    {
      title: 'Новостройка',
      img: './public/img/t2.jpeg',
    },
    {
      title: 'Вторичка',
      img: './public/img/t3.jpeg',
    },
    {
      title: 'Вторичка',
      img: './public/img/t4.jpeg',
    },
    {
      title: 'Новостройка',
      img: './public/img/t7.jpeg',
    },
    {
      title: 'Вторичка',
      img: './public/img/t5.jpeg',
    },
    {
      title: 'Вторичка',
      img: './public/img/t6.jpeg',
    },
    {
      title: 'Новостройка',
      img: './public/img/t8.jpeg',
    },
  ],
})
