export function storeCurrentUser(user) {
  localStorage.setItem("currentUser", JSON.stringify(user));
}
export function storeToken(token) {
  localStorage.setItem("token", token);
}

export function getToken() {
  const token = localStorage.getItem("token");
  return token;
}

export function getCurrentUser() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  return user;
}

export function clearCurrentUser() {
  localStorage.removeItem("currentUser");
}
export function clearToken() {
  localStorage.removeItem("token");
}
