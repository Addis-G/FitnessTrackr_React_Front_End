import React, { useEffect, useState } from "react";
import getAllActivities from "../api/getAllActivities";
import NewActivity from "./NewActivity";
const Activities = (props) => {
  const [activities, setActivities] = useState([]);

  const [notifyType, setNotifyType] = useState("");
  const [notifyMessage, setNotifyMessage] = useState("");
  const [modalStatus, setModalStatus] = useState("modal-hidden");

  const handleAddActivity = (e) => {
    e.preventDefault();
    setModalStatus("modal-block");
  };

  const { user } = props;
  useEffect(() => {
    async function gAA() {
      setActivities(await getAllActivities());
    }
    gAA();
  }, []);
  const { setCurrentTab } = props;
  setCurrentTab(props.match.path);

  return (
    <>
      <div className="content-container">
        <div className="container-left">
          <span className="control-holder">
            {user ? (
              <button onClick={handleAddActivity}>Add Activity</button>
            ) : (
              <></>
            )}
          </span>
          <div className="activities-list header-row">
            <span> Name</span>
            <span>Description</span>
          </div>
          {activities?.map(({ name, description }) => (
            <div className="activities-list">
              <span>{name}</span>
              <span>{description}</span>
            </div>
          ))}
        </div>
      </div>

      <NewActivity
        allActivities={activities}
        setActivities={setActivities}
        modalStatus={modalStatus}
        setModalStatus={setModalStatus}
        user={user}
      />
    </>
  );
};

export default Activities;
