import React from 'react';
import './App.css';
import { useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import SignIn from './components/login';
import SignUp from './components/signup';
import Dashboard from './components/dashboard/dashboard'
import DashboardContent from './components/dashboard/dashboard-content';
import DataboardContent from './components/dashboard/databoard-content';
import RegisterData from './components/dashboard/register-data';


function App() {
  const user = useSelector((state) => state.user)
  return (
    <Router>
      <Routes>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/databoard" element={<Dashboard component={<DataboardContent />}/>}/>
          <Route path="/register-data" element={<Dashboard component={<RegisterData />}/>}/>
          <Route path="/" element={<Dashboard component={<DashboardContent />}/>}/>
          {/* this is the correct route */}
          {/* <AuthedRoute authed={user.authenticated}  path="/upload" Component={FileUpload}/>
          <AuthedRoute authed={user.authenticated}  path="/" Component={LandingPage}/> */}
      </Routes>
    </Router>
  );
}

export default App;
