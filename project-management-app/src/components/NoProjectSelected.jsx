import { useProjectStore } from "../state";
import { Button } from "./Button";

export function NoProjectSelected() {
  const { setShowAddNewProjectScreen } = useProjectStore();
  return (
    <div className="mt-24 w-2/3 text-center">
      <div className="mx-auto size-16 rounded-full bg-stone-400"></div>
      <h2 className="my-4 text-xl font-bold text-stone-500">
        No Project Selected
      </h2>
      <p className="mb-4 text-stone-400">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={() => setShowAddNewProjectScreen(true)}>
          Create new project
        </Button>
      </p>
    </div>
  );
}
