import React from "react";
import { useSelector } from "react-redux";
import { ProjectEntry } from "./ProjectEntry";

export const ProjectEntries = () => {
  const { project } = useSelector((state) => state.projects);

  return (
    <div className="entries">
      {project.map((p) => (
        <ProjectEntry key={p.id} {...p} />
      ))}
    </div>
  );
};
