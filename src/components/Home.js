import { Link } from "react-router-dom";
const Home = (props) => {
  const { user, setCurrentTab, path } = props;
  setCurrentTab(path);
  return (
    <div className="home-class">
      <span className="home-title">Wellcome to Fitness Tracker!!</span>
      <span className="navigation-list">
        <ul>
          <li>
            <Link to="/routines">Routines</Link>
          </li>
          <li>
            <Link to={user ? "/myroutines" : "/login"}>My Routines</Link>
          </li>
          <li>
            <Link to="/activities">Activities</Link>
          </li>
        </ul>
      </span>
    </div>
  );
};
export default Home;
