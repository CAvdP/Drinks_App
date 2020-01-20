import React, { Component } from 'react';

// Icons
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';



class Footer extends Component {
    render(){
        return(
           <footer>
               <ul className="footer__content container">
                   <li><FacebookIcon /></li>
                   <li><InstagramIcon /></li>
                   <li><TwitterIcon /></li>
                   <li><LinkedInIcon /></li>
                </ul>       
           </footer>
        )
    }
}

export default Footer;