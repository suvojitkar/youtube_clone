import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/home';
import Login from './components/Login/login';
import ProtectedRoutes from './components/ProtectedRoute/protectedroute';
import Navbar from './components/Navbar/navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<ProtectedRoutes><Home /></ProtectedRoutes>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
