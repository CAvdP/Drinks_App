// Home.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// components
import EventList from './EventList';
import Faq from './Faq';
import Footer from './Footer';

/* Home is the homepage, if not logged in, it will provide information about the app, 
once logged in, it it will be a personalized homepage for the user */
class Home extends Component {
    
    render() {
        // shows only to a logged in user //
        const {isAuthenticated, user} = this.props.auth;
        const authContent = (
            <div className="container">
                <div className="user-name"><h2>{user.name}</h2></div>
                <h3>Upcoming events</h3>
                <EventList />
                <Footer />
            </div>
        )
        // shows to everyone who is not logged in //
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
        // depending on the value of 'isAuthenticated' will either show personal content or public content. //
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


