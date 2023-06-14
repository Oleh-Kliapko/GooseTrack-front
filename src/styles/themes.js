// !поки що тільки світла тема, коментарі потім всі поприбираю
export const themes = Object.freeze({
  colors: {
    goose: '#3E85F3',
    background: '#F7F6F9',
    backgroundSidebar: '#FFFFFF',
    backgroundUserbar: '#F7F6F9',
    backgroundUserForm: '#FFFFFF',
    backgroundModalTodo: '#FFFFFF',
    backgroundTextArea: '#F6F6F6',
    borderInTextArea: 'transparent',
    textAndIconTodo: '#111111',
    borderTableAndInput: '#DCE3E550',
    borderInputUserForm: '#11111110',
    borderModaAddToDo: '#DCE3E580',
    starDisable: '#CEC9C1', //!сірий зірок не активних
    ligthBlue: '#E3F3FF',
    darkBlue: '#CAE8FF',
    borderBtnAddTask: '#3E85F3',
    backColorBtnAddTask: '#E3F3FF',
    scrollSwitchHorizont: '#E7E5E5',
    lineHorizontScroll: '#FFFFFF',
    lineHorizontScrollInTodo: '#F2F2F2',
    reviewsBackBlue: '#E3F3FF50',
    iconPaginationActive: '#111111',
    scrollSwitchVertical: '#34343420',
    labelInForm: '#34343480',
    lineSwitchVertical: '#FFFFFF',
    textMonthDayBtn: '#3E85F3',
    loaderWrapper: '#343434', //!він також текст у календарі чорний
    loaderCircle: ['#FFFFFF', '#3E85F3', '#2B78EF', '#DCE3E560', '#FFFFFF'],
    canceledInTodo: '#EFEFEF', //!фон не активних елементів і кнопки Cancel
    textCancelBtn: '#343434',
    sidebarTitle: 'rgba(52, 52, 52, 0.5)',
    userNavItem: 'rgba(52, 52, 52, 0.5)',
    activeUserNavItem: '#3E85F3',
    backgroundActiveUserNavItem: '#E3F3FF',
    userNavIcon: 'rgba(52, 52, 52, 0.5)',
    activeUserNavIcon: '#3E85F3',
    sidebarBorder: 'rgba(220, 227, 229, 0.5)',

    // !не міняються при зміні теми !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    black: '#343434',
    white: '#FFFFFF',
    accent: '#3E85F3', //!основні кнопки, активні елементи, іконки, фон календаря
    hovered: '#2B78EF',
    accentText: '#3E85F320',
    starActive: '#FFAC33', //!жовтий зірок рейтингу
    backgroundAuth: '#DCEBF7', //!фоновий колір пейджа регістраціі та логінізаціі
    lowTask: '#72C2F8', //!найменший пріоритет в тасках
    lowTaskRadio: '#72C2F850', //!кільце радіокнопки неактивні
    mediumTask: '#F3B249', //!середній пріоритет в тасках і жовтий текст в календарі і радіокнопки неактивні
    highTask: '#EA3D65', //!найвищщий пріоритет в тасках і рожевий текст в календарі і радіокнопки неактивні
    blueInNotes: '#CEEEFD', //!голуба лейба-фон в календарі
    yellowInNotes: '#FCF0D4', //!жовта лейба-фон в календарі
    pinkInNotes: '#FFD2DD', //!рожева лейба-фон в календарі
    borderInput: '#DCE3E560', //!неактивний колір бордера в інпуті авторизаціі
    placegolderAuth: '#DCE3E5', //! колір плейсхолдера в інпуті авторизаціі
    borderInputActive: '#11111110', //!активний колір бордера в інпуті авторизаціі
    failed: '#E74A3B', //!неуспішний колір бордера в інпуті авторизаціі
    saccess: '#3CBC81', //!успішний колір бордера в інпуті авторизаціі
    canceled: '#E5EDFA', //!фон не активних елементів і кнопки Cancel
    canceledNoChanged: '#E5EDFA', //!фон не активних елементів і кнопки Cancel
    textCancelBtnIntodo: '#111111',
    borderDefaultColor: 'rgba(17, 17, 17, 0.15)',
    borderUserForm: 'rgba(17, 17, 17, 0.15)',
    textDisablBtn: '#00000050',
  },
  fontSizes: {
    micro: '10px',
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
    cubicBezier: 'cubic-bezier(0, 0.110, 0.35, 2)',
    duration: '250ms',
  },
  shadows: {
    authHeading:
      '0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035)',
    authButton: '4px 2px 16px rgba(136, 165, 191, 0.48)',
    // 4px 2px 16px rgba(136, 165, 191, 0.3);
  },
});

