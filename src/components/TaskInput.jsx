import React, { useState } from "react";

function TaskInput({ onAdd }) {
    const [agregar, setAgregar] = useState("");

    const handleAdd = () => {
        if (agregar.trim() !== "") {
            onAdd(agregar);
            setAgregar("");
        }
    };
    const containerStyle = {
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        margin: "20px 0",
        padding: "10px"
      };
    
      const inputStyle = {
        padding: "8px",
        width: "200px"
      };
    
      const buttonStyle = {
        padding: "8px 12px",
        cursor: "pointer"
      };
    return (
        <div style={containerStyle}>
            <input 
                type="text" 
                value={agregar} 
                onChange={(e) => setAgregar(e.target.value)} 
                placeholder="Nueva tarea" 
                style={inputStyle}
            />
            <button onClick={handleAdd} style={buttonStyle}>Agregar</button>
        </div>
    );
}

export default TaskInput;