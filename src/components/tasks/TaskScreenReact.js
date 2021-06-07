import React from "react";
import { useSelector } from "react-redux";

import { TaskAppBar } from "./TaskAppBar";
import { TaskCard } from "./TaskCard";
import { TaskModal } from "./TaskModal";

export const TaskScreenReact = () => {
  const { tasks } = useSelector((state) => state.projects);
  const { active } = useSelector((state) => state.projects);

  return (
    <div className="d-flex flex-column">
      <TaskAppBar />
      <div className="d-flex flex-wrap p-3 justify-content-around">
        <TaskCard title={"npx create-react-app my-app"} id={123} />
        <TaskCard title={"navigate to app folder"} id={123} />
        <TaskCard title={"npm start"} id={123} />
        {tasks.map(
          (t) => t.projectId === active.id && <TaskCard key={t.id} {...t} />
        )}
      </div>
      <TaskModal />
    </div>
  );
};
