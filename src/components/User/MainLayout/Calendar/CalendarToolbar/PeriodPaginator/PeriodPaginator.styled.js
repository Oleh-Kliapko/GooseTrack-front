import styled from '@emotion/styled';
import { device } from 'styles/mediaVeriables';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const WrapperPaginator = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${device.tabletBefore} {
    margin-bottom: 18px;
  }
  @media ${device.tablet} {
    justify-content: start;
    gap: 8px;
  }
`;

export const DatePickWrapper = styled.div`
  .react-datepicker {
    position: absolute;
    background-color: ${({ theme }) => theme.colors.accent};
    border-radius: 16px;
    color: ${({ theme }) => theme.colors.white};
    overflow: hidden;
    border: none;
    /* width: ${({ type }) => (type === 'month' ? '280px' : '320px')}; */
    display: flex;
    justify-content: center;
    font-size: ${({ theme }) => theme.fontSizes.l};
    line-height: 1.3;
    text-transform: uppercase;

    @media ${device.tablet} {
      /* width: ${({ type }) => (type === 'month' ? '330px' : '370px')}; */
      font-size: ${({ theme }) => theme.fontSizes.xl};
      line-height: 1.3;
    }
    border-color: ${({ theme }) => theme.colors.textCancelBtnIntodo};
    &__header {
      background-color: ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.white};
    }
    &__navigation--previous {
      left: 10px;
    }
    &__navigation--next {
      right: 10px;
    }
    &__navigation-icon::before {
      border-color: ${({ theme }) => theme.colors.white};
      border-style: solid;
      border-width: 3px 3px 0 0;
      content: '';
      z-index: 1;
      display: block;
      height: 14px;
      width: 14px;
      position: absolute;
      top: 8px;
    }
    &__month-text {
      border-radius: 10px;
      &:hover {
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.accent};
      }
    }
    &__month {
      display: ${({ type }) => type === 'month' && 'flex'};
      flex-direction: column;
      gap: 16px;
    }
    &__month-wrapper {
      display: ${({ type }) => type === 'month' && 'flex'};
      flex-direction: row;
      gap: 16px;
    }
    &__day {
      color: ${({ theme }) => theme.colors.white};
      margin: 4px;
      &:hover {
        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.accent};
      }
      &--weekend {
        opacity: 40%;
      }

      &--selected,
      &--keyboard-selected,
      &--today {
        border-radius: 50%;
        opacity: 1;
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.accent};
      }
      &--selected {
        color: ${({ theme }) => theme.colors.black};
      }
    }
    &__day-names {
      display: flex;
      justify-content: space-around;
    }
    &__day-name {
      color: ${({ theme }) => theme.colors.white};
      overflow: hidden;
      width: 0.69em;
      :nth-of-type(1) {
        width: 15px;
      }
      :nth-of-type(2) {
        width: 11px;
      }
      :nth-of-type(3) {
        width: 17px;
        @media ${device.tablet} {
          width: 19px;
        }
      }
      :nth-of-type(4) {
        width: 11px;
      }
      :nth-of-type(5) {
        width: 11px;
      }
      :nth-of-type(6) {
        width: 0.64em;
      }
    }

    &__current-month {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
export const DatePicka = styled(DatePicker)`
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.accent};
  box-shadow: ${({ theme }) => theme.shadows.authButton};
`;

export const ChooseDayBtn = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.accent};
  box-shadow: ${({ theme }) => theme.shadows.authButton};
  transition-property: background-color;
  transition-duration: ${({ theme }) => theme.animations.duration};
  transition-timing-function: ${({ theme }) => theme.animations.cubicBezier};
  &:hover {
    background-color: ${({ theme }) => theme.colors.hovered};
  }
  @media ${device.tablet} {
    padding: 8px 12px;
  }
`;

export const DateLabel = styled.time`
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeight.b};
  line-height: 1.3;
  text-transform: uppercase;
  @media ${device.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.m};
    line-height: 1.1;
  }
`;

export const WrapperPeriodBtn = styled.div``;
