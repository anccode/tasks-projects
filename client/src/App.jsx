import { Routes, Route } from "react-router-dom";
import ProjectsPage from "./pages/project/ProjectsPage";
import ProjectForm from "./pages/project/ProjectForm";
import NotFount from "./pages/NotFount";
import Navbar from "./components/Navbar";
import { ProjectContextProvider } from "./context/ProjectProvider";
import HomePage from "./pages/HomePage";
import TasksProjectPage from "./pages/project/TasksProjectPage";
function App() {
  return (
    <div className="bg-zinc-900 h-screen">
      <Navbar />
      <div className="container mx-auto py-4 px-20">
        <ProjectContextProvider>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/newproject" element={<ProjectForm />} />
            <Route path="/editproject/:id" element={<ProjectForm />} />
            <Route path="/project/:id/tasks" element={<TasksProjectPage/>} />
            <Route path="*" element={<NotFount />} />
          </Routes>
        </ProjectContextProvider>
      </div>
    </div>
  );
}

export default App;
