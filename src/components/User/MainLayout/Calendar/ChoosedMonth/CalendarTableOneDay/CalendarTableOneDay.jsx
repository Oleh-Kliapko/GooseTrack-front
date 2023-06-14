import { useDispatch, useSelector } from "react-redux";
import { selectChoosedDate, selectMonthTasks } from "redux/tasks/selectors";
import { setCalendarType, setChoosedDate, setCurrentTask, setIsCurrentTaskEditing, setIsTaskModalOpen } from "redux/tasks/slice";
import { ButtonText, ButtonDots, ButtonTextContainer, DayContainer, Number, NumberContainer, StyledLink, TaskButton, TasksContainer, OverflowContainer } from "./CalendarTableOneDay.styled"

export const CalendarTableOneDay = ({date, picked=false, month}) => {
    const dispatch = useDispatch();

    const fullDate = useSelector(selectChoosedDate);
    // const dateOfBox = `${fullDate.slice(0,8)}${date.toString().padStart(2,0)}`;
    const dateOfBox = `${month}-${date.toString().padStart(2,0)}`;

    const monthTasks = useSelector(selectMonthTasks).filter(task => task.category !== 'done');
    const tasksForThisDate = monthTasks?.filter(task => task.date.slice(0,10) === `${fullDate.slice(0,8)}${date.toString().padStart(2,0)}`);
    const tasksForThisDateDependthOnMonth = tasksForThisDate.filter(task => task.date.slice(0,7) === month);
    const onClickTask = (e, task) => {
        e.stopPropagation();
        e.preventDefault();
        dispatch(setIsCurrentTaskEditing(true));
        dispatch(setCurrentTask(task));
        dispatch(setIsTaskModalOpen(true));
    };

    const onClickDate = () => {
        dispatch(setChoosedDate(dateOfBox));
        dispatch(setCalendarType('day'));
    };
    
    return(
        <StyledLink onClick={onClickDate} to={`/calendar/day/${dateOfBox}`}>
            <DayContainer>

                <NumberContainer picked={picked}>
                    <Number picked={picked}>{date}</Number> 
                </NumberContainer>  

                <OverflowContainer>
                    <TasksContainer>
                        {tasksForThisDateDependthOnMonth?.map(task => (
                                <TaskButton 
                                    key={task._id} 
                                    priority={task.priority}
                                    onClick={(e)=>onClickTask(e, task)}
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