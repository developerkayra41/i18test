import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import { useEffect } from 'react';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
