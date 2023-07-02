import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Login/Login";
import Login from "./components/Login/Login";
import "./App.css";
import Register from "./components/Register/Register";
import Coustomer from "./components/Coustomer/Coustomer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/coustomer" element={<Coustomer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
