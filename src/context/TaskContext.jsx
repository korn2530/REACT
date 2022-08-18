import { createContext, useState ,useEffect} from "react";
import {task as data} from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [task, setTask] = useState([]);

  function createTask(taskTitle, taskDescription) {
    setTask([
      ...task,
      {
        title: taskTitle,
        id: task.length,
        description: taskDescription,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTask(task.filter((task) => task.id !== taskId));
    console.log(taskId);
    console.log(task);
  }

  useEffect(() => {
    setTask(data);
  }, []);

  return <TaskContext.Provider value={{
    task: task,
    createTask: createTask,
    deleteTask: deleteTask
  }}>{props.children}</TaskContext.Provider>;
}
