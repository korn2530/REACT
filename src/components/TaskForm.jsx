import React, { useState,useContext } from "react";
import { TaskContext } from "../context/TaskContext";


function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask} = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask(title, description);
    setTitle('')
    setDescription('')
    console.log(valor);
  };


  return (
    <div className="max-w-md mx-auto">
    <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
      <input className="bg-slate-400 p-3 w-full mb-2"
        placeholder="Escribe tu tarea"
        onChange={function (e) {
          setTitle(e.target.value)
        }}
        value={title}
        autoFocus
      />
      <br />
      <br />
      <textarea className="bg-slate-400 p-3 w-full mb-2"
        placeholder="Escribe la descripcion de la tarea"
        onChange={(e) => {
          setDescription(e.target.value)
          
        }}
        value={description}
      ></textarea>
      <br />
      <button className="bg-indigo-500 px-3 text-white">Guardar</button>
    </form>
    </div>
  );
}

export default TaskForm;
