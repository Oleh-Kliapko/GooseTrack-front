import {
  loginSchema,
  registerSchema,
  getPasswordSchema,
} from './authFieldValidation';
import { patterns } from './patterns';
import {
  notification,
  NotificationProvider,
  useNotification,
} from './notification';
import { getMonthDetails, monthNamesArray } from './getMonthDetails';
import { getDateDetails, dayNamesArray, getWeekNumber } from './getDateDetails';
import { validateDate } from './validateDate';
import { getWeekDetails } from './getWeekDetails';
import { calendarType, checkCalendarType } from './checkCalendarType';
import { getWeekDetailsByNumberOfWeek } from './getWeekDetailsByNumberOfWeek';
import {
  getPreviousWeekDate,
  getNextWeekDate,
  getPreviousMonthDate,
  getNextMonthDate,
} from './getChangedDate';
import { getCurrentDate } from './getCurrentDate';
// import { userSchema } from './UserFormValidation';
import { validateUserForm } from './UserFormValidation';

export {
  loginSchema,
  registerSchema,
  getPasswordSchema,
  patterns,
  notification,
  useNotification,
  NotificationProvider,
  getMonthDetails,
  monthNamesArray,
  getDateDetails,
  getWeekNumber,
  dayNamesArray,
  getPreviousWeekDate,
  getNextWeekDate,
  getPreviousMonthDate,
  getNextMonthDate,
  getWeekDetails,
  getWeekDetailsByNumberOfWeek,
  validateDate,
  calendarType,
  checkCalendarType,
  getCurrentDate,
  // userSchema,
  validateUserForm,
};
