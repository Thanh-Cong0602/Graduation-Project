import { useState } from 'react'
import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomePage from './Component/HomePage/HomePage'
import Navbar from './Component/Navbar/Navbar'
import Login from './Component/Login/Login'
import LoginScreen from './Component/Login/LoginScreen'
import StudentScreen from './Component/Student/StudentScreen';
import AdvisorScreen from './Component/Advisor/AdvisorScreen';
function App() {
  const navigate = useNavigate();
  const role = useSelector(state => state.userReducer.role)
  const isLoggedIn = useSelector(state => state.userReducer.loggedIn);

  return (
    <>
      <div>
        <Routes>
          <Route path="/homepage" exact element={<>
            <Navbar />
            <HomePage />
          </>} />
        </Routes>
        <Routes>
          <Route path="/login_delegation" exact element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/login" exact element={<LoginScreen />} />
        </Routes>
        {role === 'student' ? (
          <Routes>
            <Route path="/stu" exact element={<StudentScreen />} />
          </Routes>
        ) : null}
        {isLoggedIn === true ? (
          <>
            <Navbar />
            {(() => {
              switch (role) {
                case 'student':
                  return <StudentScreen />;
                case 'advisor':
                  return <AdvisorScreen />;
                case 'admin':
                  return <AdminComponent />;
                default:
                  return <DefaultComponent />;
              }
            })()}
          </>
        ) : null}
      </div>
    </>
  )
}

export default App
