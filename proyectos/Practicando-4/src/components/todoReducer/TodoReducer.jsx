import { useReducer, useState } from "react"
import useForm from "../../hooks/useForm"
import ModalTodoReducer from "./ModalTodoReducer"
import FormularioTodoReducer from "./FormularioTodoReducer"
import ListaTodoReducer from "./ListaTodoReducer"

const initialState = [
  {
    id: Date.now(),
    tarea: 'Comprar pan',
    finalizada: false
  },
  {
    id: Date.now() + 1,
    tarea: 'Comprar leche',
    finalizada: false
  },
  {
    id: Date.now() + 2,
    tarea: 'Comprar huevos',
    finalizada: false
  }
]

const tareaReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload]
    case 'EDIT_TODO':
      return state.map(tarea => {
        if (tarea.id === action.payload.id) {
          return { ...tarea, tarea: action.payload.nuevaTarea };
        }
        return tarea;
      });
    case 'DELETE_TODO':
      return state.filter(tarea => tarea.id !== action.payload)
    case 'DELETE_ALL_TODO':
      return []
    case 'TOGGLE_TODO':
      return state.map(tarea => tarea.id === action.payload ? {...tarea, finalizada: !tarea.finalizada} : tarea)
    default:
      return state
  }
}

const TodoReducer = () => {
  const [state, dispatch] = useReducer(tareaReducer, initialState)
  const {tarea, formState, InputChange} = useForm({tarea:''})
  
  const [tareaEditar, setTareaEditar] = useState('');
  const [tareaIdEditar, setTareaIdEditar] = useState('');



  const [modal, setModal] = useState(false)

  //Método para Abrir y cerrar Modal
  const handleClose = () => 
  {
    setModal(false)
    setTareaEditar('');
    setTareaIdEditar('');
    
  };

  // Metodos para gestionar Tareas

  const onEdit = (nuevaTarea) => {
    if (tareaIdEditar !== '') {
      console.log('Editando tarea', tareaIdEditar, nuevaTarea)
      dispatch({
        type: 'EDIT_TODO',
        payload: { id: tareaIdEditar, nuevaTarea }
      });
      setTareaIdEditar('');
    }
    //InputChange({ target: { name: 'tarea', value: '' } }); // Limpiar el input después de enviar la tarea
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (tarea === '' || tarea.length < 2) return console.log('No hay tarea');
    console.log('Agregando tarea', tarea)
    const newTarea = {
      id: Date.now(),
      tarea: formState.tarea,
      finalizada: false
    };
    dispatch({
      type: 'ADD_TODO',
      payload: newTarea
    });
  }

  const finalizarTarea = (item) => {
    dispatch({
      type: 'TOGGLE_TODO',
      payload: item.id
    })
    console.log(item)
  }

  const actualizarTarea = (item) => {
    setTareaEditar(item.tarea); // Establecer la tarea a editar en el estado
    setTareaIdEditar(item.id);
    setModal(true)
    console.log('Editando tarea', item)
  }

  const borrarTarea = (id) => {
    dispatch({
      type: 'DELETE_TODO',
      payload: id
    })
  }

  const borrarTodasTareas = () => {
    dispatch({
      type: 'DELETE_ALL_TODO'
    })
  }


  return (
    <>
      <FormularioTodoReducer
        onSubmit={onSubmit}
        InputChange={InputChange}
        tarea={tarea}
      />
      <hr />
      <ListaTodoReducer
        state={state}
        finalizarTarea={finalizarTarea}
        borrarTarea={borrarTarea}
        actualizarTarea={actualizarTarea}
        borrarTodasTareas={borrarTodasTareas}
      />
      
      <ModalTodoReducer 
        modal={modal}
        handleClose={handleClose}
        tareaEditar={tareaEditar} // Pasar la tarea a editar al modal
        onEdit={onEdit}
      />

    </>
  )
}

export default TodoReducer