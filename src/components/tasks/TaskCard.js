import React from "react";

export const TaskCard = () => {
  return (
    <div className="two">
      <div className="d-flex justify-content-between px-2 align-items-center m-2">
        <h3 className="name">Task 1</h3>
        <button className="btn btn-raised btn-wave btn-icon btn-rounded mb-1 light-green">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-check"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>{" "}
        </button>
      </div>
    </div>
  );
};
