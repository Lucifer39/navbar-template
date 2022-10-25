import React from "react";
import { useState } from "react";
import { SiFacebook, SiInstagram, SiTwitter, SiLinkedin } from "react-icons/si";
import logo from "../assets/logo.png";
const Navbar = () => {
  const [links, setLinks] = useState(["Home", "About", "Projects", "Contact", "Profile"]);
  const [socials, setSocials] = useState([
    <SiFacebook />,
    <SiInstagram />,
    <SiTwitter />,
    <SiLinkedin />,
  ]);

  return (
    <div className="navbar">
      <img src={logo} />
      <ul>
        {links.map((page) => {
          return (
            <li>
              <a href="#">{page}</a>
            </li>
          );
        })}
      </ul>

      <ul>
        {socials.map((app) => {
          return (
            <li>
              <a href="#">{app}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
