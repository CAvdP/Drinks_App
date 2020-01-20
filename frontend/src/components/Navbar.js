// Navbar.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';

// builds a simple navbar with the logo, login and logout buttons //

class Navbar extends Component {

    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }
    
    render() {
        const {isAuthenticated} = this.props.auth;
        // if the user is logged in it will show the logout button //
        const authLinks = (
            <div className="button-container">
                <button className="navigation-items__button" onClick={this.onLogout.bind(this)}>Logout</button>
            </div>
        )
        // if not authorized it will show a login button //     
        const guestLinks = (
            <div className="button-container"> 
                <Link className="navigation-items__button" to="/login">Login<span className="glyphicon glyphicon-log-in"></span></Link>
            </div>
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