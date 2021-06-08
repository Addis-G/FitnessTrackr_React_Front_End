const BASE_URL = "http://fitnesstrac-kr.herokuapp.com/api/"; //"http://localhost:3000/api";
export const getAllPublicRoutines = async () => {
  try {
    const response = await fetch(BASE_URL + "/routines", {
      method: "GET",
    });
    // console.log(await response.json());

    return response.json();
  } catch (error) {
    throw error;
  }
};
