import React from "react";
import { useDispatch } from "react-redux";
import { uiOpenModalTask } from "../../actions/ui";

export const TaskAppBar = () => {
  const dispatch = useDispatch();

  const handleOpenModalTask = () => {
    dispatch(uiOpenModalTask());
  };

  return (
    <div className="align-items-center bg-warning bg-gradient d-flex justify-content-between appbar">
      <h2>Task List</h2>

      <div>
        <button className="btn btn-primary m-2" onClick={handleOpenModalTask}>
          Add New Task
        </button>
        <button className="btn btn-danger m-2">Delete Project</button>
      </div>
    </div>
  );
};
