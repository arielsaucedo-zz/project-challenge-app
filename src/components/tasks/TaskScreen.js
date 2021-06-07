import React from "react";
import { useSelector } from "react-redux";
import { TaskAppBar } from "./TaskAppBar";
import { TaskCard } from "./TaskCard";
import { TaskModal } from "./TaskModal";

export const TaskScreen = () => {
  const { tasks } = useSelector((state) => state.projects);
  const { active } = useSelector((state) => state.projects);

  return (
    <div className="d-flex flex-column animate__animated animate__fadeIn">
      <TaskAppBar />
      <div className="d-flex p-3">
        {tasks.map(
          (t) => t.projectId === active.id && <TaskCard key={t.id} {...t} />
        )}
      </div>
      <TaskModal />
    </div>
  );
};
