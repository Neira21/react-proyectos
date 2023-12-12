// src/components/TaskList.js
import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FormTask from "./components/FormTask";
import SearchTask from "./components/SearchTask";

import apiRequest from './apiRequest.js';

function App() {

  const API_URL = 'http://localhost:3500/items'

  //Estado para guardar las tareas
  const [tasks, setTasks] = useState([]);
  //Estado para controlar si el modal está abierto o cerrado
  const [isModalOpen, setIsModalOpen] = useState(false);
  //Estado para guardar la tarea que se está editando
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);

  const [search, setSearch] = useState('');

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

//Cada vez que se actualice el estado de las tareas, se guarda en el localStorage
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if(!response.ok) throw new Error('Error en la petición');
        const data = await response.json();
        setTasks(data);  
        setError(null);
      } catch (err) {
        setError(err.message);
      }
      finally{
        setIsLoading(false);
      }
    }
    setTimeout(() => {
      fetchData();
    }, 2000)    
  },[])


  //Metodo para añadir tarea
  const addTask = async (task) => {
    if(task === '') return alert('Ingresa una tarea');
    const newTask = {
      id: crypto.randomUUID(),
      text: task,
      done: false,
    }
    setTasks([newTask, ...tasks]);

    const postRequest = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTask)
    }
    const result = await apiRequest(API_URL, postRequest);
    if(result) setError(result);

  };

  //Metodo para editar tarea
  const editTask = async (editedTask, id) => {
    if(editedTask !== '') {
      console.log('entra a cambiar el texto de la tarea')
      const updatedTasks = tasks.map((task) => task.id === id ? {...task, text: editedTask} : task )
      setIsModalOpen(false)
      setTasks(updatedTasks)

      //Para actualizar en el servidor
      const myItem = updatedTasks.filter((task) => task.id === id);
      const updateOptionsDone = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({text: myItem[0].text})
      }

      const reqUrl = `${API_URL}/${id}`;
      const result = await apiRequest(reqUrl, updateOptionsDone);
      if(result) setError(result);


    }else{
      console.log('entra a editar estado de completado de tarea')
      const updatedTasks = tasks.map((task) => task.id === id ? {...task, done: !task.done} : task)
      setTasks(updatedTasks);

      //Para actualizar en el servidor
      const myItem = updatedTasks.filter((task) => task.id === id);
      const updateOptionsTask = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({done: myItem[0].done})
      };
      const reqUrl = `${API_URL}/${id}`;
      const result = await apiRequest(reqUrl, updateOptionsTask);
      if(result) setError(result);
    }
  };

  //Metodo para abrir el modal en modo edición
  const openEditModal = (index) => {
    setIsModalOpen(true);
    setEditingTaskIndex(index);
  };

  //Metodo para eliminar tarea
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);

    //Para eliminar del servidor
    const deleteOptions = {
      method: 'DELETE',
    };
    const reqUrl = `${API_URL}/${id}`;
    apiRequest(reqUrl, deleteOptions);
  };

  return (
    <div className="app">
      <Header />
      <SearchTask 
        search={search} 
        setSearch={setSearch} />
      <FormTask addTask={addTask} />
      <main style={{textAlign:'center'}}>
        {isLoading && <p>Cargando...</p>}
        {error && <p style={{color:'red'}}>Error : {error}</p>}
        {!error && !isLoading && <Content
          deleteTask={deleteTask}
          tasks={tasks.filter((task) => task.text.toLowerCase().includes(search.toLowerCase()))}
          openEditModal={openEditModal}
          editTask={editTask}
          /> 
        }
      </main>
      {
      isModalOpen && 
      <Modal 
        onClose={() => {
          setIsModalOpen(false);
          setEditingTaskIndex(null);
        }}
        editingTaskIndex={editingTaskIndex}
        editTask={editTask}
      />}
      
      <Footer searchCount={tasks.length} />
      
    </div>
  );
}

export default App;




/*
//useReducer
  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD TASK':
        return [...state, action.payload];
      case 'DELETE TASK':
        return state.filter((task) => task.id !== action.payload);
      case 'EDIT TASK':
        return state.map((task) => {
          if (task.id === action.payload.id) {
            return {
              ...task,
              text: action.payload.text,
            };
          }
          return task;
        });
      case 'CHECK TASK':
        return state.map((task) => {
          if (task.id === action.payload) {
            return {
              ...task,
              done: !task.done,
            };
          }
          return task;
        });
      default:
        return state;
    }
  };

  const [ state, dispatch ] = useReducer(reducer, []); 
  */