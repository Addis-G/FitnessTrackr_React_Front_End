import React, { useState, useEffect } from "react";

import { createActivity } from "../api/createActivity";
const NewActivity = (props) => {
  const { modalStatus, setModalStatus, allActivities, setActivities } = props;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [notifyType, setNotifyType] = useState("");
  const [notifyMessage, setNotifyMessage] = useState("");

  useEffect(() => {
    setNotifyMessage("");
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
      const {
        id,
        name: routineName,
        description: routineDesc,
        error,
      } = await createActivity({
        name,
        description,
      });

      //   getAllActivities(await getUserRoutines());
      if (error) {
        throw error;
        return;
      }

      setNotifyType("notifyType-success");
      setNotifyMessage(`Routine Activity created Successfully...`);
      setActivities([
        { id, routineName: name, routineDesc: description },
        ...allActivities,
      ]);
      setName("");
      setDescription("");
    } catch (error) {
      setName("");
      setDescription("");
      setNotifyType(`notifyType-error`);
      setNotifyMessage(`${error}`);
    }
  };
  const handleNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };

  return (
    <div className={`modal ${modalStatus}`}>
      <form className="new-routine-activity" onSubmit={handleSubmit}>
        <input
          placeholder="Activity Name"
          type="text"
          value={name}
          onChange={handleNameChange}
        />
        <input
          placeholder="Activity Description"
          type="text"
          value={description}
          onChange={handleDescriptionChange}
        />

        <span>
          <button onClick={handleCreateBtnClick}> Create</button>
          <button onClick={handleClosBtnClick}> Close</button>
        </span>
        <span className={notifyType}>{notifyMessage}</span>
      </form>
    </div>
  );
};

export default NewActivity;
