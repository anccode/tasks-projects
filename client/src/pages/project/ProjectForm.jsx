import { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { useProject } from "../../context/ProjectProvider";
import { useParams, useNavigate } from "react-router-dom";

function ProjectForm() {
  const { createProject, getProject, updateProject } = useProject();
  const [project, setProject] = useState({
    name: "",
    priority: "",
    description: "",
  });
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const loadProject = async () => {
      if (params.id) {
        const project = await getProject(params.id);
        setProject({
          name: project.name,
          priority: project.priority,
          description: project.description,
        });
      }
    };
    loadProject();
  }, []);

  return (
    <div className="mx-auto">
      <Formik
        initialValues={project}
        onSubmit={async (values, actions) => {
          if (params.id) {
            await updateProject(params.id, values);
            navigate("/projects");
          } else {
            await createProject(values);
            navigate("/projects");
          }
          setProject({
            name: "",
            priority: "",
            description: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10"
          >
            <h1 className="text-xl font-bold uppercase text-center">
              {params.id ? "edit project" : "new project"}
            </h1>
            <label className="block">name</label>
            <input
              type="text"
              name="name"
              className="px-2 py-1 rounded-sm w-full"
              placeholder="write a name for project"
              onChange={handleChange}
              value={values.name}
            />
            <label className="block">priority</label>
            <input
              type="number"
              onChange={handleChange}
              name="priority"
              className="px-2 py-1 rounded-sm w-full"
              value={values.priority}
            />
            <label className="block">description</label>
            <textarea
              name="description"
              className="px-2 py-1 rounded-sm w-full"
              rows="3"
              placeholder="write a description"
              onChange={handleChange}
              value={values.description}
            ></textarea>
            <button
              type="onSubmit"
              className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md"
            >
              {isSubmitting ? "saving..." : "save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ProjectForm;
