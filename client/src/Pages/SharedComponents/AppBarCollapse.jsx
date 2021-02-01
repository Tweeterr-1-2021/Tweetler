import React from "react";
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../actions/Users/usersActions';
import { Button, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ButtonAppBarCollapse from "./ButtonAppBarCollapse";
import AccountCircle from "@material-ui/icons/AccountCircle";



const styles = (theme) => ({
  root: {
    position: "absolute",
    right: 0,
  },
  buttonBar: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    margin: "10px",
    paddingLeft: "16px",
    right: 26,
    position: "relative",
    width: "100%",
    background: "transparent",
  },
});

const AppBarCollapse = (props) => {
  const userInStore = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const logout = () => {
    // localStorage.removeItem('Authorization')
    // localStorage.removeItem('id')
    // window.location.reload()
    dispatch(logOut());

  }

  if (!userInStore.access) {
    return <Redirect to='/' />
  }
  return (


    <div className={props.classes.root} >
      <ButtonAppBarCollapse>
        <MenuItem>
          <Button href="/home" color="inherit">
            Home
        </Button>
        </MenuItem>
        <MenuItem>
          <Button hre="/explore" color="inherit">
            Explore
        </Button>
        </MenuItem>
        <MenuItem>
          <Button href="/bookmarks" color="inherit">
            BookMarks
        </Button>
        </MenuItem>
        <MenuItem>
          <Button href="/profile" color="inherit">
            <AccountCircle /> Profile
        </Button>
        </MenuItem>
        <MenuItem>
          <Button onClick={logout} color="inherit">
            LogOut
        </Button>
        </MenuItem>
      </ButtonAppBarCollapse>
      <div className={props.classes.buttonBar} id="appbar-collapse">
        {/* <Button
        href="/home"
        style={{ fontSize: "15px", fontWeight: "600" }}
        color="inherit"
      >
        Home
      </Button> */}
        {/* <Button
        href="/explore"
        style={{ fontSize: "15px", fontWeight: "600" }}
        color="inherit"
      >
        Explore
      </Button>
      <Button
        href="/bookmarks"
        style={{ fontSize: "15px", fontWeight: "600" }}
        color="inherit"
      >
        BookMarks
      </Button> */}
        {/* <Button href="/profile" color="inherit">
        <AccountCircle style={{ fontSize: "50px" }} />
      </Button> */}
        <Button
          onClick={logout}
          // href="/"
          style={{ fontSize: "15px", fontWeight: "600" }}
          color="inherit"
        >
          LogOut
      </Button>
      </div>
    </div >
  )
};

export default withStyles(styles)(AppBarCollapse);
