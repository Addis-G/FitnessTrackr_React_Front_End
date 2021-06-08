import {
  Header,
  Routines,
  Activities,
  MyRoutines,
  UserMgmt,
  Login,
  LogOut,
  RoutineEditor,
  Home,
} from "./components";

import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getCurrentUser } from "./auth";
import getUserRoutines from "./api/getUserRoutines";

const App = (props) => {
  const [user, setUser] = useState(null);
  const [currentTab, setCurrentTab] = useState(props?.match?.path);

  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

  const [userRoutines, setUserRoutines] = useState([]);
  useEffect(() => {
    async function gUR() {
      if (!user) {
        return;
      }
      try {
        const ur = await getUserRoutines();
        setUserRoutines(ur);
      } catch (error) {
        console.log(error);
      }
    }
    gUR();
  }, [user]);

  return (
    <Router>
      <div className="navbar">
        <Header user={user} currentTab={currentTab} />
        <UserMgmt
          user={user}
          setUser={setUser}
          setCurrentTab={setCurrentTab}
          currentTab={currentTab}
        />
      </div>

      {!user ? (
        <Route
          path="/register"
          render={(props) => (
            <Login
              {...props}
              path="/register"
              setUser={setUser}
              activityType={"Register"}
              setCurrentTab={setCurrentTab}
            />
          )}
        />
      ) : (
        ""
      )}
      {!user ? (
        <Route
          path="/login"
          render={(props) => (
            <Login
              {...props}
              path="/login"
              setUser={setUser}
              activityType={"Login"}
              setCurrentTab={setCurrentTab}
              setUserRoutines={setUserRoutines}
            />
          )}
        />
      ) : (
        ""
      )}

      <Route
        path="/logout"
        render={(props) => <LogOut {...props} setUser={setUser} />}
      />
      <Switch>
        <Route
          path="/home"
          render={(props) => (
            <Home
              {...props}
              user={user}
              setCurrentTab={setCurrentTab}
              path="/home"
            />
          )}
        />
        <Route
          path="/routines"
          render={(props) => (
            <Routines
              {...props}
              path="/routines"
              setCurrentTab={setCurrentTab}
            />
          )}
        />
        <Route
          path="/myroutines"
          exact
          render={(props) => (
            <MyRoutines
              {...props}
              setCurrentTab={setCurrentTab}
              userRoutines={userRoutines}
              setUserRoutines={setUserRoutines}
            />
          )}
        />
        <Route
          path="/activities"
          render={(props) => (
            <Activities {...props} setCurrentTab={setCurrentTab} user={user} />
          )}
        />
        <Route
          path="/myroutines/:routineId"
          render={(props) => (
            <RoutineEditor
              {...props}
              userRoutines={userRoutines}
              setUserRoutines={setUserRoutines}
            />
          )}
        ></Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
