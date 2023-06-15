import PropTypes from 'prop-types';
import { BiErrorCircle, BiCheckCircle } from 'react-icons/bi';
import { useTheme } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import {
  InputContainer,
  LabelInput,
  TextInput,
  Input,
  StyledIcon,
  StyledInputNotification,
  StyledDatePicker,
  DatePickWrapper,

} from './UserField.styled';

export const UserField = ({ valid, onChange, value, name, type, placeholder, errorMessage, lableName  }) => {
  const themeColors = useTheme().colors;

  return (
    <div>
      <InputContainer>
          <LabelInput htmlFor={name.toLowerCase()} valid={valid}></LabelInput>
          <TextInput>{lableName}</TextInput>
        <Input
          id={name.toLowerCase()}
          name={name.toLowerCase()}
          lableName={lableName}
          type={type}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          valid={valid}
          
        />
        {valid === false && <StyledIcon><BiErrorCircle color={themeColors.failed} size={20} /></StyledIcon>}
        {valid && <StyledIcon><BiCheckCircle color={themeColors.saccess} size={20} /></StyledIcon>}
      </InputContainer>
      {valid === false && <StyledInputNotification valid={valid}>{errorMessage}</StyledInputNotification>}
    </div>
  );
};


export const BirthdayField = ({ valid, onChange, selected, value, name, type, placeholder, errorMessage, lableName, input,   }) => {
  const themeColors = useTheme().colors;
  const { t } = useTranslation();
  const daysString = t(`calendarNames.days`);
  const monthString = t(`calendarNames.monthes`);
  const days = daysString.split(',');
  const months = monthString.split(',');
  const locale = {
    localize: {
      day: n => t(days[n].slice(0, 1)),
      month: n => t(months[n]),
    },
    formatLong: {
      date: () => 'd MMM yyyy',
    },
  };


  return (
    <div>
      <InputContainer>
                <LabelInput htmlFor="birthday">
                  <TextInput>{t(`accountPage.Birthday`)}</TextInput>
                </LabelInput>
                <DatePickWrapper>
          <StyledDatePicker
          id={name.toLowerCase()}
          name={name.toLowerCase()}
          lableName={t(`accountPage.Birthday`)}
          type={type}
          selected={value}
          placeholder={t(`accountPage.Birthday`)}
          valid={valid}
          input={true}
          onChange={onChange}
          maxDate={new Date()}
          showYearDropdown
          yearDropdownItemNumber={100}
          scrollableYearDropdown
          locale={locale}
                  /> 
                 
                  
        {valid === false && <StyledIcon><BiErrorCircle color={themeColors.failed} size={20} /></StyledIcon>}
          {valid && <StyledIcon><BiCheckCircle color={themeColors.saccess} size={20} /></StyledIcon>}
          </DatePickWrapper>
      </InputContainer>
      {valid === false && <StyledInputNotification valid={valid}>{errorMessage}</StyledInputNotification>}
    </div>
  );
};

UserField.propTypes = {
  valid: PropTypes.oneOf([true, false, null]),
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  lableName: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'email', 'password', 'name', 'date', 'tel']).isRequired,
  placeholder: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
};
