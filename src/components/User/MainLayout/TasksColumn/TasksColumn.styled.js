import styled from '@emotion/styled';
// import { greaterThan } from 'helpers/breakpoints.styled';

export const TaskColumnsWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px 6px 20px 18px;
  overflow: hidden;

  min-height: 155px;
  max-height: 432px;
  height: fit-content;
  width: 336px;

  border-radius: 8px;
  border:  ${p => p.themes.borders.container};

  font-size: 16px;
  font-weight: ${p => p.themes.fontWeight.sb};
  line-height: 1.12;

  background-color: ${p => p.theme.colors.bgcSecondaryTheme};
  color: ${p => p.theme.colors.textDaysNameAtDaysPage};

  /* ${greaterThan(
    'tablet',
    `
   min-height: 165px;
   max-height: 498px;
   width: 344px;
   padding: 27px 8px 20px 20px;
`
  )}
`; */
