import { useProject } from "../context/ProjectProvider";
import { useNavigate } from "react-router-dom";
function ProjectCard({ project }) {
  const { deleteProject, toggleProjectDone } = useProject();
  const navigate = useNavigate();

  const handledone = async () => {
    await toggleProjectDone(project.id);
  };
  return (
    <div className="bg-zinc-700 rounded-md p-4 text-white">
      <header className="flex justify-between">
        <h2 className="text-sm font-bold">{project.name}</h2>
        <span>{project.done == 1 ? "✔️" : "❌"}</span>
      </header>
      <p className="text-xs">{project.priority}</p>
      <p>{project.description}</p>
      <span>{project.createdAt}</span>
      <div className="flex gap-x-2">
        <button
          className="bg-slate-300 px-2 py-1 text-black"
          onClick={() => handledone(project.done)}
        >
          toogle project
        </button>
        <button
          className="bg-slate-300 px-2 py-1 text-black"
          onClick={() => navigate(`/editproject/${project.id}`)}
        >
          edit
        </button>
        <button
          className="bg-slate-300 px-2 py-1 text-black"
          onClick={() => {
            deleteProject(project.id);
          }}
        >
          delete
        </button>
        <button
          className="bg-slate-300 px-2 py-1 text-black"
          onClick={() => {
            navigate(`/project/${project.id}/tasks`);
          }}
        >
          get tasks
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
