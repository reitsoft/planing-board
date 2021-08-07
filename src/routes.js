// @material-ui icons
// import Board from "@material-ui/icons/Dashboard";
// import MenuBook from "@material-ui/icons/MenuBook";
// import AccountBox from "@material-ui/icons/AccountBox";
// import Group from "@material-ui/icons/Group";
// import Settings from "@material-ui/icons/Settings";

import {
  Dashboard,
  MenuBook,
  AccountBox,
  Group,
  Settings,
} from "@material-ui/icons";

// pages
import DashboardPage from "./Pages/Dashboard";
import Anfragen from "./Pages/Anfragen";
import Kunden from "./Pages/Kunden";
import Mitarbeiter from "./Pages/Mitarbeiter";
import Verwaltung from "./Pages/Verwaltung";

const dashboardRoutes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <Dashboard/>,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/anfragen",
    name: "Anfragen",
    icon: <MenuBook/>,
    component: Anfragen,
    layout: "/admin",
  },
  {
    path: "/kunden",
    name: "Kunden",
    icon: <AccountBox/>,
    component: Kunden,
    layout: "/admin",
  },
  {
    path: "/mitarbeiter",
    name: "Mitarbeiter",
    icon: <Group/>,
    component: Mitarbeiter,
    layout: "/admin",
  },
  {
    path: "/verwaltung",
    name: "Verwaltung",
    icon: <Settings/>,
    component: Verwaltung,
    layout: "/admin",
  },
];

export default dashboardRoutes;
