import React from "react";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';
import ReusableForm from './ReusableForm';

function NewContactForm(props){

  const firestore = useFirestore();

  function addContactToFirestore(event) {
    event.preventDefault();
    props.onNewContactCreation();

    return firestore.collection('contacts').add(
      {
        names: event.target.names.value,
        location: event.target.location.value,
        issue: event.target.issue.value,
        timeOpen: firestore.FieldValue.serverTimestamp()
      }
    );
  }

  return (
    <React.Fragment>
      <ReusableForm 
      formSubmissionHandler = {addContactToFirestore}
      buttonText='submit' />
    </React.Fragment>
  );
}

NewContactForm.propTypes = {
  onNewContactCreation: PropTypes.func
};

export default NewContactForm;