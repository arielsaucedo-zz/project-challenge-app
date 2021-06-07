import React from "react";
import { useSelector } from "react-redux";
import { TaskScreen } from "../tasks/TaskScreen";
import { TaskScreenReact } from "../tasks/TaskScreenReact";

export const ProjectSwitch = () => {
  const { type } = useSelector((state) => state.projects.active);

  return (
    <div>
      {type === "e" || type === "" ? <TaskScreen /> : <TaskScreenReact />}
    </div>
  );
};
