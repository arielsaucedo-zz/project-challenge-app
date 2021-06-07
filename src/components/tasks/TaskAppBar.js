import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteProject } from "../../actions/project";
import { uiOpenModalTask } from "../../actions/ui";

export const TaskAppBar = () => {
  const { active: project } = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  const handleOpenModalTask = () => {
    dispatch(uiOpenModalTask());
  };

  const handleDelete = () => {
    dispatch(deleteProject(project.id));
  };

  return (
    <div className="align-items-center bg-warning bg-gradient d-flex justify-content-between appbar">
      <h2>Task List</h2>

      <div>
        <button className="btn btn-primary m-2" onClick={handleOpenModalTask}>
          Add New Task
        </button>
        <button className="btn btn-danger m-2" onClick={handleDelete}>
          Delete Project
        </button>
      </div>
    </div>
  );
};
