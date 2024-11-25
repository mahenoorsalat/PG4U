import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/HomePage';
import Login from './pages/login';
import Sign from './pages/SignUp';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<Sign />} />
      </Routes>
    </Router>
  );
}

export default App;