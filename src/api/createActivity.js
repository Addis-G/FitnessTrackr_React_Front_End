const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api/"; // "http://localhost:3000/api";

import { getToken } from "../auth/index";
export const createActivity = async ({ name, description }) => {
  try {
    console.log(name, description);
    const response = await fetch(BASE_URL + "/activities", {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      method: "POST",
      body: JSON.stringify({ name, description }),
    });

    return response.json();
  } catch (error) {
    throw error;
  }
};

export default createActivity;
