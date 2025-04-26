import React from "react";

function TaskItem({ task, onToggle, onDelete }) {
    return (
        <li>
            <span style={{ textDecoration: task.completada ? "line-through" : "none" }}>
                {task.tarea}
            </span>
            <button onClick={onToggle}>Realizada</button>
            <button onClick={onDelete}>Eliminar</button>
        </li>
    );
}

export default TaskItem;