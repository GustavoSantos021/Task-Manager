import { ChevronRight } from "lucide-react";
import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks(props) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => props.onTaskClick(task.id)}
            className={`w-full text-left text-white p-2 rounded-md ${
              task.isCompleted ? "line-through bg-emerald-400" : "bg-slate-400"
            }`}
          >
            {task.title}
          </button>

          <Button onClick={() => onSeeDetailsClick(task)}>
            <ChevronRight />
          </Button>

          <button
            onClick={() => props.onDeleteTaskClick(task.id)}
            className="bg-red-400 text-white p-2 rounded-md"
          >
            <Trash2 />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
