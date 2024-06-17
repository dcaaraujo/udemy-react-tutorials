import { useState } from "react";
import { useProjectStore } from "../state";

export function Tasks({ project }) {
  const { addTask, deleteTask } = useProjectStore();
  const tasks = project.tasks;

  function onNewTaskAdded(newTask) {
    addTask(project, newTask);
  }

  function onTaskDeleted(id) {
    deleteTask(project, id);
  }

  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-stone-700">Tasks</h2>
      <NewTask onAddTask={onNewTaskAdded} />
      {tasks.length === 0 ? (
        <p className="my-4 text-stone-800">
          This project does not have any tasks yet
        </p>
      ) : (
        <ul className="mt-8 rounded-md bg-stone-100 p-4">
          {tasks.map((t) => (
            <li key={t.id} className="my-4 flex justify-between">
              <span>{t.text}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => onTaskDeleted(t.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

function NewTask({ onAddTask }) {
  const [task, setTask] = useState("");

  function onTaskInputChanged(e) {
    const value = e.target.value;
    setTask(value);
  }

  function onAddTaskClicked() {
    if (task.trim().length === 0) {
      return;
    }
    onAddTask(task);
    setTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 rounded-sm bg-stone-200 px-2 py-1"
        onChange={onTaskInputChanged}
        value={task}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={onAddTaskClicked}
      >
        Add Task
      </button>
    </div>
  );
}
