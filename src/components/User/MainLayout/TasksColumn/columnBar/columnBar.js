import PropTypes from 'prop-types';
import Icons from './plus.svg';

import { Wrapper, Title, Button, Icon } from './columnBar.styled';

export const ColumnBar = ({ title, handleShowModal }) => {
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


ColumnBar.propTypes = {
  title: PropTypes.string.isRequired,
  handleShowModal: PropTypes.func.isRequired,
};
