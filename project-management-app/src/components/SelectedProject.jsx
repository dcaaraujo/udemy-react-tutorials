import { useProjectStore } from "../state";
import { Tasks } from "./Tasks";

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function SelectedProject() {
  const { currentlySelectedProject, deleteProject } = useProjectStore();
  const project = currentlySelectedProject();

  return (
    <div className="mt-16 w-[35rem]">
      <header className="mb-4 border-b-2 border-stone-300 pb-4">
        <div className="flex items-center justify-between">
          <h1 className="mb-2 text-3xl font-bold text-stone-600">
            {project.title}
          </h1>
          <button
            className="text-stone-600 hover:text-red-500"
            onClick={() => deleteProject(project)}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formatDate(project.dueDate)}</p>
        <p className="whitespace-pre-wrap text-stone-600">
          {project.description}
        </p>
      </header>
      <Tasks project={project} />
    </div>
  );
}
