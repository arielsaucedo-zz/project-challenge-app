import React from "react";
import { TaskAppBar } from "./TaskAppBar";
import { TaskCard } from "./TaskCard";
import { TaskModal } from "./TaskModal";

export const TaskScreenReact = () => {
  return (
    <div className="d-flex flex-column">
      <TaskAppBar />
      <div className="d-flex p-3 justify-content-around">
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
      <TaskModal />
    </div>
  );
};
