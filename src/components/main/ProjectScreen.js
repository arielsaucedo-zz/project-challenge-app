import React from "react";
import { useSelector } from "react-redux";

import { Sidebar } from "./Sidebar";
import { NothingSelected } from "./NothingSelected";
import { ProjectSwitch } from "./ProjectSwitch";
import { ProyectModal } from "./ProyectModal";

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
