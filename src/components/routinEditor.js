import React, { useState, useEffect } from "react";
import Activities from "./Activities";
import { updateRoutine } from "../api/updateRoutine";
import delteRoutine from "../api/deleteRoutine";
import getUserRoutines from "../api/getUserRoutines";
import NewRoutineActivity from "./AddRoutineActivity";
import { Link } from "react-router-dom";

const RoutineEditor = (props) => {
  const { userRoutines, setUserRoutines } = props;
  const { routineId } = props.match.params;
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState("");
  const [notifyType, setNotifyType] = useState("");
  const [notifyMessage, setNotifyMessage] = useState("");
  const [modalStatus, setModalStatus] = useState("modal-hidden");
  useEffect(() => {
    const routine = userRoutines.find((r) => r.id == +routineId);
    setName(routine.name);
    setGoal(routine.goal);
    setIsPublic(routine.isPublic);
  }, []);

  const handleGoalChange = (e) => {
    setGoal(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  const handleAddActivity = (e) => {
    e.preventDefault();
    setModalStatus("modal-block");
  };
  const handleDeleteClick = async (e) => {
    e.preventDefault;
    try {
      const deletedRoutine = await delteRoutine(routineId);
      console.log(deletedRoutine);
      setName("");
      setGoal("");
      setNotifyType("notifyType-success");
      setNotifyMessage(`Routine with routine id ${routineId} is deleted...`);
      setUserRoutines(await getUserRoutines());
    } catch (error) {
      setNotifyType("notifyType-error");
      setNotifyMessage(error);
    }
  };
  const handleSaveClick = async (e) => {
    e.preventDefault();
    try {
      const updatedRoutine = await updateRoutine({
        routineId,
        name,
        goal,
        isPublic,
      });
      setNotifyType("notifyType-success");
      setNotifyMessage("Successfuly Updated the routine...");
    } catch (error) {
      setNotifyType("notifyType-error");
      setNotifyMessage(error);
    }
  };
  return (
    <div className="content-container">
      <div className="container-left">
        <span className="back-to-my-routine">
          <Link to="/myroutines">Back</Link>
        </span>
        <form className="routine-editor" onSubmit={handleFormSubmit}>
          <span className="control-holder">
            <label>Name</label>
            <input type="text" value={name} onChange={handleNameChange} />
          </span>
          <span className="control-holder">
            <label>Goal</label>
            <input type="text" value={goal} onChange={handleGoalChange} />
          </span>
          <span className="control-holder">
            <button onClick={handleSaveClick}>Save</button>
            <button onClick={handleDeleteClick}>Delete</button>
            <button onClick={handleAddActivity}>Add Activity</button>
          </span>
          <span className={notifyType}>{notifyMessage}</span>
        </form>
        <NewRoutineActivity
          routineId={routineId}
          modalStatus={modalStatus}
          setModalStatus={setModalStatus}
          userRoutines={userRoutines}
          setUserRoutines={setUserRoutines}
        />
      </div>
    </div>
  );
};
export default RoutineEditor;
