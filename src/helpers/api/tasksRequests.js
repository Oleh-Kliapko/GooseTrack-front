import axios from 'axios';

export async function getTasksByNumberOfMonth(monthNumber) {
    const { data } = await axios.get(`https://calendar-server-g3h0.onrender.com/api/tasks?month=${monthNumber}`);
    return data;
}