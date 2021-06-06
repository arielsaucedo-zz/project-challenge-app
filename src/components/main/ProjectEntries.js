import React from "react";
import { ProjectEntry } from "./ProjectEntry";

export const ProjectEntries = () => {
  return (
    <div className="entries">
      <ProjectEntry />
    </div>
  );
};

/* <div className="journal__entries">
      {notes.map((note) => (
        <ProjectEntry key={note.id} {...note} />
      ))}
    </div> */
