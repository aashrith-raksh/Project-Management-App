import { forwardRef } from "react";

const Input = forwardRef(function ({ label, isTextArea, ...props }, ref) {
  const classes =
    "w-full p-1 border-b-2 rounded-sm bg-stone-200 border-stone-300 text-stone-600 focus:outline-none focus:border-stone-400";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm text-stone-500 font-bold uppercase">
        {label}
      </label>
      {isTextArea ? (
        <textarea className={classes} {...props} ref={ref}/>
      ) : (
        <input className={classes} {...props} ref={ref}/>
      )}
    </p>
  );
});

export default Input;
