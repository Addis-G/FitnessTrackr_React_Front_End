import { React, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

import { storeCurrentUser, storeToken } from "../auth/index";
const Register = (props) => {
  const { setUser } = props;
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {
        user: registeredUser,
        token,
        message,
      } = await register(userName, password);

      storeCurrentUser(registeredUser);
      storeToken(token);
      setUser(registeredUser);
      <Redirect
        to={{
          pathname: "/",
          state: {
            from: props.location,
          },
        }}
      />;
    } catch (error) {
      console.log(error);
    }
  };
  const handleUserNameChange = (e) => {
    console.log(e);
    setUserName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  console.log(props.match.path);
  return (
    <div className="user-log-reg">
      <form onSubmit={handleSubmit}>
        <input
          id="userNme"
          placeholder="User Name"
          type="text"
          onChange={(e) => handleUserNameChange(e)}
        ></input>

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => handlePasswordChange(e)}
        ></input>
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
