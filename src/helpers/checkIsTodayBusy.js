import axios from 'axios';
import { setIsTodayBusy } from 'redux/tasks/slice';

export const checkIsTodayBusy = dispatch => {
  const currentDate = new Date().toISOString().slice(0, 10);
  axios
    .get(`https://calendar-server-g3h0.onrender.com/api/tasks`)
    .then(response => {
      const todayTasks = response.data.data.tasksCurrentMonth
        .filter(task => task.date.slice(0, 10) === currentDate)
        .filter(task => task.category !== 'done');
      if (todayTasks.length === 0) {
        dispatch(setIsTodayBusy(false));
      } else {
        dispatch(setIsTodayBusy(true));
      }
    })
    .catch();
};
