import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LandingPage from "./Pages/LandingPage/LandingPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import HomePage from "./Pages/HomePage/HomePage"
import ExplorePage from './Pages/ExplorePage/Explore'
import BookMarks from './Pages/BookMarks/BookMarks'
import Profile from './Pages/Profile/Profile'
import SignUp from './Pages/signUp/signup';
import {loadUser} from './actions/Users/usersActions'
// import './App.css';

function App() {
  const userInStore = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // const [name, setName] = useState('')
  // const [image, setImage] = useState('https://www.w3schools.com/howto/img_avatar.png')
  // const [email, setEmail] = useState('')
  const [id, setId] = useState(null)
  // const [token, setToken] = useState(localStorage.getItem("access"))
  const [token, setToken] = useState(userInStore.access)
  console.log('>>>>', token)


  useEffect(() => {
    dispatch(loadUser());
  }, [])

  // useEffect(() => {
  //   console.log('effectToken', token)
  // }, [token])

  // const setMyToken = (token) => {
  //   setToken(token)
  // }

  // const loadUser = () => {
  //   let options = {
  //     method: "get",
  //     headers: { "Content-Type": "application/json", Authorization: token, },
  //   };
  //   let path = 'http://127.0.0.1:8000/auth/users/me/';
  //   fetch(path, options)
  //     .then((data) => data.json())
  //     .then((data) => {
  //       // console.log('data', data)
  //       if (data.id) {
  //         setName(data.name)
  //         setImage(data.image)
  //         setEmail(data.email)
  //         setId(data.id)
  //         localStorage.setItem('id', data.id)
  //       } else {
  //         localStorage.removeItem('Authorization')
  //       }


  //       // setToken(localStorage.getItem("Authorization"))
  //     });
  // }
  // console.log('<<', token, ',,,', id)
  // console.log('(localStorage.getItem("Authorization")', localStorage.getItem("Authorization"))
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          {/* <Route exact path='/' component={LandingPage}/>
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/signup' component={SignUp} />
          <Route path="/home" exact render={() => <HomePage />} /> */}
          {/* <Route exact path='/login' render={(props) => token ? <Redirect to='/home' /> : (<LoginPage login={setMyToken} />)} /> */}
          <Route exact path='/' render={(props) => token && true ? <Redirect to='/home' /> : (<LandingPage />)} />
          <Route exact path='/login' render={(props) => token && true ? <Redirect to='/home' /> : (<LoginPage />)} />
          <Route exact path='/signup' render={(props) => token && true ? <Redirect to='/home' /> : (<SignUp />)} />
          <Route path='/home' render={(props) => token && true ? <Redirect to='/home' /> : (<HomePage />)} />
          <Route path="/explore" exact render={() => <ExplorePage />} />
          <Route path="/bookmarks" exact render={() => <BookMarks />} />
          <Route path="/profile" exact render={() => <Profile id={id} />} />
        </Switch>


      </div>
    </BrowserRouter>
  );
}

export default App;
