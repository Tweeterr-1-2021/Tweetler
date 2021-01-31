import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logIn } from '../../actions/Users/usersActions';
import './LoginPage.css';

const LoginPage = () => {
    const userInStore = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    

    const handleSubmit = e => {
        e.preventDefault();
        console.log(email)

        dispatch(logIn(email, password));
    };
    

    // const handleSubmit = (async () => {
    //     console.log("hello");
    //     dispatch(logIn(username))

    // const loadUser = () => {
    //     const requestOptions = {
    //         method: 'GET',
    //         headers: { 'Content-Type': 'application/json', 'Authorization': localStorage.getItem("Authorization") },
    //     };
    //     return fetch('http://localhost:8000/auth/users/me', requestOptions)
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log("ME", data)
    //             return data
    //         })

    // })

    // const token = (e) => {
    //     e.preventDefault()
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
    //             login((localStorage.getItem('Authorization')))
    //         });
    // }

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
        <div id="login">
            <div id="login-form-container">
                <form id="login-form" onSubmit={handleSubmit}>
                    <svg viewBox="0 0 24 24" className="tweeter-logo"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
                    <h1>Log in to Twitter</h1>
                    <br />
                    <div className="column">
                        {/* <label htmlFor="username" >Phone, email, or username</label> */}
                        <label htmlFor="email" >Email</label>
                        <input type="email" className="email" name="email" value={email} onChange={(e) => handleChange(e)} />
                        <div className="email error" ></div>

                        <label htmlFor="Password" >Password</label>
                        <input type="password" className="password" name="password" value={password} onChange={handleChange}/>
                        <div className="password error"></div>

                    </div>
                    <br />
                    <button className="login-btn" type="submit">Log in</button><br />
                </form>
                <div>
                    <div className="forgot-password" >
                        <Link to="/reset-password" >
                            <span>Forgot password?</span>
                        </Link>
                        <span > . </span>
                        <Link to="/signup" >
                            <span >Sign up for Twitter</span>
                        </Link>
                    </div>
                </div>

            </div>
        </div>

    ) 
}

export default LoginPage;