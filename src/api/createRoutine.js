const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api/"; // "http://localhost:3000/api";

import { getToken } from "../auth/index";
export const createRoutine = async (name, goal, isPublic) => {
  try {
    const response = await fetch(BASE_URL + "/routines", {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      method: "POST",
      body: JSON.stringify({ name, goal, isPublic }),
    });

    return response.json();
  } catch (error) {
    throw error;
  }
};

export default createRoutine;
