// TaskList.jsx (Componente para mostrar y borrar tareas)
import React from 'react';
import { useTaskContext } from '../context/TaskContext';

const TaskList = () => {
  const { state, dispatch } = useTaskContext();

  const handleDeleteTask = (taskId) => {
    dispatch({ type: 'DELETE_TASK', payload: taskId });
  };

  return (
    <ul>
      {state.tasks.map(task => (
        <li key={task.id}>
          {task.text}
          <button onClick={() => handleDeleteTask(task.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;