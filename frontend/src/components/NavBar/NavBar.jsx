/* eslint-disable import/no-unresolved */
import React, { useContext, useState, useEffect } from "react";
import NavBarItem from "@components/NavBar/NavBarItem";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../hooks/authContext";
import "../../Tailwind.css";

function NavBar() {
  const { logout, auth } = useContext(authContext);
  const [admin, setAdmin] = useState(false);
  const navigate = useNavigate();
  const displayAdmin = () => {
    if (auth.data.admin === 1) setAdmin(true);
  };

  const goAdmin = () => {
    navigate("home/admin");
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

      <div
        className="flex justify-between w-full"
        style={{ display: auth.data.admin ? "block" : "none" }}
      >
        <button
          className="text-lg"
          id="btn-logout"
          type="button"
          onClick={() => goAdmin()}
        >
          admin
        </button>
      </div>

      <div
        className="flex justify-between w-full"
        style={{ display: auth.data.technicien ? "block" : "none" }}
      >
        <button
          className="text-lg"
          id="btn-logout"
          type="button"
          onClick={() => goAdmin()}
        >
          technicien
        </button>
      </div>

      <div>
        <NavBarItem />
      </div>
    </div>
  );
}

export default NavBar;
