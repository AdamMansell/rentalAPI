import React from 'react';
import Sidebar from './Sidebar'
// import WorkList from './WorkList';
// import WorkDetail from './WorkDetail';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { Redirect } from 'react-router'
// import { Link } from 'react-router-dom';



class PortfolioControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectWork: null,
      visiblePage: "/"
    }
  }

  render() {

    return (
      <React.Fragment>
        <div className="main">
        <p>Grant Eadie</p>
        <p>Grant Eadie</p>

        </div>
      </React.Fragment>
    )
  }

}

export default PortfolioControl;