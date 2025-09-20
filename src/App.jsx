import TaskList from "./assets/TaskList";
import TaskForm from "./assets/TaskForm";
import { tasks as data } from "./assets/task";
import { useState, useEffect } from "react";


function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);


  return (
    <>
      <TaskForm />
      <TaskList tasks = {tasks}/>

    </>
  );
}

export default App;
