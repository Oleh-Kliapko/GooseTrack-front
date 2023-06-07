// change onClickTask

import { DayContainer, Number, NumberContainer, StyledLink, TaskButton, TasksContainer, OverflowContainer } from "./CalendarTableOneDay.styled"
import { ButtonTextContainer } from "./CalendarTableOneDay.styled";
import { ButtonText } from "./CalendarTableOneDay.styled";
import { ButtonDots } from "./CalendarTableOneDay.styled";

export const CalendarTableOneDay = ({date, fullDate, tasks, picked=false, setDate, setType, openTaskModal}) => {

    const dateOfBox = `${fullDate.slice(0,8)}${date.toString().padStart(2,0)}`;
    
    const onClickTask = (e, id) => {
        e.stopPropagation();
        e.preventDefault();
        // functions of opening task modal
        console.log(`Task id: ${id}`);
        openTaskModal(true);

    }

    const onClickLink = () => {
        setDate(dateOfBox);
        setType('day')
    }
    // const notCurrentMonth = () => {

    // }
    
    return(
            <StyledLink onClick={onClickLink} to={`/calendar/day/${dateOfBox}`}>
                <DayContainer>
                    <NumberContainer picked={picked}>
                    <Number picked={picked}>{date}</Number> 
                    </NumberContainer>  
                    <OverflowContainer>
                        <TasksContainer>
                            {tasks.map(task => (
                                    <TaskButton 
                                        key={task._id} 
                                        priority={task.priority}
                                        onClick={(e)=>onClickTask(e, task._id)}
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