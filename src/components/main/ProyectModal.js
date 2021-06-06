import React from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { uiCloseModalProject } from "../../actions/ui";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

export const ProyectModal = () => {
  const { modalOpenProject } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(uiCloseModalProject());
  };

  return (
    <Modal
      isOpen={modalOpenProject}
      //   onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      className="modal"
      overlayClassName="modal-fondo"
    >
      <h1> New project </h1>
      <hr />
      <form className="container">
        <div className="form-group">
          <label>Project Name</label>
          <input className="form-control" placeholder="Your project" />
        </div>
        <hr />
        <div className="form-group">
          <label>Choose your type of proyect</label>
        </div>
        <div className="mt-3">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckChecked"
            >
              Empty project
            </label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckChecked"
            >
              React project
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-outline-primary btn-block mt-4"
        >
          <i className="far fa-save"></i>
          <span> Save</span>
        </button>
      </form>
    </Modal>
  );
};
