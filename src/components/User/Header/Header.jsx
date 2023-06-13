import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AddFeedbackModal } from './AddFeedbackModal';
import { ThemeToggler, UserInfo } from '../Header';
import {
  HeaderWrap,
  BtnAddFeedback,
  HeaderTitle,
  MenuBtn,
  /* UserInfoTest */
} from './Header.styled';
import { ReactComponent as BurgerMenu } from '../../../images/svg/burger.svg';
import { LanguageToggler } from './LanguageToggler';
const body = document.querySelector('body');

export const Header = ({ openMobalMenu }) => {
  let locationPath = useLocation().pathname;
  const [isAccPage, setIsAccPage] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);

  const { t } = useTranslation();

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
      <HeaderTitle>
        {isAccPage ? t(`titles.User Profile`) : t(`titles.Calendar`)}
      </HeaderTitle>
      <MenuBtn>
        <BurgerMenu onClick={() => openMobalMenu(true)} />
      </MenuBtn>
      {!isAccPage && (
        <BtnAddFeedback type="button" onClick={onOpenModal}>
          Feedback
        </BtnAddFeedback>
      )}
      <LanguageToggler />
      <ThemeToggler />
      {isShowModal && <AddFeedbackModal onCloseModal={onCloseModal} />}
      {/* <UserInfoTest>User Info</UserInfoTest> */}
      <UserInfo />
    </HeaderWrap>
  );
};
