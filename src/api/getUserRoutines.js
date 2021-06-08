const BASE_URL = "http://fitnesstrac-kr.herokuapp.com/api/"; // "http://localhost:3000/api";
import { getToken, getCurrentUser } from "../auth/index";

const getUserRoutines = async () => {
  const user = getCurrentUser();

  try {
    const response = await fetch(
      BASE_URL + `/users/${user.username}/routines`,
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
        method: "GET",
      }
    );

    return response.json();
  } catch (error) {
    throw error;
  }
};

export default getUserRoutines;
