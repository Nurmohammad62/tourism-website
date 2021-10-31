import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTour from './Pages/AddTour/AddTour';
import Booking from './Pages/Booking/Booking';
import Home from './Pages/Home/Home';
import ManageAllBookings from './Pages/ManageAllBookings/ManageAllBookings';
import MyBookings from './Pages/MyBookings/MyBookings';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import Login from './Pages/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    },3000)
  },[]);

  const override = css`
  display: flex;
  margin: 100px auto;
`;

  return (
    <div>
      {isLoading ? <DotLoader color={'#446059'} loading={isLoading} css={override} size={50} />
      :
        <AuthProvider>
          <BrowserRouter>
            <Header></Header>
            <Switch>
              <Route exact path='/'>
                <Home></Home>
              </Route>
              <Route path='/home'>
                <Home></Home>
              </Route>
              <PrivateRoute path='/booking/:tourId'>
                <Booking></Booking>
              </PrivateRoute>
              <PrivateRoute path='/myBookings'>
                <MyBookings></MyBookings>
              </PrivateRoute>
              <PrivateRoute path='/manageBookings'>
                <ManageAllBookings></ManageAllBookings>
              </PrivateRoute>
              <PrivateRoute path='/addATour'>
                <AddTour></AddTour>
              </PrivateRoute>
              <Route path='/login'>
                <Login></Login>
              </Route>
            </Switch>
            <Footer></Footer>
          </BrowserRouter>
        </AuthProvider>
      }
    </div>
  );
}

export default App;
