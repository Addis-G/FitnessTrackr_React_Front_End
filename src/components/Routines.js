import { React, Fragment, useEffect, useState } from "react";

import { getAllPublicRoutines } from "../api/getAllPublicRoutines";

const Routines = (props) => {
  const [publicRoutines, setPublicRoutines] = useState([]);
  useEffect(() => {
    async function getAllPublicR() {
      try {
        const pR = await getAllPublicRoutines();
        setPublicRoutines([...pR]);
      } catch (error) {
        console.log(error);
      }
    }
    getAllPublicR();
  }, []);
  const { setCurrentTab } = props;
  setCurrentTab(props.match.path);

  return (
    <div className="content-container">
      <div className="container-left">
        {publicRoutines ? (
          <div className="routine-list-holder ">
            <div className="routines-list header-row">
              <span>Id</span>
              <span>Name</span>
              <span>Goal</span>
              <span>Is Public?</span>
              <span>Creator</span>
            </div>
            {publicRoutines?.map(
              ({ goal, name, isPublic, id, activities, creatorName }) => (
                <div key={id ? id : 90} className="routines-list">
                  <span>{id}</span>
                  <span>
                    <p>{name}</p>{" "}
                  </span>
                  <span>
                    <p>{goal}</p>
                  </span>
                  <span>{isPublic ? "Yes" : "No"}</span>
                  <span>{creatorName}</span>
                  <span className="activities-info">
                    Number of Activities {activities && activities.length}
                  </span>

                  <div className="activities-list header-row">
                    <span> Name</span>
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
              )
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Routines;
