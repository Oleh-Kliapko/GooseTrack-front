import { CalendarTableOneDay } from "../CalendarTableOneDay/CalendarTableOneDay";
import { CalendarTableContainer, Week } from "./CalendarTable.styled";
import { useState } from "react";
import { useOutletContext } from "react-router";
import { getWeekDates } from "helpers/getDataForWeek";
import { getWeekNumberr } from "helpers/getCalendarWeeks";
import { TaskModal } from "../../ChoosedDay/TaskModal";


export const CalendarTable = () => {
  const [date, setDate, setType] = useOutletContext();
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const year = date.slice(0,4);
  const month = date.slice(5,7);
  const numberOffirstWeek = getWeekNumberr(parseInt(year, 10), parseInt(month, 10), 1);
  const lastDay = new Date(year, month, 0).getDate();
  const numberOfLastWeek = getWeekNumberr(parseInt(year, 10), parseInt(month, 10), lastDay);
  const getWeekNumbersArray = () => {
    let array = [];
    let weekNumber = numberOffirstWeek;
    do {
      array.push(weekNumber);
      weekNumber +=1;
    } while (weekNumber <= numberOfLastWeek);
    return array;
  };
  const weekNumbersArray = getWeekNumbersArray();
  const daysArray = weekNumbersArray.map(week => {
    return getWeekDates(parseInt(year, 10), parseInt(week, 10));
  });
  const [calendarDays] = useState(daysArray);
  const task1 = [{
    _id: 1213,
    title: "aAaAaAaAaAaAaAaAa",
    priority: "high"
},
{
    _id: 1223,
    title: "dfggg",
    priority: "medium"
},
{
    _id: 1323,
    title: "dfg dfdgdfg dfgf fdgfd dfgd",
    priority: "low"
},
{
    _id: 1523,
    title: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    priority: "high"
},
{
    _id: 1263,
    title: "Lear...",
    priority: "medium"
},
{
    _id: 7123,
    title: "Lear...",
    priority: "low"
}]

const closeTaskModal = () => {
  setIsTaskModalOpen(false);
}

  return (
    <CalendarTableContainer>
        {calendarDays.map((week) => (
          <Week key={week}>
              {week.map(day => (
                <CalendarTableOneDay
                    key={day} 
                    date={day}
                    tasks={task1}
                    picked={(day === parseInt(date.slice(8,10), 10))}
                    setDate={setDate}
                    setType={setType}
                    fullDate={date}
                    openTaskModal={setIsTaskModalOpen}

                />
        ))}
          </Week> 
        ))}
        {isTaskModalOpen && <TaskModal closeModal={closeTaskModal} taskDetails={{
        "_id": "string",
        "title": "string",
        "start": "string",
        "end": "string",
        "priority": "string",
        "date": "2023-06-04T21:10:25.280Z",
        "category": "string",
        "owner": "string",
        "createdAt": "2023-06-04T21:10:25.280Z"
      }} />}
    </CalendarTableContainer>
  );
};
