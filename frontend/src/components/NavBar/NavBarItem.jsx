import React from "react";
import { NavLink } from "react-router-dom";
import dataNavBar from "./dataNavBar";

function NavBarItem() {
  return (
    <div className="flex gap-6 mr-5 w-52">
      {dataNavBar.map((element) => (
        <NavLink to={element.url}>
          <div className="">
            <p className="text-1xl">{element.title}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default NavBarItem;