export const dark = Object.freeze({
  colors: {
    background: '#171820',
    backgroundModalTodo: '#171820',
    backgroundSidebar: '#13151A',
    backgroundUserbar: '#181921',
    backgroundUserForm: '#21222C',
    textAndIconTodo: '#FFFFFF',
    borderModaAddToDo: 'transparent',
    backgroundTextArea: '#171820',
    borderInTextArea: '#FFFFFF15',
    borderInputUserForm: '#FFFFFF15',
    borderTableAndInput: '#FFFFFF15',
    starDisable: '#353647',
    ligthBlue: '#21222C',
    darkBlue: '#3E85F3',
    borderBtnAddTask: 'transparent',
    backColorBtnAddTask: '#3E85F3',
    scrollSwitchHorizont: '#2D3037',
    lineHorizontScroll: '#21222C',
    iconPaginationActive: '#FFFFFF',
    reviewsBackBlue: '#21222C',
    scrollSwitchVertical: '#171820',
    lineSwitchVertical: '#2D3037',
    lineHorizontScrollInTodo: '#2D3037',
    canceled: '#21222C',
    canceledNoChanged: '#E5EDFA',
    canceledInTodo: '#EFEFEF',
    textCancelBtn: '#FFFFFF',
    textMonthDayBtn: '#FFFFFF',
    goose: '#E3F3FF',
    loaderWrapper: '#FFFFFF',
    loaderCircle: ['#FFFFFF', '#3E85F3', '#2B78EF', '#DCE3E560', '#FFFFFF'],
    labelInForm: '#FAFAFA30',
    sidebarTitle: 'rgba(250, 250, 250, 0.3)',
    userNavItem: '#FFFFFF',
    activeUserNavItem: '#FFFFFF',
    backgroundActiveUserNavItem: '#3E85F3',
    userNavIcon: '#FFFFFF',
    activeUserNavIcon: '#FFFFFF',
    sidebarBorder: 'transparent',
    // !не міняються при зміні теми !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    black: '#343434',
    white: '#FFFFFF',
    accent: '#3E85F3', //!основні кнопки, активні елементи, іконки, фон календаря
    hovered: '#2B78EF',
    accentText: '#3E85F320',
    starActive: '#FFAC33', //!жовтий зірок рейтингу
    backgroundAuth: '#DCEBF7', //!фоновий колір пейджа регістраціі та логінізаціі
    lowTask: '#72C2F8', //!найменший пріоритет в тасках і радіокнопки неактивні
    mediumTask: '#F3B249', //!середній пріоритет в тасках і жовтий текст в календарі і радіокнопки неактивні
    highTask: '#EA3D65', //!найвищщий пріоритет в тасках і рожевий текст в календарі і радіокнопки неактивні
    blueInNotes: '#CEEEFD', //!голуба лейба-фон в календарі
    yellowInNotes: '#FCF0D4', //!жовта лейба-фон в календарі
    pinkInNotes: '#FFD2DD', //!рожева лейба-фон в календарі
    borderInput: '#DCE3E560', //!неактивний колір бордера в інпуті авторизаціі
    placegolderAuth: '#DCE3E5', //! колір плейсхолдера в інпуті авторизаціі
    borderInputActive: '#11111110', //!активний колір бордера в інпуті авторизаціі
    failed: '#E74A3B', //!неуспішний колір бордера в інпуті авторизаціі
    saccess: '#3CBC81', //!успішний колір бордера в інпуті авторизаціі
    textCancelBtnIntodo: '#111111',
    borderDefaultColor: 'rgba(17, 17, 17, 0.15)',
    borderUserForm: 'rgba(255, 255, 255, 0.15)',
    textDisablBtn: '#00000050',
  },
  fontSizes: {
    micro: '10px',
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
    authButton: '4px 2px 16px rgba(136, 165, 191, 0.3)',
  },
});
