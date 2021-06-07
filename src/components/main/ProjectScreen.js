import React from "react";
import { useSelector } from "react-redux";
import { NothingSelected } from "./NothingSelected";
import { ProjectSwitch } from "./ProjectSwitch";
import { ProyectModal } from "./ProyectModal";
import { Sidebar } from "./Sidebar";

export const ProjectScreen = () => {
  const { active } = useSelector((state) => state.projects);

  return (
    <div className="d-flex ">
      <Sidebar />

      <main className="w-100">
        {active === null ? <NothingSelected /> : <ProjectSwitch />}
      </main>
      <ProyectModal />
    </div>
  );
};
