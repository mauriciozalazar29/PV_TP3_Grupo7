import React from "react";

function TaskItem({ task, onToggle, onDelete }) {
    const itemStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "8px",
        padding: "6px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        flexWrap: "wrap"
      };
    
      const textStyle = {
        textDecoration: task.completada ? "line-through" : "none",
        color: task.completada ? "#4e4d4a" : "#f7f7f7",
        flexGrow: 1,
        textAlign: "left",
        wordBreak: "break-word",
        maxWidth: "70%",
      };
    
      const buttonStyle1 = {
        backgroundColor: "#057c46",
        marginLeft: "5px",
        padding: "4px 8px",
      
      };
      const buttonStyle2 = {
        backgroundColor: "#991818",
        marginLeft: "5px",
        padding: "4px 8px"
      };
    return (
        <li style={itemStyle}>
            <span style={textStyle}>{task.tarea}</span>
            <button onClick={onToggle} style={buttonStyle1} >Realizada</button>
            <button onClick={onDelete} style={buttonStyle2} >Eliminar</button>
        </li>
    );
}

export default TaskItem;