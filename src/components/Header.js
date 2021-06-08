import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { user, currentTab } = props;

  return (
    <>
      <ul className="nav-links">
        <li>
          <Link
            className={currentTab == "/home" ? `nav-link current` : "nav-link"}
            to="/home"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={
              currentTab == "/routines" ? `nav-link current` : "nav-link"
            }
            to="/routines"
          >
            Routines
          </Link>
        </li>
        {user ? (
          <li>
            <Link
              className={
                currentTab == "/myroutines" ? `nav-link current` : "nav-link"
              }
              to="/myroutines"
            >
              My Routines
            </Link>
          </li>
        ) : (
          ""
        )}
        <li>
          <Link
            className={
              currentTab == "/activities" ? `nav-link current` : "nav-link"
            }
            to="/activities"
          >
            Activities
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
