import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Drawer, Typography, makeStyles } from "@material-ui/core";

import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

import ebzLogo from "../logo.png";
import routes from "../routes";
import { NavLink } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles({
  drawer: {
    background: "#f0f9f9",
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  navigationLogo: {
    width: "16%",
  },
  navigationLogoContainer: {
    display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 20,
  },
  iten: {},
  itemActive: {
    background: "#F2F2F2",
  },
});

const Navigation = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  return (
    <div>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.navigationLogoContainer}>
          <img
            className={classes.navigationLogo}
            src={ebzLogo}
            alt="EBZ Logo"
          />
        </div>
        <div><hr/></div>
        <List>
          {routes.map((route, key) => {
            return (
              <ListItem
                button
                onClick={() => history.push(route.path)}
                className={
                  location.pathname === route.path
                    ? classes.itemActive
                    : classes.item
                }
                key={key}
              >
                <ListItemIcon>{route.icon}</ListItemIcon>
                <ListItemText primary={route.name} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
};

export default Navigation;
