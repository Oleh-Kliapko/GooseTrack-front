import { useTranslation } from 'react-i18next';
import { ListDay, DayBtn, ItemDay } from './MonthCalendarHead.styled';

export const MonthCalendarHead = () => {
  const { t } = useTranslation();
  const daysString = t(`calendarNames.days`);
  const daysArray = daysString.split(',');

  return (
    <ListDay>
      {daysArray.map((day, i) => (
        <ItemDay key={i} day={day.slice(0, 3)}>
          <DayBtn id={day}>{day.slice(0, 3)}</DayBtn>
        </ItemDay>
      ))}
    </ListDay>
  );
};
