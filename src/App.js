import React from 'react';
import './App.css';
import {TaskContextProvider} from './context/TaskContext'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskFilter from './components/TaskFilter'


function App() {
  return (
    <TaskContextProvider>
      <TaskForm></TaskForm>
      <TaskList></TaskList>
      <TaskFilter></TaskFilter>
      
    </TaskContextProvider>
  );
}

export default App;
