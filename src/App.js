import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import routes from "./routes";

const App = () => {
  return (
    <div
    // style={{
    //   display: "flex",
    //   flexDirection: "column",
    //   justifyContent: "center",
    //   alignItems: "center",
    //   height: "100vh",
    // }}
    >
      <Router>
        <Layout>
          <Switch>
            {routes.map((route, key) => {
              return (
                <Route
                  exact
                  path={route.path}
                  component={route.component}
                  key={key}
                />
              );
            })}
          </Switch>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
