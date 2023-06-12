import styled from '@emotion/styled';
import { device } from 'styles/mediaVeriables';

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 155px;
  width: 100%;
  padding: 18px 18px 20px;
  background: ${({ theme }) => theme.colors.backgroundUserForm};
  border: 1px solid ${({ theme }) => theme.colors.borderTableAndInput};
  border-radius: 8px;
  @media ${device.tablet} {
    padding: 20px;
  }

  @media ${device.desktopBefore} {
    display: ${({index, display}) => {
      switch(display) {
        case 'left':
          switch(index) {
            case 0:
              return 'block';
            case 1:
              return 'block';
            case 2:
              return 'none';
            default:
              return;
          }
 
        case 'middle':
          switch(index) {
            case 0:
              return 'none';
            case 1:
              return 'block';
            case 2:
              return 'block';
            default:
              return;
          }

        case 'right':
          switch(index) {
            case 0:
              return 'none';
            case 1:
              return 'block';
            case 2:
              return 'block';
            default:
              return;
          }

        default:
          return;
      }
    }};
  }


  @media ${device.tabletBefore} {
    display: ${({index, display}) => {
      switch(display) {
        case 'left':
          switch(index) {
            case 0:
              return 'block';
            case 1:
              return 'none';
            case 2:
              return 'none';
            default:
              return;
          }
 
        case 'middle':
          switch(index) {
            case 0:
              return 'none';
            case 1:
              return 'block';
            case 2:
              return 'none';
            default:
              return;
          }

        case 'right':
          switch(index) {
            case 0:
              return 'none';
            case 1:
              return 'none';
            case 2:
              return 'block';
            default:
              return;
          }
          
        default:
          return;
      }
    }};
  }
`;
