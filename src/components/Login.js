import React, { useEffect, useState, useRef } from "react";
import { login } from "../api/login";
import { register } from "../api/register";
import { Redirect } from "react-router-dom";

import { storeCurrentUser, storeToken } from "../auth/index";
import getUserRoutines from "../api/getUserRoutines";
const Login = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [notifyType, setNotifyType] = useState("");
  const [notifyMessage, setNotifyMessage] = useState("");

  const { setUser, activityType, setCurrentTab, path } = props;

  setCurrentTab(path);
  const handleRegSubmit = async (e) => {
    e.preventDefault();
    if (checkUP()) return;
    try {
      const {
        user: registeredUser,
        token,
        error,
      } = await register(userName, password);
      if (error) {
        throw error;
      }

      storeToken(token);
      storeCurrentUser(registeredUser);
      setUser(registeredUser);
      setNotifyType("notifyType-success");
      setNotifyMessage(`Sign up Successful...`);
      props.history.push("/routines");
    } catch (error) {
      setNotifyType(`notifyType-error`);
      setNotifyMessage(error);
    }
  };
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (checkUP()) return;
    try {
      const {
        user: loggedInUser,
        token,
        error,
      } = await login(userName, password);

      if (error) {
        throw error;
        return;
      }

      storeCurrentUser(loggedInUser);
      storeToken(token);
      setUser(loggedInUser);
      props.history.push("/myroutines");
    } catch (error) {
      setNotifyType(`notifyType-error`);
      setNotifyMessage(error);
    }
  };
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const checkUP = () => {
    if (userName == "" || !userName || userName == "undefined") {
      setNotifyType("notifyType-error");
      setNotifyMessage(`User name can not be empty...`);
      return true;
    }
    if (password == "" || !password || password == "undefined") {
      setNotifyType("notifyType-error");
      setNotifyMessage(`Password can not be empty...`);
      return true;
    }
  };
  return (
    <div className="content-container">
      <div className="user-log-reg">
        <form
          id="login-form"
          onSubmit={
            activityType == "Login" ? handleLoginSubmit : handleRegSubmit
          }
        >
          <input
            placeholder="User Name"
            type="text"
            value={userName}
            onChange={handleUserNameChange}
          ></input>
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          ></input>
          <button id="btn-login">{activityType}</button>

          <span className={notifyType}>{notifyMessage}</span>
        </form>
      </div>
    </div>
  );
};

export default Login;
