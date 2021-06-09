import { React, Fragment, useEffect, useState } from "react";

import { getAllPublicRoutines } from "../api/getAllPublicRoutines";

import UserPublicRoutines from "./userPublicRoutines";
const Routines = (props) => {
  const [publicRoutines, setPublicRoutines] = useState([]);
  const [modalStatus, setModalStatus] = useState("modal-hidden");
  const [selectdPR, setSelectedPR] = useState([]);

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

  const handleCreatorClick = (selectedCreatorName) => {
    setSelectedPR(
      publicRoutines.filter(
        ({ creatorName }) => creatorName == selectedCreatorName
      )
    );

    setModalStatus("modal-block");
  };
  const handleActivityClick = (selectedActivityName) => {
    setSelectedPR(
      publicRoutines.filter((routine) =>
        routine.activities.some(
          (activity) => activity.name == selectedActivityName
        )
      )
    );

    setModalStatus("modal-block");
  };

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
                <div key={id} className="routines-list">
                  <span>{id}</span>
                  <span>
                    <p>{name}</p>{" "}
                  </span>
                  <span>
                    <p>{goal}</p>
                  </span>
                  <span>{isPublic ? "Yes" : "No"}</span>
                  <span>
                    <span
                      className="creator-name"
                      onClick={() => {
                        handleCreatorClick(creatorName);
                      }}
                    >
                      {creatorName}
                    </span>
                  </span>
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
                      <span>
                        <span
                          className="activity-name"
                          onClick={() => handleActivityClick(name)}
                        >
                          {name}
                        </span>
                      </span>
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
      <UserPublicRoutines
        selectdPR={selectdPR}
        setModalStatus={setModalStatus}
        modalStatus={modalStatus}
      />
    </div>
  );
};

export default Routines;
