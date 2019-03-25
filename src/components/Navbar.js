import React from "react";
import logo from "../logo.svg";

const Navbar = ({ value, getSearchString }) => {
  return (
    <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
      <div className="form-group justify-content-center row col-12 my-2">
        <input
          value={value}
          onChange={e => getSearchString(e.target.value)}
          className="form-control col-9 mr-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
    </nav>
  );
};

export default Navbar;
