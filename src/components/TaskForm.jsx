import React, {useState} from 'react';
import { useTaskContext } from '../context/TaskContext';

const TaskForm = () => {

    const {dispatch} = useTaskContext();
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () =>{
        if(newTask.trim() !== '' ){
            dispatch({
                type: 'ADD_TASK',
                payload: {
                    id: Date.now(),
                    text: newTask
                }
            });
            setNewTask('');
        }
    };

    return (
        <div>
        <input
            type='text'
            value={newTask}
            onChange={(e) =>
                setNewTask(e.target.value)
            }
        >
        </input>

        <button onClick={handleAddTask}>Agregar tarea</button>            
        </div>
    );
}
export default TaskForm;