import { React, useState } from "react";
import { createRoutine } from "../api/createRoutine";
import getUserRoutines from "../api/getUserRoutines";
const NewRoutine = ({ setUserRoutines }) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(true);

  const [notifyType, setNotifyType] = useState("");
  const [notifyMessage, setNotifyMessage] = useState("");

  const handleRoutineNameChange = (e) => {
    setName(e.target.value);
  };
  const handleRoutinGoalChange = (e) => {
    setGoal(e.target.value);
  };
  const handleIsPublicChange = (e) => {
    e.preventDefault();
    setIsPublic(e.target.value);
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { error } = await createRoutine(name, goal, isPublic);
      setUserRoutines(await getUserRoutines());
      if (error) {
        throw error;
        return;
      }
      setNotifyType("notifyType-success");
      setNotifyMessage(`Routine created Successfully...`);
    } catch (error) {
      setNotifyType(`notifyType-error`);
      setNotifyMessage(`${error}`);
    }
  };
  return (
    <>
      <span>Create Routine</span>
      <form className="form-new-routine" onSubmit={handleFormSubmit}>
        <span>
          <label> Name</label>
          <input type="text" onChange={handleRoutineNameChange} />
        </span>
        <span>
          <label> Goal</label>
          <input type="text" onChange={handleRoutinGoalChange} />
        </span>
        <span>
          <label>Is Public </label>
          <span className="ispublic-radio">
            <span>
              {" "}
              <label htmlFor="Yes">Yes</label>
              <input
                type="radio"
                name="isPublic"
                checked={isPublic == "true"}
                id="Yes"
                value={true}
                onChange={handleIsPublicChange}
              />
            </span>
            <span>
              <label htmlFor="No">No</label>
              <input
                type="radio"
                name="isPublic"
                checked={isPublic == "false"}
                value={false}
                id="No"
                onChange={handleIsPublicChange}
              />
            </span>
          </span>
        </span>

        <span>
          <button>Create</button>
        </span>
        <span className={notifyType}>{notifyMessage}</span>
      </form>
    </>
  );
};

export default NewRoutine;
