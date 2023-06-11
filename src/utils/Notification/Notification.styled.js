import styled from '@emotion/styled';
import gooseFly from '../../images/others/notification/goose-fly.png';
import gooseOk from '../../images/others/notification/goose-ok.png';
import bone1 from '../../images/others/notification/goose-bone1.png';
import bone2 from '../../images/others/notification/goose-bone2.png';
import gooseHead from '../../images/others/notification/goose-head.png';

export const Container = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 320px;
  min-height: 80px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  z-index: 999;

  background-color: ${({ type, theme }) => {
    switch (type) {
      case 'success':
        return theme.colors.saccess;
      case 'fail':
        return theme.colors.failed;
      case 'info':
        return 'rgb(152, 148, 148)';
      default:
        return 'rgb(152, 148, 148)';
    }
  }};

  //background-image: url(${gooseFly});
  background-image: ${({ type, theme }) => {
    switch (type) {
      case 'success':
        return `url(${gooseOk})`;
      case 'fail':
        return `url(${bone1}), url(${bone2}), url(${gooseHead})`;
      case 'info':
        return `url(${gooseFly})`;
      default:
        return `url(${gooseFly})`;
    }
  }};
  //background-size: auto 40px;
  background-size: ${({ type, theme }) => {
    switch (type) {
      case 'success':
        return `auto 60px`;
      case 'fail':
        return `43px, 43px,35px`;
      case 'info':
        return `auto 50px`;
      default:
        return `auto 40px`;
    }
  }};
  //background-position: 5px center;
  background-position: ${({ type, theme }) => {
    switch (type) {
      case 'success':
        return `13px center`;
      case 'fail':
        return `25px 33px, 25px 33px, 29px 8px`;
      case 'info':
        return `6px center`;
      default:
        return `5px center`;
    }
  }};
  background-repeat: no-repeat;
`;

export const Text = styled.p`
  color: white;
  padding-left: 100px;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
`;
