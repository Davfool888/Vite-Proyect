import { useState } from "react"


function TaskForm() {
    const [title, setTitle] = useState('')

const handleSumit = (e) =>{
    e.preventDefault();
    console.log(title)
}    
    
  return (
      <form onSubmit={handleSumit}>
        <input placeholder="Escribe tu Tarea "
        onChange={(e) => setTitle(e.target.value)}
        />
        <button>
            Guardar
        </button>
      </form>
    
  )
}

export default TaskForm
