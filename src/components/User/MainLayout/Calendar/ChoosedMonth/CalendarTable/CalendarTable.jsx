import { getMonthDetails } from "helpers";
import { CalendarTableOneDay } from "../CalendarTableOneDay/CalendarTableOneDay";
import { CalendarTableContainer, Week } from "./CalendarTable.styled";

export const CalendarTable = () => {

  const currentDate = '2023-06-04';
  // const amounOfDays = getMonthDetails(currentDate).amountOfDays;
  // const amountOfWeeks = getMonthDetails(currentDate).amountOfWeeks;
  const numberOffirstWeek = getMonthDetails(currentDate).numberOfFirstWeek;
  const numberOfLastWeek = getMonthDetails(currentDate).numberOfLastWeek;
  const getWeeksArray = () => {
    let array = [];
    let weekNumber = numberOffirstWeek;
    do {
      array.push(weekNumber);
      weekNumber +=1;
    } while (weekNumber <= numberOfLastWeek);
    return array;
  };
  const weeksArray = getWeeksArray();

  // console.log(`дата ${currentDate}`);
  // console.log(`днів ${amounOfDays}`);
  // console.log(`тижнів ${amountOfWeeks}`);
  // console.log(`номе першого тижня ${numberOffirstWeek}`);
  // console.log(`номе останнього тижня ${numberOfLastWeek}`);
  // console.log(`масив тижнів ${weeksArray}`);

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
  // const daysArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  const oneWeekArray = [1, 2, 3, 4, 5, 6, 7];

  return (
    <CalendarTableContainer>
        {weeksArray.map((week) => (
          <Week key={week}>
              {oneWeekArray.map(day => (
                <CalendarTableOneDay
                    key={day} 
                    date={day}
                    tasks={task1}
                />
        ))}
          </Week> 
        ))}
    </CalendarTableContainer>
  );
};
