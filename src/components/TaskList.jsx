import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onToggle, onDelete }) {
    const listStyle = {
        listStyle: "none",
        padding: "0",
        maxWidth: "600px",
        margin: "0 auto",
        marginTop: "1rem"
    };

    return (
        <ul style={listStyle}>
            {tasks.map((task, index) => (
                <TaskItem 
                    key={index} 
                    task={task} 
                    onToggle={() => onToggle(index)} 
                    onDelete={() => onDelete(index)} 
                />
            ))}
        </ul>
    );
}

export default TaskList;