import { Wrapper, Title, Button, Icon } from './ColumnHeadBar.styled';
import Icons from 'images/sprite.svg';

export const ColumnHeadBar = ({ title, handleShowModal }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Button type="button" onClick={handleShowModal}>
        <Icon>
          <use href={`${Icons}#profile-plus-s`}></use>
        </Icon>
      </Button>
    </Wrapper>
  );
};
