import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { SiFacebook, SiInstagram, SiTwitter, SiLinkedin } from "react-icons/si";
import { FaBars } from "react-icons/fa";
import logo from "../assets/logo.png";
const Navbar = () => {
  const [links, setLinks] = useState(["Home", "About", "Projects", "Contact", "Profile"]);
  const [socials, setSocials] = useState([
    <SiFacebook />,
    <SiInstagram />,
    <SiTwitter />,
    <SiLinkedin />,
  ]);

  const [navOpen, setNavOpen] = useState(false);

  const linkRef = useRef(null);

  useEffect(() => {
    if (navOpen) {
      linkRef.current.style.top = "5rem";
    } else {
      linkRef.current.style.top = "-50rem";
    }
  }, [navOpen]);

  return (
    <div className="navbar">
      <img src={logo} />
      <button
        className="hamburger"
        onClick={() => {
          setNavOpen(!navOpen);
          console.log("clicked");
        }}
      >
        <FaBars />
      </button>
      <div className="linkContainer" ref={linkRef}>
        <ul className="links">
          {links.map((page) => {
            return (
              <li className="options">
                <a href="#">{page}</a>
              </li>
            );
          })}
        </ul>
      </div>

      <ul className="socials">
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
