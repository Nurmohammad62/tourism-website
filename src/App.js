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

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/booking/:tourId'>
            <Booking></Booking>
          </Route>
          <Route path='/myBookings'>
            <MyBookings></MyBookings>
          </Route>
          <Route path='/manageBookings'>
            <ManageAllBookings></ManageAllBookings>
          </Route>
          <Route path='/addATour'>
            <AddTour></AddTour>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
