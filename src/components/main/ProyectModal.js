import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { projectAddNew } from "../../actions/project";
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

const initProyect = {
  title: "",
  type: "",
};

export const ProyectModal = () => {
  const { modalOpenProject } = useSelector((state) => state.ui);

  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState(initProyect);

  const { title } = formValues;

  const closeModal = () => {
    dispatch(uiCloseModalProject());
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
      projectAddNew({
        ...formValues,
        id: new Date().getTime(),
        date: new Date().getTime(),
      })
    );

    closeModal();
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
      <form className="container" onSubmit={handleSubmitForm}>
        <div className="form-group">
          <label>Project Name</label>
          <input
            className="form-control"
            name="title"
            value={title}
            placeholder="Your project"
            onChange={handleInputChange}
            autoComplete="off"
          />
        </div>
        <hr />
        <div className="form-group">
          <label>Choose your type of project</label>
        </div>
        <div className="form-check mt-3">
          <input
            className="form-check-input"
            type="radio"
            name="type"
            id="emptyProject"
            value={"e"}
            onChange={handleInputChange}
          />
          <label className="form-check-label" htmlFor="emptyProject">
            Empty project
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="type"
            id="reactProject"
            value={"r"}
            onChange={handleInputChange}
          />
          <label className="form-check-label" htmlFor="reactProject">
            React project
          </label>
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
