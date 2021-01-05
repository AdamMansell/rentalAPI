import React from "react";
import PropTypes from "prop-types";

function Contact(props) {
  return (
    <>
      <div onClick={() => props.whenContactClicked(props.id)}>
        <h3>{props.name}</h3>
        <p>{props.location}</p>
        <p>{props.id}</p>
      </div>
    </>
  );
}

Contact.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  id: PropTypes.string,
  whenContactClicked: PropTypes.func
};

export default Contact