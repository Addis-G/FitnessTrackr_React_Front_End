const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api/"; // "http://localhost:3000/api";
export const login = async (username, password) => {
  try {
    const response = await fetch(BASE_URL + "/users/login", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify({ username, password }),
    });

    return await response.json();
  } catch (error) {
    throw error;
  }
};

export default login;
