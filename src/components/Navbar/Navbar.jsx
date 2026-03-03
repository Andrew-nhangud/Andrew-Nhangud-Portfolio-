import { useState } from "react";
import "./Navbar.css";
import menuIcon from "../../assets/icons/menu.svg";
import timesIcon from "../../assets/icons/times.svg";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIcon = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header>
      <nav className="container">
        {/* logo markup */}
        <p className="logo">ANDREW NHANGUD</p>
        {/* Images for the menu */}
        <img
          className="menu-icon remove-mobile-menu"
          src={isOpen ? timesIcon : menuIcon}
          onClick={handleIcon}
        />
        {/* navbar for the larger screens */}
        <div className="larger-menu remove-larger-menu">
          <ul>
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              {" "}
              <a href="">SKILLS</a>{" "}
            </li>
            <li>
              {" "}
              <a href="">PROJECTS</a>{" "}
            </li>
            <li>
              <a href="">ABOUT</a>
            </li>
            <li>
              <a href="">CONTACT</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* mobile navbar */}
      <div className="mobile-menu remove-mobile-menu container">
        {isOpen && (
          <ul>
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">SKILLS</a>
            </li>
            <li>
              <a href="">PROJECTS</a>
            </li>
            <li>
              <a href="">ABOUT</a>
            </li>
            <li>
              <a href="">CONTACT</a>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};
