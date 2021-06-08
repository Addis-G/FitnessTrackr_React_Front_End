import { Redirect } from "react-router-dom";
import { clearCurrentUser, clearToken } from "../auth/index";

const LogOut = (props) => {
  const { setUser } = props;
  setUser(null);
  clearCurrentUser();
  clearToken();
  props.history.push("/home");
  return <></>;
};
export default LogOut;
