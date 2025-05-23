import React from 'react';
import  TaskItem  from './TaskItem';

function TaskList({tasks, onToggle, onDelete}){
    return(
        <ul>
            {tasks.map((task, index) => (
                <TaskItem 
                    key={index} 
                    task={task} 
                    ontoggle={() => onToggle(index)} 
                    ondelete={() => onDelete(index)} 
                />
            ))}
        </ul>
    )
}
export default TaskList
