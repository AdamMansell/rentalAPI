import React from 'react'
import PropTypes from 'prop-types';

function ContactDetail(props){
  const { contact, onClickingDelete } = props;

  return (
    <>
    <h1>Contact Detail</h1>
    <h3>{contact.name}</h3>
    <p>{contact.location}</p>
    <button onClick={props.onClickingEdit}>Update Contact</button>
    <button onClick={()=> onClickingDelete(contact.id)}>Delete Contact</button>
    <hr/>
    </>
  );
}

ContactDetail.propTypes = {
  contact: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default ContactDetail;