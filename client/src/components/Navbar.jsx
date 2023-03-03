import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-neutral-800 flex justify-between px-20 py-1">
      <Link to="/" className="text-white font-bold">
        <h1>Proyectos</h1>
      </Link>
      <ul className="flex gap-x-1">
        <li>
          <Link to="/projects" className="bg-slate-200 px-2 py-1">
            projects
          </Link>
        </li>
        <li>
          <Link
            to="/newProject"
            className="bg-teal-200 px-2 py-1
           "
          >
            crear proyecto
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
