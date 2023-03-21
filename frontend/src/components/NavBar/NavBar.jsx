/* eslint-disable import/no-unresolved */
import React, { useContext, useState, useEffect } from "react";
import NavBarItem from "@components/NavBar/NavBarItem";
import { Link } from "react-router-dom";
import { authContext } from "../../hooks/authContext";
import "../../Tailwind.css";

function NavBar() {
  const { logout, auth } = useContext(authContext);
  const [admin, setAdmin] = useState(false);

  const displayAdmin = () => {
    if (auth.data.admin === 1) setAdmin(true);
  };

  useEffect(() => {
    displayAdmin();
  }, [admin]);

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
      <Link to="/admin">
        <div
          className="flex justify-between w-full"
          style={{ display: auth.data.admin ? "block" : "none" }}
        >
          <p className="text-lg" id="btn-logout">
            admin
          </p>
        </div>
      </Link>

      <div
        className="flex justify-between w-full"
        style={{ display: auth.data.technicien ? "block" : "none" }}
      >
        <p className="text-lg" id="btn-logout">
          technicien
        </p>
      </div>

      <div>
        <NavBarItem />
      </div>
    </div>
  );
}

export default NavBar;
