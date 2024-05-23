import { useRef } from "react";
import Input from "./Input.jsx";

export default function NewProject({onAddProject}) {
  // REFS
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  // FUNCTIONS
  function handleSave(){
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDate = dateRef.current.value;

    onAddProject({
      title:enteredTitle, 
      description:enteredDescription, 
      dueDate:enteredDate
    })

  }




  // RETURN
  return (
    <div className="mt-16 w-[35rem]">
      <div>
        <Input type="text" ref = {titleRef} label={"Title"} />
        <Input ref = {descriptionRef} label={"Description"} isTextArea />
        <Input type="date" ref = {dateRef} label={"Due Date"} />
      </div>
      <menu className="flex items-center justify-end gap-4 my-4">
        <li >
          <button className="text-stone-800 hover:text-stone-950">Cancel</button>
        </li>
        <li>
          <button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
            Save
          </button>
        </li>
      </menu>
    </div>
  );
}
