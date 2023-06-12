import { forwardRef } from 'react';
import { DatePickerButton } from './ChooseDayInput.styled';

export const ChooseDayInput = forwardRef(({ value, onClick }, ref) => (
  <DatePickerButton onClick={onClick} ref={ref}>
    {value}
  </DatePickerButton>
));
