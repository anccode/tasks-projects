import axios from "axios";

export const getProjectsRequest = async () =>
  await axios.get("http://localhost:4000/projects");

export const createProjectRequest = async (project) =>
  await axios.post("http://localhost:4000/projects", project);

export const deleteProjectRequest = async (id) =>
  await axios.delete(`http://localhost:4000/projects/${id}`);

export const getProjectRequest = async (id) =>
  await axios.get(`http://localhost:4000/projects/${id}`);

export const updateProjectRequest = async (id, newFileds) =>
  await axios.put(`http://localhost:4000/projects/${id}`, newFileds);

export const toggleProjectDoneRequest = async (id, done) =>
  await axios.put(`http://localhost:4000/projects/${id}`, {
    done,
  });

export const getProjectTasksRequest = async (id) =>
  await axios.get(`http://localhost:4000/projects/${id}/tasks`);
