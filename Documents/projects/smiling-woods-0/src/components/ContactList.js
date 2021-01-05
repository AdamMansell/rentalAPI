import React from "react";
import PropTypes from "prop-types";
import Contact from "./Contact";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded } from "react-redux-firebase";

function ContactList(props) {
  useFirestoreConnect([{ collection: "contacts" }]);

  const contacts = useSelector((state) => state.firestore.ordered.contacts);

  if (isLoaded(contacts)) {
    return (
      <>
        <hr />
        {contacts.map((contact) => (
          <Contact
            whenContactClicked={props.onContactSelection}
            name={contact.name}
            location={contact.location}
            id={contact.id}
            key={contact.id}
          />
        ))}
      </>
    );
  } else {
    return (
      <>
        <h3>Loading...</h3>
      </>
    );
  }
}

ContactList.propTypes = {
  onContactSelection: PropTypes.func,
};

export default ContactList;
