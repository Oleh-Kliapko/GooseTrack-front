import { useSelector } from 'react-redux';

import { selectIsRefreshingUser, selectUser } from 'redux/auth/selectors';
import {
  StyledLink,
  StyledName,
  StyledAvatarContainer,
  StyledLetter,
  StyledAvatar,
} from './UserInfo.styled';

export const UserInfo = () => {
  const { user } = useSelector(selectUser);
  const isLoading = useSelector(selectIsRefreshingUser);

  const firstLetter =
    user?.username !== null
      ? user.username.trim().slice(0, 1).toUpperCase()
      : '';

  return (
    <StyledLink to="/account">
      <StyledName>{user ? user.username : ''}</StyledName>
      <StyledAvatarContainer>
        {isLoading ? (
          <StyledLetter>{firstLetter}</StyledLetter>
        ) : !user?.avatarURL ? (
          <StyledLetter>{firstLetter}</StyledLetter>
        ) : (
          <StyledAvatar src={user.avatarURL} alt="Avatar" />
        )}
      </StyledAvatarContainer>
    </StyledLink>
  );
};
