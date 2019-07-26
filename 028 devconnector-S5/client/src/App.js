import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/layout/Navbar';
import Registration from './component/layout/Registration';
import Login from './component/layout/Login';
import Landing from './component/layout/Landing';
import Footer from "./component/layout/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Route exact path="/" component={Landing} />
      <div>
        <Route exact path="/register" component={Registration} />
        <Route exact path="/login" component={Login} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
