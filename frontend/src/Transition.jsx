import React from "react";
import { Routes, Route } from "react-router-dom";
// import Login from "./components/Login/Login";
// import ProtectedRoute from "./hooks/ProtectedRoute";
import FormInscription from "./components/Login/FormInscription";
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
        <Route path="/inscription" element={<FormInscription />} />
      </Routes>
    </div>
  );
}

export default Transition;
