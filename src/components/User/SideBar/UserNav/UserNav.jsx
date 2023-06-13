import { useTranslation } from 'react-i18next';
import { ReactComponent as UserIcon } from '../../../../images/svg/user-check.svg';
import { ReactComponent as CaledarIcon } from '../../../../images/svg/calendar-check.svg';
import { UserNavWrap, UserNavTitle, UserNavItem } from './UserNav.styled';

export const UserNav = ({ closeMobalMenu }) => {
  const { t } = useTranslation();

      const handleCloseMobalMenu = () => {
        closeMobalMenu(false);
      };
  
  return (
    <UserNavWrap>
      <UserNavTitle>{t(`sidebar.User Panel`)} </UserNavTitle>
      <UserNavItem to="/account" onClick={handleCloseMobalMenu}>
        <UserIcon style={{ marginRight: 8, width: 20, height: 20 }} /> {t(`sidebar.My Account`)}
      </UserNavItem>
      <UserNavItem to="/calendar" onClick={handleCloseMobalMenu}>
        <CaledarIcon style={{ marginRight: 8, width: 20, height: 20 }} />{' '}
        {t(`sidebar.Calendar`)}
      </UserNavItem>
    </UserNavWrap>
  );
};
