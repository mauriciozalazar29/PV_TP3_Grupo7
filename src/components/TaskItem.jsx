import React from "react";
import { FiCheck, FiTrash2 } from "react-icons/fi";

function TaskItem({ task, onToggle, onDelete }) {
    return (
        <li style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "12px",
            padding: "15px",
            backgroundColor: task.completed ? '#f8f9fa' : '#fff',
            border: "1px solid #e9ecef",
            borderRadius: "8px",
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            transition: 'all 0.3s ease'
        }}>
            <span style={{
                textDecoration: task.completed ? "line-through" : "none",
                color: task.completed ? "#95a5a6" : "#2c3e50",
                flexGrow: 1,
                textAlign: "left",
                wordBreak: "break-word",
                maxWidth: "70%",
                fontSize: '16px'
            }}>
                {task.text}
            </span>
            
            <div style={{ display: 'flex', gap: '8px' }}>
                <button 
                    onClick={onToggle} 
                    style={{
                        backgroundColor: task.completed ? '#bdc3c7' : '#2ecc71',
                        color: 'white',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        padding: '8px 12px'
                    }}
                >
                    <FiCheck size={16} />
                    <span>{task.completed ? 'Deshacer' : 'Completar'}</span>
                </button>
                <button 
                    onClick={onDelete} 
                    style={{
                        backgroundColor: '#e74c3c',
                        color: 'white',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        padding: '8px 12px'
                    }}
                >
                    <FiTrash2 size={16} />
                    <span>Eliminar</span>
                </button>
            </div>
        </li>
    );
}

export default TaskItem;