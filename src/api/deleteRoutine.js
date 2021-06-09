const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api/"; //"http://localhost:3000/api";

import { getToken } from "../auth/index";
const delteRoutine = async (routineId) => {
  try {
    const response = await fetch(BASE_URL + `/routines/${routineId}`, {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      method: "DELETE",
    });

    return response.json();
  } catch (error) {
    throw error;
  }
};
export default delteRoutine;
