import React from "react";
import Navigation from "./Navigation";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    height: "100vh",
    background: "#F4F4F4"
  },
  page: {
    width: "100%",
    marginLeft: 40,
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <Navigation />
      </div>
      <div className={classes.page}>{children}</div>
    </div>
  );
};

export default Layout;
