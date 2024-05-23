import { useState } from "react";
import NewProject from "./components/NewProject";
import SideBar from "./components/SideBar";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelProject(){
    setProjectState(prevState => {
      return {
        ...prevState, 
        selectedProjectId:undefined
      }
    })
  }

  function handleAddProject(projectData){
    const newProject = { 
      ...projectData, 
      id: Math.random() 
    };

    setProjectState(prevState => {
      return{
        ...prevState, 
        selectedProjectId:undefined,
        projects:[...prevState.projects, newProject]
      }
    })
  }

  // console.log(projectState.projects)
  console.log("app render")


  let content;

  if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else if (projectState.selectedProjectId === null) {
    content = <NewProject onAddProject = {handleAddProject} onCancelProject = {handleCancelProject}/>;
  }

  // RETURN
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onStartAddProject={handleStartAddProject} projects = {projectState.projects}/>
      {content}
    </main>
  );
}

export default App;
