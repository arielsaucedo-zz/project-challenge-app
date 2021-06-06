import React from "react";

export const NothingSelected = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-white bg-success bg-gradient nothing-main-content">
      <p className="text-center fs-1">
        Select something
        <br />
        or create a new project!
      </p>
      <i className="far fa-star fa-4x mt-5" />
    </div>
  );
};
