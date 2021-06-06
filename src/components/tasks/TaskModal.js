import React from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { uiCloseModalTask } from "../../actions/ui";

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

export const TaskModal = () => {
  const { modalOpenTask } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(uiCloseModalTask());
  };

  return (
    <Modal
      isOpen={modalOpenTask}
      //   onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      className="modal-task"
      overlayClassName="modal-fondo"
    >
      <h1> New task </h1>
      <hr />
      <form className="container">
        <div className="form-group">
          <label>Task Name</label>
          <input className="form-control" placeholder="Your project" />
        </div>
        <hr />

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
