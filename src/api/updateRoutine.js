const BASE_URL = "http://fitnesstrac-kr.herokuapp.com/api/"; //"http://localhost:3000/api";
import { getToken } from "../auth/index";
export const updateRoutine = async ({ routineId, name, goal, isPublic }) => {
  console.log(routineId);
  try {
    const response = await fetch(BASE_URL + `/routines/${routineId}`, {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      method: "PATCH",
      body: JSON.stringify({ name, goal, isPublic }),
    });

    return response.json();
  } catch (error) {
    throw error;
  }
};

export default updateRoutine;
