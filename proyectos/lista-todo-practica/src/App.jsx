// src/components/TaskList.js
import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FormTask from "./components/FormTask";
import SearchTask from "./components/SearchTask";

function App() {

  //Estado para guardar las tareas
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('itemsTodo')) || []);
  //Estado para controlar si el modal está abierto o cerrado
  const [isModalOpen, setIsModalOpen] = useState(false);
  //Estado para guardar la tarea que se está editando
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);

  const [search, setSearch] = useState('');
  
  //Metodo para añadir tarea
  const addTask = (task) => {
    if(task === '') return alert('Ingresa una tarea');
    const newTask = {
      id: crypto.randomUUID(),
      text: task,
      done: false,
    }
    setTasks([newTask, ...tasks]);
  };

  //Metodo para editar tarea
  const editTask = (editedTask, id) => {
    const updatedTasks = [...tasks]
    updatedTasks.map((task)=>{
      if(task.id === id){
        task.text = editedTask;
        setIsModalOpen(false);
      }
    })
    setTasks(updatedTasks);
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
  };

  //Metodo para marcar tarea como completada
  const handleCheck = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  //Cada vez que se actualice el estado de las tareas, se guarda en el localStorage
  useEffect(() => {
    localStorage.setItem('itemsTodo', JSON.stringify(tasks));
  },[tasks])


  return (
    <div className="app">
      <Header />
      <SearchTask 
        search={search} 
        setSearch={setSearch} />
      <FormTask addTask={addTask} />
      <Content
        deleteTask={deleteTask}
        tasks={tasks.filter((task) => task.text.toLowerCase().includes(search.toLowerCase()))}
        handleCheck={handleCheck} 
        openEditModal={openEditModal}
        />
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