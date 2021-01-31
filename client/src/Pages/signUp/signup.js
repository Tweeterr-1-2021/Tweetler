import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signUp } from '../../actions/Users/usersActions';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({

    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp({ signupFun }) {
    const classes = useStyles();
    const userInStore = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [image, setImage] = useState('https://www.w3schools.com/howto/img_avatar.png')
    const [accountCreated, setAccountCreated] = useState(false);
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        password: '',
        rePassword: ''
    });

    const { userName, email, password, rePassword } = formData;

    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();

        if (password === rePassword) {
            // console.log(userName, email, password)
            dispatch(signUp(userName, email, password, image));
            setAccountCreated(true);
        }
    };


    // if (isAuthenticated) {
    //     return <Redirect to='/' />
    // }
    if (accountCreated) {
        return <Redirect to='/login' />
    }

    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [image, setImage] = useState('https://www.w3schools.com/howto/img_avatar.png')
    // const [password, setPassword] = useState('')

    // const token = () => {
    //     let options = {
    //         method: "post",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({ email, password })
    //     };
    //     let path = 'http://127.0.0.1:8000/auth/jwt/create/';
    //     fetch(path, options)
    //         .then((data) => data.json())
    //         .then((data) => {
    //             console.log('data', data)
    //             localStorage.setItem('Authorization', `JWT ${data.access}`)
    //             // setTokenone(localStorage.getItem('Authorization'))
    //             signupFun((localStorage.getItem('Authorization')))

    //         });
    // }
    // const signUp = (e) => {
    //     e.preventDefault()
    //     let options = {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({ email, image, password, name })
    //     };
    //     let path = 'http://127.0.0.1:8000/auth/users/';
    //     fetch(path, options)
    //         .then((data) => data.json())
    //         .then((data) => {
    //             console.log(data)
    //             token()
    //         })
    // }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                autoComplete="userName"
                                name="userName"
                                value={userName}
                                variant="outlined"
                                required
                                fullWidth
                                id="userName"
                                label="User Name"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                value={email}
                                onChange={handleChange}
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                value={password}
                                autoComplete="current-password"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="rePassword"
                                label="Confirm Password"
                                type="password"
                                id="rePassword"
                                value={rePassword}
                                // autoComplete="current-password"
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={signUp}
                    >
                        Sign Up
          </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link to="/login" variant="body2">
                                Already have an account? Sign in
              </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}