import { create } from "zustand";
import { v4 as uuid } from 'uuid'

export const useProjectStore = create((set) => ({
  showAddNewProjectScreen: false,
  projects: [],
  addProject({ title, description, dueDate }) {
    set((state) => {
      const newProject = {
        id: uuid(),
        title: title,
        description: description,
        dueDate: dueDate,
        selected: false,
        tasks: [],
      };
      return {
        showAddNewProjectScreen: false,
        projects: [...state.projects, newProject],
      };
    });
  },
  deleteProject({ id }) {
    set((state) => {
      const updatedProjects = state.projects.filter((p) => p.id !== id);
      return {
        showAddNewProjectScreen: false,
        projects: updatedProjects,
      };
    });
  },
  selectProject({ id }) {
    set((state) => {
      const updatedProjects = state.projects.map((proj) => ({
        ...proj,
        selected: proj.id === id,
      }));
      return {
        showAddNewProjectScreen: false,
        projects: updatedProjects,
      };
    });
  },
  currentlySelectedProject() {
    const { projects } = useProjectStore.getState();
    return projects.find((p) => p.selected);
  },
  setShowAddNewProjectScreen(visible) {
    set((state) => {
      const deselectedProjects = state.projects.map((proj) => ({
        ...proj,
        selected: false,
      }));
      return {
        showAddNewProjectScreen: visible,
        projects: deselectedProjects,
      };
    });
  },
  addTask(project, task) {
    set((state) => {
      const newTask = {
        id: uuid(),
        text: task,
      };
      const updatedProjects = [...state.projects];
      const i = updatedProjects.findIndex((p) => p.id === project.id);
      updatedProjects[i].tasks = [...updatedProjects[i].tasks, newTask];
      return {
        projects: updatedProjects,
      };
    });
  },
  deleteTask(project, taskId) {
    set((state) => {
      const updatedProjects = [...state.projects];
      const i = updatedProjects.findIndex((p) => p.id === project.id);
      const updatedTasks = updatedProjects[i].tasks.filter(
        (t) => t.id !== taskId,
      );
      updatedProjects[i].tasks = updatedTasks;
      return {
        projects: updatedProjects,
      };
    });
  },
}));
