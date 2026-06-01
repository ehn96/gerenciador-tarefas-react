import { Check, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onTrashClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 flex-col rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`flex gap-2 wrap-anywhere w-full  text-white p-2 flexrounded-md cursor-pointer ${task.isCompleted ? " bg-slate-800" : "bg-slate-400"}`}
          >
            {task.isCompleted && <Check className="shrink-0 " />}
            {task.title}
          </button>
          <Button
            onClick={() => onSeeDetailsClick(task)}
            className="bg-slate-400 text-white p-2 rounded-md cursor-pointer "
          >
            <ChevronRightIcon />
          </Button>
          <Button
            onClick={() => onTrashClick(task.id)}
            className="bg-slate-400 p-2 rounded-md text-white cursor-pointer"
          >
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
