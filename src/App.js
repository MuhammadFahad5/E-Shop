
import './App.css';
import { Routes, Route, NavLink } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import ProtectedRoute from './utility/ProtectedRoute';
import ProtectedRoute1 from './utility/ProtectedRoute1';
import Cart from './pages/Cart';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/cart" element={<ProtectedRoute />}>
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="/login" element={<ProtectedRoute1 />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/register" element={<ProtectedRoute1 />}>
          <Route path="/register" element={<Register />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
