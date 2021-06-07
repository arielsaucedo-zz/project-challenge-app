import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { taskAddNew } from "../../actions/project";
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

const initTask = {
  title: "",
  isComplete: false,
};

export const TaskModal = () => {
  const { modalOpenTask } = useSelector((state) => state.ui);
  const { active } = useSelector((state) => state.projects);

  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState(initTask);

  const { title } = formValues;

  const closeModal = () => {
    dispatch(uiCloseModalTask());
  };

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(
      taskAddNew({
        ...formValues,
        projectId: active.id,
        id: new Date().getTime(),
      })
    );

    closeModal();
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
      <form className="container" onSubmit={handleSubmitForm}>
        <div className="form-group">
          <label>Task Name</label>
          <input
            className="form-control"
            placeholder="Your project"
            name="title"
            value={title}
            onChange={handleInputChange}
          />
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
