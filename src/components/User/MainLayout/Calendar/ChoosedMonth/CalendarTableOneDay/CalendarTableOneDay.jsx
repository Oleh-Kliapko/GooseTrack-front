import { useDispatch, useSelector } from "react-redux";
import { DayContainer, Number, NumberContainer, StyledLink, TaskButton, TasksContainer, OverflowContainer } from "./CalendarTableOneDay.styled"
import { ButtonTextContainer } from "./CalendarTableOneDay.styled";
import { ButtonText, ButtonDots } from "./CalendarTableOneDay.styled";
import { setCurrentTask } from "redux/tasks/operations";
import { selectChoosedDate, selectMonthTasks } from "redux/tasks/selectors";
import { setCalendarType, setChoosedDate } from "redux/tasks/slice";

export const CalendarTableOneDay = ({date, picked=false}) => {
    const fullDate = useSelector(selectChoosedDate);
    const dateOfBox = `${fullDate.slice(0,8)}${date.toString().padStart(2,0)}`;

    const monthTasks = useSelector(selectMonthTasks);
    const tasksForThisDate = monthTasks?.filter(task => task.date.slice(0,10) === `${fullDate.slice(0,8)}${date.toString().padStart(2,0)}`);

    const dispatch = useDispatch();
    

    const onClickTask = (e, id, task) => {
        e.stopPropagation();
        e.preventDefault();
        // functions of opening task modal
        // dispatch(setCurrentTask(task));
        console.log(`Task id: ${id}`);
        // openTaskModal(true);

    }

    const onClickLink = () => {
        dispatch(setChoosedDate(dateOfBox));
        dispatch(setCalendarType('day'));
    }
    
    return(
            <StyledLink onClick={onClickLink} to={`/calendar/day/${dateOfBox}`}>
                <DayContainer>
                    <NumberContainer picked={picked}>
                    <Number picked={picked}>{date}</Number> 
                    </NumberContainer>  
                    <OverflowContainer>
                        <TasksContainer>
                            {tasksForThisDate?.map(task => (
                                    <TaskButton 
                                        key={task._id} 
                                        priority={task.priority}
                                        onClick={(e)=>onClickTask(e, task._id, task)}
                                    >   
                                        <ButtonTextContainer>
                                            <ButtonText>{task.title}</ButtonText>
                                        </ButtonTextContainer>
                                        <ButtonDots length={task.title.length}>...</ButtonDots>
                                        
                                    </TaskButton>
                                ))  
                            }
                        </TasksContainer> 
                    </OverflowContainer>
                </DayContainer>
            </StyledLink>
        
    )
}