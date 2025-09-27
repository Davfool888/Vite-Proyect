import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { tasks as data } from "./data/task";
import { useState, useEffect } from "react";


function App() {
  

  return (
    <>
      <TaskForm/>
      <TaskList/>

    </>
  );
}

export default App;
