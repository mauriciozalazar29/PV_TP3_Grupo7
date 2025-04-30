import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import ProductManagement from './components/ProductManagement';

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

  const appStyle = {
    textAlign: "center",
    fontFamily: "sans-serif",
    padding: "50px"
  };

  const titleStyle = {
    color: "#f7f7f7",
    backgroundColor: "#2b4c7e",
    padding: "10px",
    borderRadius: "5px"
  };

  return (
    <div style={appStyle}>
      <h1 style={titleStyle}>Lista de Tareas</h1>
      <TaskInput onAdd={addAgregar} />
      <TaskList 
        tasks={agregar} 
        onToggle={toggleAgregar} 
        onDelete={deleteAgregar}
      />
      <ProductManagement></ProductManagement>
    </div>
  );
}

export default App;