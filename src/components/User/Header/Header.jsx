import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AddFeedbackModal } from './AddFeedbackModal';
import { ThemeToggler, UserInfo } from '../Header';
import {
  HeaderWrap,
  BtnAddFeedback,
  HeaderTitle,
  MenuBtn,
  GooseImg,
  BusyText,
  BusySpan,
  HeaderTitleWrap,
} from './Header.styled';
import logo from 'images/others/desktop/goose-calendar1x.png';
import logo2x from 'images/others/desktop/goose-calendar2x.png';
import logo3x from 'images/others/desktop/goose-calendar3x.png';
import { ReactComponent as BurgerMenu } from '../../../images/svg/burger.svg';
import { LanguageToggler } from './LanguageToggler';
import { selectIsTodayBusy } from 'redux/tasks/selectors';
const body = document.querySelector('body');

export const Header = ({ openMobalMenu }) => {
  let locationPath = useLocation().pathname;
  const [isAccPage, setIsAccPage] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);

  const { t } = useTranslation();
  
  const isTodayBusy = useSelector(selectIsTodayBusy);
  console.log('isTodayBusy', isTodayBusy);
  const onCloseModal = () => {
    body.style.overflow = 'auto';
    setIsShowModal(false);
  };
  const onOpenModal = () => {
    body.style.overflow = 'hidden';
    setIsShowModal(true);
  };

  useEffect(() => {
    if (locationPath.includes('account')) {
      setIsAccPage(true);
    } else {
      setIsAccPage(false);
    }
  }, [locationPath]);

  return (
    <HeaderWrap>
      {isTodayBusy && !isAccPage && (
        <GooseImg>
          <source
            media="(min-width: 1440px)"
            srcSet={`${logo} 1x, ${logo2x} 2x, ${logo3x} 3x`}
          />
          <img src={logo} alt="Logo goose" />
        </GooseImg>
      )}
      <HeaderTitleWrap>
        <HeaderTitle>
          {isAccPage ? t(`titles.User Profile`) : t(`titles.Calendar`)}
        </HeaderTitle>
        {isTodayBusy && !isAccPage && (
          <BusyText>
            Let go <BusySpan>of the past and focus on the present!</BusySpan>
          </BusyText>
        )}
      </HeaderTitleWrap>
      <MenuBtn>
        <BurgerMenu onClick={() => openMobalMenu(true)} />
      </MenuBtn>
      {!isAccPage && (
        <BtnAddFeedback type="button" onClick={onOpenModal}>
          {t(`feedback.Feedback`)}
        </BtnAddFeedback>
      )}
      <LanguageToggler />
      <ThemeToggler />
      {isShowModal && <AddFeedbackModal onCloseModal={onCloseModal} />}
      <UserInfo />
    </HeaderWrap>
  );
};
