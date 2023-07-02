import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import "./App.css";
import Customer from "./components/Coustomer/Coustomer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/customer" element={<Customer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
