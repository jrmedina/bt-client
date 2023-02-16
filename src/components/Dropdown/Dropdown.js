import React from "react";
import { useHistory } from "react-router-dom";
import "./Dropdown.css";

const Dropdown = () => {
  const history = useHistory();

  return (
    <form className="dropdown-container">
      <label>Locations: </label>
      <select onChange={(e) => history.push(e.target.value)}>
        <option value="" disabled>
          Select Other Locations
        </option>
        <option value="/denver">Current</option>
        <option value="/reno">Reno, NV</option>
        <option value="/austin">Austin, TX</option>
        <option value="/tampa">Tampla, FL</option>
      </select>
    </form>
  );
};

export default Dropdown;
