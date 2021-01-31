import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AppBarCollapse from "./AppBarCollapse";
import { GiHummingbird } from "react-icons/gi";

import "./sharedStyle.css";

const styles = {
  root: {
    flexGrow: 1,
    backgroundcolor: "#1e2758",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  navigation: {},
  toggleDrawer: {},
  appTitle: {},
};

function NavBar(props) {
  const { classes } = props;
  return (
    <AppBar position="fixed" className={classes.navigation} >
      <Toolbar>
        <IconButton href="/home" color="inherit">
          <GiHummingbird className="Header" style={{ fontSize: "50px" }} />
        </IconButton>
        <Typography
          variant="title"
          color="inherit"
          className="Header"
          style={{ fontSize: "30px" }}
        >
          TWEETER
        </Typography>
        <AppBarCollapse />
      </Toolbar>
    </AppBar>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
