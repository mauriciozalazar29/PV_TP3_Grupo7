import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  const [agregar, setAgregar] = useState([]);
  
  const addAgregar = (text) => {
    setAgregar([...agregar, { tarea: text, completada: false }]);
  };
  
  const toggleAgregar = (index) => {
    const updatedAgregar = [...agregar];
    updatedAgregar[index].completada = !updatedAgregar[index].completada;
    setAgregar(updatedAgregar);
  };
  
  const deleteAgregar = (index) => {
    setAgregar(agregar.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <TaskInput onAdd={addAgregar} />
      <TaskList 
        tasks={agregar} 
        onToggle={toggleAgregar} 
        onDelete={deleteAgregar}
      />
    </div>
  );
}

export default App;