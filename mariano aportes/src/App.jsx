import React, { useState } from 'react';
import TaskInput from './componentes/TaskInput';

import TaskList from './componentes/TaskList';

function App(){
  const [agregar, setAgregar] = useState([]);

  const addAgregar =(Text) => {
    setAgregar([...agregar,{tarea: Text ,completada: false}]);
  };  

  const toggleCompletada = (index) => {
    const updateAgregar = [...agregar];
    updateAgregar[index].completada = !updateAgregar[index].completada;
    setAgregar(updateAgregar);
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
          onToggle={toggleCompletada} 
          onDelete={deleteAgregar}
        
        />
        
    </div>
    
  );
}

export default App;
