import React, { useEffect, useState } from "react";
import getAllActivities from "../api/getAllActivities";

import createRoutineActivity from "../api/createRoutineActivity";
import { Link } from "react-router-dom";
import getUserRoutines from "../api/getUserRoutines";
const NewRoutineActivity = (props) => {
  const { modalStatus, setModalStatus, setUserRoutines } = props;
  const [count, setactivityCount] = useState("");
  const [duration, setactivityDuration] = useState("");
  const [activityId, setActivityID] = useState(0);
  const [activities, setActivities] = useState([]);
  const [notifyType, setNotifyType] = useState("");
  const [notifyMessage, setNotifyMessage] = useState("");
  const { routineId } = props;
  useEffect(() => {
    async function gAA() {
      setActivities(await getAllActivities());
    }
    gAA();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleClosBtnClick = (e) => {
    e.preventDefault(e);
    setModalStatus("modal-hidden");
  };
  const handleCreateBtnClick = async (e) => {
    e.preventDefault(e);

    try {
      const { error } = await createRoutineActivity({
        routineId,
        activityId,
        duration,
        count,
      });
      if (error) {
        throw error;
        return;
      }
      setNotifyType("notifyType-success");
      setNotifyMessage(`Routine Activity created Successfully...`);
      setUserRoutines(await getUserRoutines());
      setactivityCount("");
      setactivityDuration("");
    } catch (error) {
      setNotifyType("notifyType-error");

      setNotifyMessage(error);
    }
  };
  const handleCountChange = (e) => {
    e.preventDefault();
    setactivityCount(e.target.value);
  };
  const handleDurationChange = (e) => {
    e.preventDefault();
    setactivityDuration(e.target.value);
  };
  const handleSelectChange = (e) => {
    e.preventDefault();

    setActivityID(e.target.value);
  };
  return (
    <div className={`modal ${modalStatus}`}>
      <form className="new-routine-activity" onSubmit={handleSubmit}>
        <input
          placeholder="Activity Count"
          type="text"
          value={count}
          onChange={handleCountChange}
        />
        <input
          placeholder="Activity Duration"
          type="text"
          value={duration}
          onChange={handleDurationChange}
        />
        <select className="activity-list" onChange={handleSelectChange}>
          {activities.map((activity) => (
            <option key={activity.id} value={activity.id}>
              {activity.name}
            </option>
          ))}
        </select>

        <span>
          <button onClick={handleCreateBtnClick}> Create</button>
          <button onClick={handleClosBtnClick}> Close</button>
        </span>
        <span className={notifyType}>{notifyMessage}</span>
      </form>
    </div>
  );
};

export default NewRoutineActivity;
