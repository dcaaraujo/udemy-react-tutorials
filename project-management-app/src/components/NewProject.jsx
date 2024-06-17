import { useRef } from "react";
import { Input } from "./Input";
import { Modal } from "./Modal";
import { useProjectStore } from "../state";

export function NewProject() {
  const { addProject, setShowAddNewProjectScreen } = useProjectStore();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  const modalRef = useRef();

  function onSave() {
    const titleInput = titleRef.current.value?.trim();
    const descInput = descriptionRef.current.value?.trim();
    const dueDateInput = dueDateRef.current.value?.trim();

    if (titleInput === "" || descInput === "" || dueDateInput === "") {
      modalRef.current?.open();
      return;
    }

    addProject({
      title: titleInput,
      description: descInput,
      dueDate: dueDateInput,
    });
  }

  function cancelAddingProject() {
    setShowAddNewProjectScreen(false);
  }

  return (
    <>
      <Modal ref={modalRef}>
        <h2 className="my-4 text-xl font-bold text-stone-700">Invalid Input</h2>
        <p className="mb-4 text-stone-600">
          Oops! Looks like you forgot to enter a value. <br />
          Please make sure all fields are filled in.
        </p>
      </Modal>
      <div className="mt-16 w-[35rem]">
        <menu className="my-4 flex items-center justify-end gap-2">
          <li>
            <button
              className="rounded-md px-6 py-2 text-stone-800 hover:bg-stone-100 hover:text-stone-950"
              onClick={cancelAddingProject}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="rounded-md bg-stone-800 px-6 py-2 text-stone-50 hover:bg-stone-950"
              onClick={onSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={titleRef} type="text" label="Title" />
          <Input ref={descriptionRef} label="Description" textarea />
          <Input ref={dueDateRef} type="date" label="Title" />
        </div>
      </div>
    </>
  );
}
