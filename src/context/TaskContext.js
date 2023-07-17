import React, {createContext, useReducer, useContext} from "react";

const TaskContext = createContext();

const initialState = {
    tasks: []
}

//Reducer para manejar las acciones relacionadas con las tareas
const taskReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
            tasks: [...state.tasks, action.payload] 
        };

      case 'DELETE_TASK':
        return {
            tasks: state.tasks.filter(task => task.id !== action.payload) 
        };

      default:
        return state;
    }
};

//Custom hook para acceder al estado y dispatch del reducer desde los componentes
const useTaskContext = () =>{
    const context = useContext(TaskContext);
    if(!context){
        throw new Error('uuseTaskContext debe ser utilizado dentro de TaskContextProvider');
    }

    return context;
}

//Componente proveedor que envuelve toda la aplicación
const TaskContextProvider = ({children}) =>{
    const [state,dispatch] = useReducer(taskReducer,initialState);

    return(
        <TaskContext.Provider value={{state,dispatch}}>
            {children}
        </TaskContext.Provider>
    );
};

export { TaskContextProvider, useTaskContext };