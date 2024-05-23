import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({onAddProject, onCancelProject}) {
  // REFS
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  const modalRef = useRef();

  // FUNCTIONS
  function handleSave(){
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDate = dateRef.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDate.trim() === ""
    ) {
      console.log("invalid inputs")
      modalRef.current.open();
      return;
    }

    onAddProject({
      title:enteredTitle, 
      description:enteredDescription, 
      dueDate:enteredDate
    })

  }




  // RETURN
  return (
    <>
    <Modal ref={modalRef} buttonCaption={"Close"}>
      <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Inputs</h2>
      <p className="text-l text-stone-800">Please make sure that you've entered valid inputs for each input field</p>
    </Modal>
    <div className="mt-16 w-[35rem]">
      <div>
        <Input type="text" ref = {titleRef} label={"Title"} />
        <Input ref = {descriptionRef} label={"Description"} isTextArea />
        <Input type="date" ref = {dateRef} label={"Due Date"} />
      </div>
      <menu className="flex items-center justify-end gap-4 my-4">
        <li >
          <button onClick={onCancelProject} className="text-stone-800 hover:text-stone-950">Cancel</button>
        </li>
        <li>
          <button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
            Save
          </button>
        </li>
      </menu>
    </div>
    </>
  );
}
