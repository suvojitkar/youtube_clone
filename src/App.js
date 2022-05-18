import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home/home';
import Login from './components/Login/login';
import ProtectedRoutes from './components/ProtectedRoute/protectedroute';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<ProtectedRoutes><Home /></ProtectedRoutes>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
