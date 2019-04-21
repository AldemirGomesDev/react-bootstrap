import React from 'react';
import {Link} from 'react-router';

const Footer = (props) => {
    return (
        <footer className="container col-12 pt-3 footer bg-dark text-light text-center">
            <container className="container col-6 col-md-2 d-flex justify-content-around">
              <i className="fab fa-facebook-square"></i>
              <i className="fab fa-linkedin"></i>
              <i class="fab fa-instagram"></i>
            </container>
          </footer>
    );
};

export default Footer;