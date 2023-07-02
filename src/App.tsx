import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Login/Login";
import Login from "./components/Login/Login";
import "./App.css";
import Register from "./components/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/vendors" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
