//TaskFilter.js (Componente para filtrar tareas)
import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';

const TaskFilter = () => {
  const { state } = useTaskContext();
  const [filter, setFilter] = useState('');

  const filteredTasks = state.tasks.filter(task =>
    task.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Filtrar tareas"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filteredTasks.map(task => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskFilter;