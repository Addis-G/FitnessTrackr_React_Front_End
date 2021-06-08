import { React, useState, useEffect } from "react";
import NewRoutine from "./NewRoutine";
import getUserRoutines from "../api/getUserRoutines";
import ShowUserRoutines from "./showUserRoutines";
const MyRoutines = (props) => {
  const { setCurrentTab, user, userRoutines, setUserRoutines } = props;
  setCurrentTab(props.match.path);
  return (
    <div className="content-container">
      <div className="container-right">
        <NewRoutine setUserRoutines={setUserRoutines} />
      </div>
      <div className="container-left">
        <ShowUserRoutines
          setUserRoutines={setUserRoutines}
          userRoutines={userRoutines}
        />
      </div>
    </div>
  );
};

export default MyRoutines;
