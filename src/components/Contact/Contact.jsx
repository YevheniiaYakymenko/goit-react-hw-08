import { BsTelephoneFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { useState } from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");
import css from "./Contact.module.css";

export default function Contact({ id, name, number }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  const handleDelete = () => {
    dispatch(deleteContact(id));
    closeModal();
  };
  return (
    <div className={css.wrap}>
      <div className={css.container}>
        <p>
          <FaUser size="18" />
          {name}
        </p>
        <p>
          <BsTelephoneFill size="18" />
          {number}
        </p>
      </div>
      <button className={css.btn} type="button" onClick={openModal}>
        Delete
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Confirm Delete Contact"
        className={css.modal}
        overlayClassName={css.overlay}
      >
        <div className={css.header}>
          <h2>Are you sure?</h2>
          <p>
            Do you want to delete the contact <br /> {name}?
          </p>
        </div>
        <div className={css.wrapper}>
          <button className={css.button} onClick={handleDelete}>
            Delete
          </button>
          <button className={css.button} onClick={closeModal}>
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
}
