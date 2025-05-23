import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";

function TaskInput({ onAdd }) {
    const [inputValue, setInputValue] = useState("");

    const handleAdd = () => {
        if (inputValue.trim() !== "") {
            onAdd(inputValue);
            setInputValue("");
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAdd();
        }
    };

    return (
        <div style={{
            display: 'flex',
            gap: '10px',
            marginBottom: '20px',
            width: '100%',
            maxWidth: '600px',
            margin: '0 auto 20px'
        }}>
            <input 
                type="text" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="¿Qué necesitas hacer hoy?" 
                style={{
                    flex: 1,
                    padding: '12px 15px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'border 0.3s',
                }}
                className="task-input"
            />
            <button 
                onClick={handleAdd} 
                style={{
                    backgroundColor: '#2ecc71',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '0 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    opacity: inputValue.trim() ? 1 : 0.7
                }}
                disabled={!inputValue.trim()}
            >
                <FiPlus size={18} />
                <span>Agregar</span>
            </button>
        </div>
    );
}

export default TaskInput;