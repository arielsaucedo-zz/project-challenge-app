import React from "react";
import { TaskAppBar } from "./TaskAppBar";
import { TaskCard } from "./TaskCard";
import { TaskModal } from "./TaskModal";

export const TaskScreen = () => {
  return (
    <div className="d-flex flex-column">
      <TaskAppBar />
      <div className="d-flex p-3">{/* <TaskCard /> */}</div>
      <TaskModal />
    </div>
  );
};
