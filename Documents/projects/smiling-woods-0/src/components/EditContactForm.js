import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { useFirestore } from "react-redux-firebase";

function EditContactForm(props) {
  const firestore = useFirestore();
  const { contact } = props;

  function handleEditContactFormSubmission(event) {
    event.preventDefault();
    props.onEditContact();
    const propertiesToUpdate = {
      name: event.target.name.value,
      location: event.target.location.value,
    };
    return firestore.update(
      { collection: "contacts", doc: contact.id },
      propertiesToUpdate
    );
  }

  return (
    <>
      <ReusableForm
        formSubmissionHandler={handleEditContactFormSubmission}
        buttonText="Update Contact"
      />
    </>
  );
}

EditContactForm.propTypes = {
  onEditContact: PropTypes.func,
};

export default EditContactForm;
