import React from "react";
import NewContactForm from "./NewContactForm";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import EditContactForm from "./EditContactForm";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as a from "./../actions";
import { withFirestore } from "react-redux-firebase";

class ContactControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedContact: null,
      editing: false,
    };
  }

  handleClick = () => {
    if (this.state.selectedContact != null) {
      this.setState({
        selectedContact: null,
        editing: false,
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  };

  handleAddingNewContactToList = (newContact) => {
    const { dispatch } = this.props;
    const action2 = a.toggleForm();
    dispatch(action2);
  };

  handleChangingSelectedContact = (id) => {
    this.props.firestore
      .get({ collection: "contacts", doc: id })
      .this((contact) => {
        const firestoreContact = {
          name: contact.get("name"),
          location: contact.get("location"),
          id: contact.get("id"),
        };
        this.setState({ selectedContact: firestoreContact });
      });
  };

  handleDeletingContact = (id) => {
    this.props.firestore.delete({ collection: "contacts", doc: id });
    this.setState({ selectedContact: null });
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleEditingContactInList = () => {
    this.setState({
      editing: false,
      selectedContact: null,
    });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = (
        <EditContactForm
          contact={this.state.selectedContact}
          onEditContact={this.handle.handleEditingContactInList}
        />
      );
      buttonText = "Return to Contact List";
    } else if (this.state.selectedContact != null) {
      currentlyVisibleState = (
        <ContactDetail
          contact={this.state.selectedContact}
          onClickingDelete={this.handleDeletingContact}
          onClickingEdit={this.handleEditClick}
        />
      );
      buttonText = "Return to Contact List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewContactForm
          onNewContactCreation={this.handleAddingNewContactToList}
        />
      );
      buttonText = "return to Contact List";
    } else {
      currentlyVisibleState = (
        <ContactList
          contactList={this.props.masterContactList}
          onContactSelection={this.handleChangingSelectedContact}
        />
      );
      buttonText = "Add Contact";
    }
    return (
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}

ContactControl.propTypes = {
  masterContactList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    masterContactList: state.masterContactList,
    formVisibleOnPage: state.formVisibleOnPage,
  };
};

ContactControl = connect(mapStateToProps)(ContactControl);

export default withFirestore(ContactControl);
