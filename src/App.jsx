import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import ProductManagement from './components/ProductManagement';

function App() {
  const [tasks, setTasks] = useState([]);
  
  const addTask = (text) => {
    setTasks([...tasks, { text: text, completed: false }]);
  };
  
  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };
  
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <div className="section">
        <h1 className="section-title">Gestión de Tareas</h1>
        <TaskInput onAdd={addTask} />
        <TaskList 
          tasks={tasks} 
          onToggle={toggleTask} 
          onDelete={deleteTask}
        />
      </div>
      
      <div className="section">
        <ProductManagement />
      </div>
    </div>
  );
}

export default App;