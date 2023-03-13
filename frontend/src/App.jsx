/* eslint-disable import/no-unresolved */
import { BrowserRouter as Router } from "react-router-dom";
import Transition from "./Transition";
import AuthProvider from "./hooks/authContext";

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
