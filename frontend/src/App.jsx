/* eslint-disable import/no-unresolved */
import "./Tailwind.css";
import { BrowserRouter as Router } from "react-router-dom";
import Transition from "./Transition";
import AuthProvider from "./hooks/authContext";
// import { Routes, Route } from "react-router-dom";
// import BigContainer from "./components/BigContainer";
// import Login from "./components/Login/Login";
// import ContainerLogin from "./components/Login/ContainerLogin";
// import ForgetPassword from "./components/Login/ForgetPassword";
// import Registrer from "./components/Login/Registrer";
// import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="w-screen ">
      <div>
        <Router>
          <AuthProvider>
            <Transition />
          </AuthProvider>
        </Router>
      </div>
    </div>
  );
}

export default App;
