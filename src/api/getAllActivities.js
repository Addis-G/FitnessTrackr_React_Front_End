const BASE_URL = "http://fitnesstrac-kr.herokuapp.com/api/"; // "http://localhost:3000/api";
import Activities from "../components/Activities";

const getAllActivities = async () => {
  try {
    const response = await fetch(BASE_URL + `/activities`, {
      method: "GET",
    });
    return response.json();
  } catch (error) {
    throw error;
  }
};

export default getAllActivities;
