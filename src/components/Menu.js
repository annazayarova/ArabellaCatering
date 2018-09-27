import React from "react";
import { NavLink } from "react-router-dom";

const Menu = ({ close, ...props }) => (
  <div className="nav">
    <ul className="menu">
      <li onClick={close}>
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      <li onClick={close}>
        <NavLink to="/about">About us</NavLink>
      </li>

      <li onClick={close}>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li onClick={close}>
        <NavLink to="/gallery">Gallery</NavLink>
      </li>

      <li onClick={close}>
        <NavLink to="/testimonials">Testimonials</NavLink>
      </li>
      <li onClick={close}>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>

    <div className="phone">
      
      <ul>
        <li>+41 79 954 23 20</li>
        <li>
          <a href="mailto:contact@cateringdiarabella.com">
            contact@cateringdiarabella.com
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Menu;
