import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { tasktActive, taskComplete } from "../../actions/project";

export const TaskCard = ({ title, isComplete, projectId, id }) => {
  const { activeTask } = useSelector((state) => state.projects);

  const dispatch = useDispatch();

  const handleEntryClick = () => {
    dispatch(tasktActive(id, { title, isComplete, projectId }));
  };

  const handleDelete = () => {
    dispatch(taskComplete(activeTask.id));
  };

  return (
    <div
      className="two animate__animated animate__fadeIn"
      onClick={handleEntryClick}
    >
      <div className="d-flex justify-content-between px-2 align-content-center m-2">
        <h3 className="name">{title}</h3>
        <button
          type="button"
          className="btn btn-success align-self-center"
          onDoubleClick={handleDelete}
        >
          <i class="fas fa-check"></i>
        </button>
      </div>
    </div>
  );
};
