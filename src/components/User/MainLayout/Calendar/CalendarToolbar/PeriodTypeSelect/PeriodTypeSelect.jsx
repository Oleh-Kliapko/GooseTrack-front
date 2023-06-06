// import { Item, List, StyledNavLink } from './PeriodTypeSelect.styled';
// import { useLocation } from 'react-router-dom';
// import { format } from 'date-fns';

// export const PeriodTypeSelect = ({ date, type, changeType }) => {
// const location = useLocation();
// const isMonthRoute = location.pathname.includes('month');
// const isDayRoute = location.pathname.includes('day');

// отримує type 3 варіантів ['month', 'day', '']
// чому? тому що є /calendar/ маршрут і він не рендерить нічого нижче тулбару,
// там порожньо поки тут не тицьнуть потрібне і не перенаправлять на один з маршрутів з карент дейт

// навіщо класи? стилізуємо styledComponents

// return (
//   <List>
//     <Item>
//       <StyledNavLink
//         className={`${isMonthRoute ? 'active' : ''} month`}
//         to={`month/${format(date, 'yyyy-MM-dd')}`}
//         onClick={() => changeType('month')}
//       >
//         Month
//       </StyledNavLink>
//     </Item>
//     <Item>
//       <StyledNavLink
//         className={`${isDayRoute ? 'active' : ''} day`}
//         to={`day/${format(new Date(), 'yyyy-MM-dd')}`}
//         onClick={() => changeType('day')}
//       >
//         Day
//       </StyledNavLink>
//     </Item>
//   </List>
// );
// };
import { Item, List, StyledNavLink } from './PeriodTypeSelect.styled';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';

export const PeriodTypeSelect = ({ date, type, changeType }) => {
  const location = useLocation();
  const isMonthRoute = location.pathname.includes('month');
  const isDayRoute = location.pathname.includes('day');

  if (type === '') {
    return null;
  }

  return (
    <List>
      <Item>
        <StyledNavLink
          active={isMonthRoute}
          href={`month/${format(date, 'yyyy-MM-dd')}`}
          onClick={() => changeType('month')}
        >
          Month
        </StyledNavLink>
      </Item>
      <Item>
        <StyledNavLink
          active={isDayRoute}
          href={`day/${format(new Date(), 'yyyy-MM-dd')}`}
          onClick={() => changeType('day')}
        >
          Day
        </StyledNavLink>
      </Item>
    </List>
  );
};
