import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TaskCard from "../../components/TaskCard";
import { useProject } from "../../context/ProjectProvider";

function TasksProjectPage() {
  const { tasks, getTasksProject } = useProject();

  const params = useParams();
  useEffect(() => {
    const loadTasksProject = async (id) => {
      try {
        const tasks = await getTasksProject(params.id);
        console.log(tasks);
      } catch (error) {
        console.log(error);
      }
    };
    loadTasksProject(params.id);
  }, []);

  return (
    <div>
      <div>hi</div>
    </div>
  );
}

export default TasksProjectPage;
