import { ReactComponent as UserIcon } from '../../../../images/svg/user-check.svg';
import { ReactComponent as CaledarIcon } from '../../../../images/svg/calendar-check.svg';
import { UserNavWrap, UserNavTitle, UserNavItem } from './UserNav.styled';

export const UserNav = ({ closeMobalMenu }) => {

      const handleCloseMobalMenu = () => {
        closeMobalMenu(false);
      };
  
  return (
    <UserNavWrap>
      <UserNavTitle>User Panel </UserNavTitle>
      <UserNavItem to="/account" onClick={handleCloseMobalMenu}>
        <UserIcon style={{ marginRight: 8, width: 20, height: 20 }} /> My
        account
      </UserNavItem>
      <UserNavItem to="/calendar" onClick={handleCloseMobalMenu}>
        <CaledarIcon style={{ marginRight: 8, width: 20, height: 20 }} />{' '}
        Calendar
      </UserNavItem>
    </UserNavWrap>
  );
};
