import { useProjectStore } from "../state";
import { Button } from "./Button";

export function ProjectSidebar() {
  const {
    projects,
    selectProject,
    setShowAddNewProjectScreen,
  } = useProjectStore();

  return (
    <aside className="w-1/3 rounded-r-xl bg-stone-900 px-8 py-16 text-stone-50 md:w-72">
      <h1 className="mb-8 font-bold uppercase text-stone-200 md:text-xl">
        Your Projects
      </h1>
      <div>
        <Button onClick={() => setShowAddNewProjectScreen(true)}>
          + New Project
        </Button>
      </div>
      <ul className="mt-8">
        {projects.map((p) => {
          let styles =
            "my-1 w-full rounded-sm px-2 py-1 text-left hover:bg-stone-800 hover:text-stone-200";
          if (p.selected) {
            styles += " bg-stone-800 text-stone-200";
          } else {
            styles += " text-stone-400";
          }
          return (
            <li key={p.id}>
              <button className={styles} onClick={() => selectProject(p)}>
                {p.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
