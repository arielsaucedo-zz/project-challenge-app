import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { uiOpenModalProject } from "../../actions/ui";
import { ProjectEntries } from "./ProjectEntries";

export const Sidebar = () => {
  const dispatch = useDispatch();

  const handleOpenModalProject = () => {
    dispatch(uiOpenModalProject());
  };

  return (
    <aside className="d-flex bg-dark text-white sidebar">
      <div className="d-flex justify-content-between">
        <h3 className="fw-lighter fs-3 mt-1">
          <i className="fas fa-user-tie"></i>
          <span> Ariel</span>
        </h3>
        <button className="btn btn-secondary btn-sm fs-6 mt-1">Logout</button>
      </div>
      <div
        className="d-flex flex-column justify-content-center align-items-center new-entry"
        onClick={handleOpenModalProject}
      >
        <i className="far fa-calendar-plus fa-5x" />
        <p className="mt-3">New project</p>
      </div>

      <ProjectEntries />
    </aside>
  );
};
