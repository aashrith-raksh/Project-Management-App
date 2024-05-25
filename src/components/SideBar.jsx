import Button from "./Button";

export default function SideBar({ onStartAddProject, projects, onSelectProject, selectedProjectId }) {
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
            let classes = "w-full text-left px-2 py-1 mb-2 rounded-sm hover:text-stone-200 hover:bg-stone-800";

            if(project.id == selectedProjectId){
              classes += " bg-stone-800 text-stone-200"
            }else{
              classes += " text-stone-400"
            }
            return (
              <li key={project.id}>
                <button className={classes}
                onClick={() => onSelectProject(project.id)}>
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
