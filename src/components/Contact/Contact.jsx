import { BsTelephoneFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import css from "./Contact.module.css";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
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
      <button className={css.btn} type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
