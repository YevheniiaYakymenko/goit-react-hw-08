import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";

export default function ContactList() {
  const selectVisibleContacts = useSelector(selectFilteredContacts);
  return (
    <ul>
      {selectVisibleContacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </ul>
  );
}
