import React, { Component } from "react";
import styles from "./App.module.css";
import NavBar from "../Components/Navbar/Navbar";
import HomePage from "../Components/IndexPage/HomePage";
import EventPage from "../Components/EventPage/EventPage";
import LostPage from "../Components/LostPage/LostPage";
import AttendancePage from "../Components/AttendancePage/AttendancePage";
import CanteenPage from "../Components/CanteenPage/CanteenPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={styles.App}>
          <span className={styles.Navbar}>
            <NavBar />
          </span>{" "}
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/event" component={EventPage} />
            <Route path="/lost" component={LostPage} />
            <Route path="/attendance" component={AttendancePage} />
            <Route path="/canteen" component={CanteenPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
