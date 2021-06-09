import { useEffect } from "react";
const UserPublicRoutines = (props) => {
  const { modalStatus, setModalStatus, selectdPR } = props;

  const handleCloseBtn = () => {
    setModalStatus("modal-hidden");
  };
  return (
    <div className={`modal ${modalStatus}`}>
      <div className="modal-child">
        <div className="routine-list-holder ">
          <div className="routines-list header-row">
            <span>Id</span>
            <span>Name</span>
            <span>Goal</span>
            <span>Is Public?</span>
          </div>
          {selectdPR?.map(
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
                  {/* <span className="creator-name">{creatorName}</span> */}
                </span>
                {/* <span className="activities-info">
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
                ))} */}
              </div>
            )
          )}
          <button onClick={handleCloseBtn}>Close</button>
        </div>
      </div>
    </div>
  );
};
export default UserPublicRoutines;
