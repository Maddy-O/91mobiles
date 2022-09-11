import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import ReqAuth from "./Components/ReqAuth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <ReqAuth>
              <Home />
            </ReqAuth>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
