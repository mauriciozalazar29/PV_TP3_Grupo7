import React, {useState} from "react";

function TaskInput({onAdd}){
    const [agregar, setagregar] = useState("");

    const handleAdd = () => {
        if (agregar.trim() !== "") {
            onAdd(agregar);
            setagregar("");
        }
    };
    return(
        <div>
            <input type="text" value={agregar} onChange={(e) => setagregar(e.target.value)} placeholder="Nueva tarea" />
            <button onClick={handleAdd}>Agregar</button>
            
        </div>
    )
}
export default TaskInput
