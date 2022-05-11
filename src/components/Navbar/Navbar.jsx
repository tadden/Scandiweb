import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import ManPage from "../../Pages/ManPage/ManPage";
import WomenPage from "../../Pages/WomenPage/WomenPage";
import ChildrenPage from "../../Pages/ChildrenPage/ChildrenPage";
class Navbar extends Component {
  render() {
    return (
      <Router>
        <nav>
          <NavLink to="/">Women</NavLink>
          <NavLink to="/Man">Man</NavLink>
          <NavLink to="/Children">Children</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<WomenPage />} />
          <Route path="/Man" element={<ManPage />} />
          <Route path="/Children" element={<ChildrenPage />} />
        </Routes>
      </Router>
    );
  }
}

export default Navbar;
