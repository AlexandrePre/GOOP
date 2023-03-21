import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import ProtectedRoute from "./hooks/ProtectedRoute";
import FormInscription from "./components/Login/FormInscription";
import Error from "./pages/Error";
import Home from "./components/Home";
import Technicien from "./pages/technicien";
import Admin from "./pages/admin";

function Transition() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/technicien"
          element={
            <ProtectedRoute>
              <Technicien />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Error />} />
        <Route path="/inscription" element={<FormInscription />} />
      </Routes>
    </div>
  );
}

export default Transition;
