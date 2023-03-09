/* eslint-disable import/no-unresolved */
import React, { useContext } from "react";
import NavBarItem from "@components/NavBar/NavBarItem";
import { authContext } from "../../hooks/authContext";

function NavBar() {
  const { logout } = useContext(authContext);

  return (
    <div className="bg-[#F8991C] h-10 w-screen flex justify-end items-center absolute top-0 p-3">
      <div className="flex justify-between w-full">
        <button
          id="btn-logout"
          type="button"
          onClick={() => logout()}
          className="text-lg"
        >
          Logout
        </button>
      </div>
      <div>
        <NavBarItem />
      </div>
    </div>
  );
}

export default NavBar;
