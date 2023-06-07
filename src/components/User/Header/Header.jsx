import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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

export const Header = ({ openMobalMenu }) => {
  let locationPath = useLocation().pathname;
  const [isAccPage, setIsAccPage] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);

  const onCloseModal = () => setIsShowModal(false);

  useEffect(() => {
    if (locationPath.includes('account')) {
      setIsAccPage(true);
    } else {
      setIsAccPage(false);
    }
  }, [locationPath]);

  return (
    <HeaderWrap>
      <HeaderTitle>{isAccPage ? 'User Profile' : 'Calendar'}</HeaderTitle>
      <MenuBtn>
        <BurgerMenu onClick={() => openMobalMenu(true)} />
      </MenuBtn>
      {!isAccPage && (
        <BtnAddFeedback type="button" onClick={() => setIsShowModal(true)}>
          Feedback
        </BtnAddFeedback>
      )}
      <ThemeToggler />
      {isShowModal && <AddFeedbackModal onCloseModal={onCloseModal} />}
      {/* <UserInfoTest>User Info</UserInfoTest> */}
      <UserInfo />
    </HeaderWrap>
  );
};
