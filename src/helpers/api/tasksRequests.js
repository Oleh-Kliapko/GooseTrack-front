import axios from 'axios';

export async function getTasksForOneMonth(monthNumber) {
    const { data } = await axios.get(`https://calendar-server-g3h0.onrender.com/api/tasks?month=${monthNumber}`);
    return data;
};

export async function getTasksForOneDay(year, monthNumber, day) {
    const { data } = await axios.get(`https://calendar-server-g3h0.onrender.com/api/tasks?year=${year}&month=${monthNumber}&day=${day}`);
    return data;
};