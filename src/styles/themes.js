// !поки що тільки світла тема, коментарі потім всі поприбираю
export const themes = Object.freeze({
  colors: {
    background: '#EAEAEA',
    backgroundTextArea: '#F6F6F6',
    black: '#343434',
    white: '#FFFFFF',
    accent: '#3E85F3', //!основні кнопки, активні елементи, іконки, фон календаря
    hovered: '#2B78EF',
    accentText: '#3E85F320',
    starActive: '#FFAC33', //!жовтий зірок рейтингу
    starDisable: '#CEC9C1', //!сірий зірок не активних
    reviewsBackBlue: '#E3F3FF50',
    ligthBlue: '#E3F3FF',
    darkBlue: '#CAE8FF',
    backgroundAuth: '#DCEBF7', //!фоновий колір пейджа регістраціі та логінізаціі
    scrollSwitchHorizont: '#E7E5E5',
    lineScroll: '#F2F2F2',
    scrollSwitchVertical: '#34343420',
    lowTask: '#72C2F8', //!найменший пріоритет в тасках і радіокнопки неактивні
    mediumTask: '#F3B249', //!середній пріоритет в тасках і жовтий текст в календарі і радіокнопки неактивні
    highTask: '#EA3D65', //!найвищщий пріоритет в тасках і рожевий текст в календарі і радіокнопки неактивні
    blueInNotes: '#CEEEFD', //!голуба лейба-фон в календарі
    yellowInNotes: '#FCF0D4', //!жовта лейба-фон в календарі
    pinkInNotes: '#FFD2DD', //!рожева лейба-фон в календарі
    borderInput: '#DCE3E560', //!неактивний колір бордера в інпуті авторизаціі
    placegolderAuth: '#DCE3E5', //! колір плейсхолдера в інпуті авторизаціі
    borderInputActive: '#111111', //!активний колір бордера в інпуті авторизаціі
    failed: '#E74A3B', //!неуспішний колір бордера в інпуті авторизаціі
    saccess: '#3CBC81', //!успішний колір бордера в інпуті авторизаціі
    canceled: '#E5EDFA', //!фон не активних елементів і кнопки Cancel
    loaderWrapper: '#343434',
    loaderCircle: ['#FFFFFF', '#3E85F3', '#2B78EF', '#DCE3E560', '#FFFFFF'],
    bordColorBtnAddTask: '#3E85F3',
    backColorBtnAddTask: '#E3F3FF',
  },
  space: [0, 2, 4, 8, 14, 16, 24, 32, 40, 64, 128],
  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '18px',
    xl: '20px',
    xxl: '24px',
    xxxl: '32px',
    logoMobile: '44px',
    logo: '120px',
    number: '104px',
    titleMain: '40px',
  },
  fontWeight: {
    r: 400,
    m: 500,
    sb: 600,
    b: 700,
  },
  breakpoints: {
    xs: '320px',
    s: '375px',
    m: '768px',
    l: '1440px',
  },
  animations: {
    cubicBezier: 'cubic-bezier(0, 0.110, 0.35, 2);',
    duration: '250ms',
  },
  shadows: {
    authHeading:
      '0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035)',
    authButton: '4px 2px 16px rgba(136, 165, 191, 0.48)',
  },
});

export const dark = Object.freeze({
  colors: {
    background: '#171820',
    black: '#FFFFFF',
    starDisable: '#353647',
    ligthBlue: '#21222C',
    darkBlue: '#3E85F3',
    bordColorBtnAddTask: 'transparent',
    backColorBtnAddTask: '#3E85F3',
    loaderWrapper: '#FFFFFF',
    loaderCircle: ['#FFFFFF', '#3E85F3', '#2B78EF', '#DCE3E560', '#FFFFFF'],
  },
});
