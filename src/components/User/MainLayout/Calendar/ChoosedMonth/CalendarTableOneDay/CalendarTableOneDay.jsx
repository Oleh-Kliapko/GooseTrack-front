// change onClickTask

import { useDispatch } from "react-redux";
import { DayContainer, Number, NumberContainer, StyledLink, TaskButton, TasksContainer, OverflowContainer } from "./CalendarTableOneDay.styled"
import { ButtonTextContainer } from "./CalendarTableOneDay.styled";
import { ButtonText } from "./CalendarTableOneDay.styled";
import { ButtonDots } from "./CalendarTableOneDay.styled";
import { setChoosedDate, setCurrentTask } from "redux/tasks/operations";

export const CalendarTableOneDay = ({date, fullDate, tasks, picked=false, setDate, setType, openTaskModal}) => {

    const dateOfBox = `${fullDate.slice(0,8)}${date.toString().padStart(2,0)}`;
    const tasksForThisDate = tasks.filter(task => task.date.slice(0,10) === `${fullDate.slice(0,8)}${date.toString().padStart(2,0)}`);
    const dispatch = useDispatch();
    

    const onClickTask = async (e, id, task) => {
        e.stopPropagation();
        e.preventDefault();
        // functions of opening task modal
        await dispatch(setCurrentTask(task));
        console.log(`Task id: ${id}`);
        openTaskModal(true);

    }

    const onClickLink = () => {
        setDate(dateOfBox);
        dispatch(setChoosedDate(dateOfBox));
        setType('day')
    }
    
    return(
            <StyledLink onClick={onClickLink} to={`/calendar/day/${dateOfBox}`}>
                <DayContainer>
                    <NumberContainer picked={picked}>
                    <Number picked={picked}>{date}</Number> 
                    </NumberContainer>  
                    <OverflowContainer>
                        <TasksContainer>
                            {tasksForThisDate.map(task => (
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