import React, { useEffect } from 'react'
import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomePage from './Component/HomePage/HomePage'
import Navbar from './Component/Navbar/Navbar'
import Login from './Component/Login/Login'
import LoginScreen from './Component/Login/LoginScreen'
import StudentScreen from './Component/Student/StudentScreen';
import AdvisorScreen from './Component/Advisor/AdvisorScreen';
import CouncilScreen from './Component/Council/CouncilScreen';
import SecretaryScreen from './Component/Secretary/SecretaryScreen';

function App() {
  const navigate = useNavigate();
  const role = useSelector(state => state.userReducer.role)
  const isLoggedIn = useSelector(state => state.userReducer.loggedIn);
  useEffect(() => {
    if (isLoggedIn === false || isLoggedIn === null) {
      navigate("/homepage");
    }
  }, [isLoggedIn]);

  function getScreenComponentByRole(role) {
    switch (role) {
      case 'student':
        return <StudentScreen />;
      case 'advisor':
        return <AdvisorScreen />;
      case 'council':
        return <CouncilScreen />;
      case 'secretary':
        return <SecretaryScreen />
      default:
        return <StudentScreen />;
    }
  }
  return (
    <>
      <div>
        <Routes>
          <Route path="/homepage" element={<>
            <Navbar />
            <HomePage />
          </>} />

          <Route path="/login_delegation" element={<Login />} />
          <Route path="/login" element={<LoginScreen />} />

          {isLoggedIn ? (
            <Route path="*" element={<>
              <Navbar />
              {getScreenComponentByRole(role)}
            </>} />
          ) : null}
        </Routes>
      </div>
    </>
  )
}

export default App
