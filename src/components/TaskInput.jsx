import React, { useState } from "react";

function TaskInput({ onAdd }) {
    const [agregar, setAgregar] = useState("");

    const handleAdd = () => {
        if (agregar.trim() !== "") {
            onAdd(agregar);
            setAgregar("");
        }
    };
    
    return (
        <div>
            <input 
                type="text" 
                value={agregar} 
                onChange={(e) => setAgregar(e.target.value)} 
                placeholder="Nueva tarea" 
            />
            <button onClick={handleAdd}>Agregar</button>
        </div>
    );
}

export default TaskInput;