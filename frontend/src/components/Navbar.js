// Navbar.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';



class Navbar extends Component {

    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }

    render() {
        const {isAuthenticated} = this.props.auth;
        const authLinks = (
            <ul className="button-container">
                <button className="navigation-items__button" onClick={this.onLogout.bind(this)}>Logout</button>
            </ul>
        )
      const guestLinks = (
        <ul className="button-container"> 
            <li className="">
                <Link className="navigation-items__button" to="/login">Login<span className="glyphicon glyphicon-log-in"></span></Link>
            </li>
        </ul>
      )
        return(
            <nav className="navigation">
                <div className="navigation-items">
                <Link className="navigation-brand" to="/"></Link>
                <div>
                    {isAuthenticated ? authLinks : guestLinks}
                </div>
                </div>
            </nav>
        )
    }
}
Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));