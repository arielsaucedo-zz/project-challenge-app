import React from "react";
import { useDispatch } from "react-redux";

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
          <span> User</span>
        </h3>
      </div>
      <div
        className="d-flex flex-column justify-content-center align-items-center new-entry"
        onClick={handleOpenModalProject}
      >
        <i className="fas fa-tasks fa-5x" />
        <p className="mt-3">New project</p>
      </div>

      <ProjectEntries />
    </aside>
  );
};
