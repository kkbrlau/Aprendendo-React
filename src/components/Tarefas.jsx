/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function Tasks(props) {
  const navigate = useNavigate();

  function onDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("text", task.text);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <div>
      <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        {props.tasks.map((task) => (
          <li key={task.id} className="flex">
            <button
              onClick={() => props.onTaskClick(task.id)}
              className={`bg-emerald-400 text-white text-left p-2 rounded-md w-full ${
                task.reminder && "line-through"
              }`}
            >
              {task.text}
            </button>

            <button
              onClick={() => onDetailsClick(task)}
              className="bg-emerald-400 text-white p-2 rounded-md ml-4"
            >
              Detalhes
            </button>

            <button
              onClick={() => props.onApagaTaskClick(task.id)}
              className="bg-emerald-400 text-white p-2 rounded-md ml-4"
            >
              Apagar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
