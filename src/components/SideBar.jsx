import Button from "./Button";

export default function SideBar({ onStartAddProject, projects }) {
  return (
    <>
      <aside className="px-8 py-16 w-1/3 bg-stone-900 text-stone-300 md:w-72 rounded-r-xl">
        <h1 className="mb-8 uppercase font-bold md:text-xl text-stone-200">
          Projects
        </h1>
        <div>
          <Button onClick={onStartAddProject}>+ Add Project</Button>
        </div>
        <ul className="mt-8">
          {projects.map((project) => {
            return (
              <li key={project.id}>
                <button className="w-full text-left px-2 py-1 mb-2 rounded-sm text-stone-400 hover:text-stone-200 hover:bg-stone-800">
                  {project.title}
                </button>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
}
