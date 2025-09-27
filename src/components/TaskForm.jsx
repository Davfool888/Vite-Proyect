import { useState, useContext} from "react"
import { TaskContext } from "./context/taskContext"

function TaskForm({createTask}) {
    const [title, setTitle] = useState('')
     const [description, setDescription] = useState('')

 const valor =  useContext(TaskContext)
console.log(valor)

const handleSumit = (e) =>{
    e.preventDefault();
    console.log(title, description)
    createTask({
      title, 
      description
    })

    setTitle('')
    setDescription('')
}    


    
  return (
      <form onSubmit={handleSumit}>
        <input placeholder="Escribe tu Tarea "
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
        />
        <textarea placeholder="Escribe descripcion de la tarea"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        ></textarea>
        <button>
            Guardar
        </button>
      </form>
    
  )
}

export default TaskForm
