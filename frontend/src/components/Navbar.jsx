import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineClipboardList,
  HiOutlineUsers,
  HiOutlineCalendar,
} from "react-icons/hi";

import "./Navbar.css";

const Navbar = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const linksData = [
    {
      id: 1,
      title: "Home",
      link: "heroSection",
      icon: <HiOutlineHome />,
    },

    {
      id: 2,
      title: "About Us",
      link: "about",
      icon: <HiOutlineUser />,
    },

    {
      id: 3,
      title: "Dishes",
      link: "menu",
      icon: <HiOutlineClipboardList />,
    },

    {
      id: 4,
      title: "Our Team",
      link: "team",
      icon: <HiOutlineUsers />,
    },

    {
      id: 5,
      title: "Reserve Table",
      link: "reservation",
      icon: <HiOutlineCalendar />,
    },
  ];

  return (
    <nav className="smart-navbar">

      {/* LOGO */}
      <div className="logo">
        EATLY-Reserve.Relax
      </div>

      {/* NAVIGATION */}
      <div className="navigation">

        <ul>

          {linksData.map((item, index) => (
            <li
              key={item.id}
              className={activeIndex === index ? "active" : ""}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <ScrollLink
                to={item.link}
                smooth={true}
                duration={500}
                spy={true}
                offset={-100}
              >
                <span className="icon">
                  {item.icon}
                </span>
                <span className="text">
                  {item.title}
                </span>
              </ScrollLink>
            </li>
          ))}

          {/* MOVING INDICATOR */}
          <div className="indicator"></div>

        </ul>

      </div>

      {/* ADMIN BUTTON SEPARATE ON THE RIGHT */}
      <div className="admin-button-container">
        <RouterLink to="/admin" className="admin-link">
          <span className="icon">
            <HiOutlineUser />
          </span>
          <span className="text">
            ADMIN
          </span>
        </RouterLink>
      </div>

    </nav>
  );
};

export default Navbar;