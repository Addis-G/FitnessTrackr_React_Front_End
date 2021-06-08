import { Link } from "react-router-dom";
import React, { useEffect } from "react";

const UserMgmt = (props) => {
  useEffect(() => {});
  const { user, currentTab } = props;
  return (
    <>
      {!user ? (
        <ul className="user-management">
          <>
            <li>
              <Link
                className={
                  currentTab == "/login" ? `nav-link current` : "nav-link"
                }
                to="/login"
              >
                LogIn
              </Link>
            </li>
            <li>
              <Link
                className={
                  currentTab == "/register" ? `nav-link current` : "nav-link"
                }
                to="/register"
              >
                Register
              </Link>
            </li>
          </>
        </ul>
      ) : (
        ""
      )}

      {user ? (
        <div className="user-logout-link">
          Well Come {user?.username?.toUpperCase()}!
          <span className="material-icons-outlined">account_circle</span>
          <Link className="nav-link" to="/logout">
            Log Out
          </Link>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default UserMgmt;
