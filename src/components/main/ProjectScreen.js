import React from "react";
import { TaskScreen } from "../tasks/TaskScreen";
import { TaskScreenReact } from "../tasks/TaskScreenReact";
import { NothingSelected } from "./NothingSelected";
import { ProyectModal } from "./ProyectModal";
import { Sidebar } from "./Sidebar";

export const ProjectScreen = () => {
  return (
    <div className="d-flex ">
      <Sidebar />

      <main className="w-100">
        {/* <TaskScreen /> */}
        <TaskScreenReact />
        {/* <NothingSelected /> */}
      </main>
      <ProyectModal />
    </div>
  );
};
