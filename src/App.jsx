import { useState } from "react";
import NewProject from "./components/NewProject";
import SideBar from "./components/SideBar";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  return (
    
    <main className="h-screen my-8 flex gap-8">
      <SideBar/>
      {/* <NewProject/> */}
      <NoProjectSelected/>
    </main>
  );
}

export default App;
