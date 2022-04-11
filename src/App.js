import React from 'react';
import './App.css';
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
import DataProviderContent from './components/dashboard/data-provider-content';
import DataConsumerContent from './components/dashboard/data-consumer-content';
import LandingPage from './landing-page/landing-page';
import AuthedRoute from './components/authed-route';


function App() {
  return (
    <Router basename="#">
      <Routes>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/" element={<LandingPage />} />
          {/* Authed routes */}
          <Route element={<AuthedRoute />}>
            <Route path="/dashboard" element={<Dashboard component={<DashboardContent />}/>}/>
            <Route path="/databoard" element={<Dashboard component={<DataboardContent />}/>}/>
            <Route path="/register-data" element={<Dashboard component={<RegisterData />}/>}/>
            <Route path="/data-provider-content" element={<Dashboard component={<DataProviderContent />}/>}/>
          <Route path="/data-consumer-content" element={<Dashboard component={<DataConsumerContent />}/>}/>
          </Route>
      </Routes>
    </Router>
  );
}

export default App;
