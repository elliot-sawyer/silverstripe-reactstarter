import React, {Component} from 'react';
import Logo from '../../assets/images/logo.png'; // Tell Webpack this JS file uses this image
import './header.scss';

const Header = () => (
  <header>
    <div className="container">
      <div className="col">
        <a href="/">
          <img src={Logo} alt="Logo" />
        </a>
        <div className="contact-info">
          <li><a href="mailto:johndoe@company.co.nz">johndoe@company.co.nz</a></li>
          <li>027 1234 567</li>
        </div>
      </div>
    </div>
  </header>
)

export default Header;
