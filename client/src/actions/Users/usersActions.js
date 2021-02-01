import { SIGNUP_SUCCESS, SIGNUP_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, USER_LOADED_SUCCESS, USER_LOADED_FAIL, LOGOUT, AUTHENTICATED_SUCCESS, AUTHENTICATED_FAIL } from '../actionTypes';
// import axios from "axios";

// export const checkAuthenticated = () => async dispatch => {
//     if (localStorage.getItem('access')) {
//         const config = {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             }
//         };

//         const body = JSON.stringify({ token: localStorage.getItem('access') });

//         try {
//             const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/verify/`, body, config)

//             if (res.data.code !== 'token_not_valid') {
//                 dispatch({
//                     type: AUTHENTICATED_SUCCESS
//                 });
//             } else {
//                 dispatch({
//                     type: AUTHENTICATED_FAIL
//                 });
//             }
//         } catch (err) {
//             dispatch({
//                 type: AUTHENTICATED_FAIL
//             });
//         }

//     } else {
//         dispatch({
//             type: AUTHENTICATED_FAIL
//         });
//     }
// };

export const signUp = (name, email, password, image) => async (dispatch) => {
    console.log("=============", name, email, password)
    try {
        let options = {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password, image })
        };
        let path = 'http://127.0.0.1:8000/auth/users/';
        fetch(path, options)
            .then((data) => data.json())
            .then((data) => {
                console.log('signup', data)
                dispatch({
                    type: SIGNUP_SUCCESS,
                    payload: data
                });

            });
    }
    catch (e) {
        console.log("action error", e)
        dispatch({
            type: SIGNUP_FAIL
        })
    }
}

export const loadUser = () => async dispatch => {
    if (localStorage.getItem('access')) {
        let options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
            }
        };

        try {

            let path = 'http://127.0.0.1:8000/auth/users/me/';
            fetch(path, options)
                .then((data) => data.json())
                .then((data) => {
                    console.log('loaduser', data)
                    dispatch({
                        type: USER_LOADED_SUCCESS,
                        payload: data
                    });

                });
        }
        catch (err) {
            dispatch({
                type: USER_LOADED_FAIL
            });
        }
    }
    else {
        dispatch({
            type: USER_LOADED_FAIL
        });
    }
};

export const logIn = (email, password) => async (dispatch) => {
    // console.log("=============", email, password)
    try {
        let options = {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        };
        let path = 'http://127.0.0.1:8000/auth/jwt/create/';
        fetch(path, options)
            .then((data) => data.json())
            .then((data) => {
                console.log('login', data)
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: data
                });
            });

        dispatch(loadUser());
    }
    catch (e) {
        console.log("action error", e)
        dispatch({
            type: LOGIN_FAIL
        })
    }
}

export const logOut = () => dispatch => {
    dispatch({
        type: LOGOUT
    });
};


