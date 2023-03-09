// import Login from "@components/Login/Login";
import React from "react";
import { Routes, Route } from "react-router-dom";
// import Login from "./components/Login/Login";
// import ProtectedRoute from "./hooks/ProtectedRoute";
import Registrer from "./components/Login/Registrer";
import Error from "./pages/Error";
import Home from "./components/Home";
import Technicien from "./pages/technicien";
import Admin from "./pages/admin";
import ContainerLogin from "./components/Login/ContainerLogin";

// import { CurrentDecisionContextProvider } from "./Contexts/DecisionContexts";

function Transition() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ContainerLogin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/technicien" element={<Technicien />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Error />} />
        <Route path="/create" element={<Registrer />} />
      </Routes>
    </div>
  );
}

export default Transition;
