import { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import CheckOut from "./Components/CheckOut/CheckOut";
import BookOrders from "./Components/BookOrders/BookOrders";
import Admin from "./Components/Admin/Admin";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            
            {/* <Route path="/book/:_id">
            <CheckOut></CheckOut>
            </Route>
            <Route path="/orders">
            <BookOrders></BookOrders>
            </Route>
            <Route  path="/admin">
            <Admin></Admin>
            </Route> */}

            <PrivateRoute path="/book/:_id">
              <CheckOut></CheckOut>
            </PrivateRoute>
            <PrivateRoute path="/bookOrders">
              <BookOrders></BookOrders>
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
