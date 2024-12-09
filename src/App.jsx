import { useEffect, useState } from "react";
import "./App.css";
import Add from "./components/AddTask";
import Tasks from "./components/Tarefas";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  /*[ primeiro eu faço isso depois faço o local storage
    {
      id: 1,
      text: "Limpar a casa",
      day: "08/12/2024",
      reminder: false,
    },

    {
      id: 2,
      text: "Estudar",
      day: "08/12/2024",
      reminder: false,
    },
    {
      id: 3,
      text: "Treinar",
      day: "08/12/2024",
      reminder: false,
    },
])
    */ //Salvando as alterações no localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)); //esse segundo parâmentro serve para converter meus objetos em json
  }, [tasks]);

  function onAddTaskClick(text) {
    const newTasks = {
      id: tasks.length + 1,
      text: text,
      day: "08/12/2024",
      reminder: false,
    };

    setTasks([...tasks, newTasks]);
  }

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, reminder: !task.reminder };
      } else {
        return task;
      }
    });
    setTasks(newTasks);
  }

  function onApagaTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  return (
    <div className=" w-full h-screen bg-emerald-400 flex justify-center p-6">
      <div className="w[500px] space-y-2">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de tarefas
        </h1>
        <Add onAddTaskClick={onAddTaskClick} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onApagaTaskClick={onApagaTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
