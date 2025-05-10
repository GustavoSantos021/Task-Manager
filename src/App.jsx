import { useEffect, useState } from "react";
import AddTask from "./assets/components/AddTask";
import Tasks from "./assets/components/tasks";

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  
  useEffect(() => {
    async function fetchTasks() {
      //Call API
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=1', {
      method: 'GET'
    });

    //Catch data
    const data = await response.json()

      //Active to Store/persist data from api
      setTasks(data); 

    }
    fetchTasks();
  }, []);

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja excluir esta tarefa?"
    );
    if (!confirmDelete) return;

    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Task Manager
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
