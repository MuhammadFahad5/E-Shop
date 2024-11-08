
import './global.css';
import { Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import ProtectedRoute1 from './helpers/ProtectedRoute1';
import ProtectedRoute2 from './helpers/ProtectedRoute2';
import Cart from './pages/Cart';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProtectedRoute1 />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/cart" element={<ProtectedRoute1 />}>
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="/login" element={<ProtectedRoute2 />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/register" element={<ProtectedRoute2 />}>
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
