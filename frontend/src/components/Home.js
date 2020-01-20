// Home.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// components
import EventList from './EventList';
import Faq from './Faq';
import Footer from './Footer';

class Home extends Component {
    
    render() {
        const {isAuthenticated, user} = this.props.auth;
        console.log(user);
        const authContent = (
          <div className="container">
              
            {/* <img src={user.avatarUrl} alt={user.name} title={user.name} className="profile-picture--big"/>   */}
            <div className="user-name"><h2>{user.name}</h2></div>
            
                <h3>Upcoming events</h3>
                <EventList />
                <Footer />
          </div>
        )

        const guestContent = (
            <div className="content container">
                <section className="banner">
                    <article className="banner__text-block ">
                        <h1>Drinks App</h1>
                        <h4>The easiest way to organise drinks with your mates!</h4>
                    </article>
                </section>
                <div className="content-container">
                    <Faq />
                </div>
                <Footer />
            </div>
        )

        return (
            <div>
                {isAuthenticated ? authContent : guestContent}
            </div>
        )
    }
}

Home.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(withRouter(Home));


