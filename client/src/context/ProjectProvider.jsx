import { useContext, useState } from "react";
import {
  getProjectsRequest,
  deleteProjectRequest,
  createProjectRequest,
  getProjectRequest,
  updateProjectRequest,
  toggleProjectDoneRequest,
  getProjectTasksRequest,
} from "../api/projects.api";
import { ProjectContext } from "./context";
export const useProject = () => {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error("no projectcontextprovider");
  }
  return context;
};

export const ProjectContextProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);

  async function loadProjects() {
    try {
      const response = await getProjectsRequest();
      setProjects(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  const getProject = async (id) => {
    try {
      const result = await getProjectRequest(id);
      return result.data;
    } catch (error) {
      console.log(error);
    }
  };
  const createProject = async (project) => {
    try {
      await createProjectRequest(project);
    } catch (error) {
      console.log(error);
    }
  };
  const updateProject = async (id, newFileds) => {
    try {
      const response = await updateProjectRequest(id, newFileds);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteProject = async (id) => {
    try {
      const response = await deleteProjectRequest(id);
      setProjects(projects.filter((projects) => projects.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const toggleProjectDone = async (id) => {
    const projectFount = projects.find((project) => project.id === id);

    try {
      await toggleProjectDoneRequest(
        id,
        projectFount.done === 0 ? true : false
      );
      projects.map((project) =>
        project.id === id
          ? (project.done = project.done === 0 ? 1 : 0)
          : project.done
      );
      setProjects([...projects]);
    } catch (error) {
      console.log(error);
    }
  };
  const getTasksProject = async (id) => {
    try {
      const response = await getProjectTasksRequest(id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ProjectContext.Provider
      value={{
        projects,
        tasks,
        loadProjects,
        deleteProject,
        createProject,
        getProject,
        updateProject,
        toggleProjectDone,
        getTasksProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
