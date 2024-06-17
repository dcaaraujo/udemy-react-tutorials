import { ProjectSidebar } from "./components/ProjectSidebar";
import { NewProject } from "./components/NewProject";
import { NoProjectSelected } from "./components/NoProjectSelected";
import { useState } from "react";
import { SelectedProject } from "./components/SelectedProject";
import { useProjectStore } from "./state";

export default function App() {
  const { showAddNewProjectScreen, currentlySelectedProject } =
    useProjectStore();

  let content = null;

  if (showAddNewProjectScreen) {
    content = <NewProject />;
  } else if (currentlySelectedProject()) {
    content = <SelectedProject />;
  } else {
    content = <NoProjectSelected />;
  }

  return (
    <main className="flex h-screen gap-8">
      <ProjectSidebar />
      {content}
    </main>
  );
}
