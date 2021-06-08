const BASE_URL = "http://fitnesstrac-kr.herokuapp.com/api/"; //"http://localhost:3000/api";

import { getToken } from "../auth/index";
export const createRoutineActivity = async ({
  routineId,
  activityId,
  count,
  duration,
}) => {
  try {
    const response = await fetch(
      BASE_URL + `/routines/${routineId}/activities`,
      {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
        method: "POST",
        body: JSON.stringify({ activityId, count, duration }),
      }
    );
    const result = await response.json();
    console.log(result);
    return result; //response.json();
  } catch (error) {
    throw error;
  }
};

export default createRoutineActivity;
