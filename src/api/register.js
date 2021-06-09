const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api/"; //"http://localhost:3000/api";
export const register = async (username, password) => {
  console.log({ username, password });
  try {
    const response = await fetch(BASE_URL + "/users/register", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify({ username, password }),
    });

    return response.json();
  } catch (error) {
    throw error;
  }
};

export default register;
