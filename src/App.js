import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders';

const promise = loadStripe('pk_test_51MSNJESJEJH6BVnStitL8vycvNG45rPzWgFyRZjP36AUdU3XLHOyzbw4hbXa2YH1smI91dc11tTMwFiVdwxrGP7u00yJyyFXb4')
function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("The user is ", authUser);
      if (authUser) {
        //  The user just logged in or the user was logged in 
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // The user is logged out 
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }

    })
  }, [])
  // [user] than this indicates that it will run when the user changes 
  // empty square brackets indicates that it will run only once when the app component loads..


  return (
    <Router>
      <div className="app">
        <Routes>

          <Route path='/orders' element={
            [
              <Header />,
              <Orders />
            ]
          } />


          <Route path='/login' element={
            <Login />
          } />

          <Route path='/checkout' element={
            [
              <Header />,
              <Checkout />
            ]
          } />

          <Route path='/payment' element={
            [
              <Header />,
              <Elements stripe={promise} >
                <Payment />
              </Elements>
            ]
          } />

          <Route path='/' element={
            [<Header />,
            <Home />]
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
