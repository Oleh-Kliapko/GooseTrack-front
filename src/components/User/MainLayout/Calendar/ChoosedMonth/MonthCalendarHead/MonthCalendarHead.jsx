import { dayNamesArray } from 'helpers/calendar';
import { useTranslation } from 'react-i18next';
import { ListDay, DayBtn, ItemDay } from './MonthCalendarHead.styled';

export const MonthCalendarHead = () => {
  const { t } = useTranslation();
  console.log(t(`namesArrays.monthes`));
  console.log(t(`tasks.To do`));
  return (
    <ListDay>
      {dayNamesArray.map((day, i) => (
        <ItemDay key={i}>
          <DayBtn id={day}>{day.slice(0, 3)}</DayBtn>
        </ItemDay>
      ))}
    </ListDay>
  );
};
