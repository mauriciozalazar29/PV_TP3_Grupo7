import React from "react";

function TaskItem({task, ontoggle, ondelete}){
    return(
        <li>
            
            <span style={{textDecoration: task.completada ? "line-through" : "none"}}>
                {task.tarea}
            </span>
            <button onClick={ontoggle} style={{marginRight:"15px"}}>Realizada</button>
            <button onClick={ondelete}>Eliminar</button>
        </li>
    )
}
export default TaskItem
