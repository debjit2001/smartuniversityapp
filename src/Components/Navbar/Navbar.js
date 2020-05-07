import React from "react";
import { Button } from "reactstrap";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  return (
    <div>
      <Button outline color="success" size="lg" block>
        <Link to="/">Smart University App</Link>
      </Button>
      <div className={styles.Navbar}>
        <Button outline color="success">
          <Link to="/event">Event</Link>
        </Button>
        <Button outline color="success" onClick={props.click}>
          <Link to="/lost"> Lost</Link>
        </Button>
        <Button outline color="success" onClick={props.click}>
          <Link to="/attendance"> Attendance</Link>
        </Button>
        <Button outline color="success" onClick={props.click}>
          <Link to="/canteen">Canteen</Link>
        </Button>
      </div>
    </div>
  );
};
export default Navbar;
