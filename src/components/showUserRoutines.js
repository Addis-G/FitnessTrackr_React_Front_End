import React, { useState, useEffect } from "react";

import { Route, Link } from "react-router-dom";
import getUserRoutines from "../api/getUserRoutines";
import Activities from "./Activities";
const ShowUserRoutines = ({ userRoutines, setUserRoutines }) => {
  // useEffect(() => {
  //   async function gUR() {
  //     if (userRoutines.length == 0) {
  //       setUserRoutines(await getUserRoutines());
  //     }
  //   }
  //   gUR();
  // }, []);

  return (
    <>
      {userRoutines ? (
        <div className="routine-list-holder ">
          <div className="routines-notification">
            **Click on the id of the routines to delete and update routine or to
            add more activities to the routines.
          </div>
          <div className="routines-list header-row">
            <span>Id</span>
            <span>Name</span>
            <span>Goal</span>
            <span>Is Public?</span>
          </div>

          {userRoutines?.map(({ goal, name, isPublic, id, activities }) => (
            <div key={id ? id : 90} className="routines-list">
              <span className="routine-id">
                <Link to={`/myroutines/${id}`}>{id}</Link>
              </span>
              <span>
                <p>{name}</p>{" "}
              </span>
              <span>
                <p>{goal}</p>
              </span>

              <span>{isPublic ? "Yes" : "No"}</span>

              <span className="activities-info">
                Number of Activities {activities && activities.length}
              </span>
              <div className="activities-list header-row">
                <span>Name</span>
                <span>Description</span>
                <span>Duration</span>
                <span>Count</span>
              </div>
              {activities?.map(({ name, description, duration, count }) => (
                <div className="activities-list">
                  <span>{name}</span>
                  <span>{description}</span>
                  <span>{duration}</span>
                  <span>{count}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ShowUserRoutines;
