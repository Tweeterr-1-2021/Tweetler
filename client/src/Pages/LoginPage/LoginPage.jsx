import { Redirect } from "react-router-dom";
import Link from "@material-ui/core/Link";
import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { GiHummingbird } from "react-icons/gi";
import "./LoginPage.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    width: "30%",
    height: "100px",
    margin: theme.spacing(1),
    backgroundColor: theme.palette.info.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: theme.palette.info.main,
  },
  textcolor: {
    border: "#2196f3",
    borderRadius: "4px",
  },
}));

const LoginPage = ({ login }) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loadUser = () => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Authorization': localStorage.getItem("Authorization") },
    };
    return fetch('http://localhost:8000/auth/users/me', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log("ME", data)
        localStorage.setItem('id', data.id)
        login(localStorage.getItem("Authorization"))

      })

  }

  console.log("hello");
  const token = (e) => {
    e.preventDefault();
    let options = {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    };
    let path = "http://127.0.0.1:8000/auth/jwt/create/";
    fetch(path, options)
      .then((data) => data.json())
      .then((data) => {
        console.log("data", data);
        localStorage.setItem("Authorization", `JWT ${data.access}`);

        loadUser()


      });
  };
  // await axios.post(`http://localhost:8000/auth/jwt/create`,
  //     {
  //         email: formData.email,
  //         password: formData.password,
  //     })

  //     .then(async () => {
  //         console.log("post", result)
  //         setAccess(result.data.access);
  //         setRefresh(result.data.refresh);
  //         let res = await axios({
  //             url: 'http://localhost:8000/auth/users/me/',
  //             method: 'get',
  //             // timeout: 8000,
  //             headers: {
  //                 'Authorization': 'JWT ' + access,
  //                 'Content-Type': 'application/json',
  //             }
  //         })
  //         if (res.status == 200) {
  //             // test for status you want, etc
  //             console.log("get", res)
  //             localStorage.setItem("access_token", access);
  //             localStorage.setItem("refresh_token", refresh);
  //             dispatch(logIn(res.data.name, res.data.email, res.data.id))
  //             window.location.href = "/"
  //         }

  //     })
  //     .catch(() => {
  //         console.error("err===== =>", err);
  //     })

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{
        border: "groove",
        borderColor: "#2196f38f",
        borderRadius: "12px",
        marginTop: "40px",
        marginBottom: "40px",
      }}
    >
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <GiHummingbird style={{ fontSize: "85px" }} />
        </Avatar>
        <Typography component="h1" variant="h5">
          LogIn
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                className={classes.textcolor}
                autoComplete="username"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                required
                fullWidth
                label="username"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.textcolor}
                variant="outlined"
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                fullWidth
                label="Password"
                autoComplete="password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={token}
          >
            LogIn
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signup" variant="body2">
                Sign up for Twitter
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default LoginPage;