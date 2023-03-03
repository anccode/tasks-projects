import { useEffect } from "react";
import ProjectCard from "../../components/ProjectCard";
import { useProject } from "../../context/ProjectProvider";

function ProjectsPage() {
  const { projects, loadProjects } = useProject();
  useEffect(() => {
    loadProjects();
  }, []);

  function renderMain() {
    if (projects.length === 0) return <h1>no projets yet</h1>;

    return projects.map((projects) => (
      <ProjectCard project={projects} key={projects.id} />
    ));
  }

  return (
    <div>
      <h1 className="text-5xl text-white font-bold text-center">Project</h1>
      <div className="grid grid-cols-3 gap-2">
      {renderMain()}
      </div>
    </div>
  );
}

export default ProjectsPage;
