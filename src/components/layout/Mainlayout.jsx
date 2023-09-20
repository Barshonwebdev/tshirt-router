import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import './Main.css'
import  { Toaster } from "react-hot-toast";
const Mainlayout = () => {
    return (
      <div className="main">
        <div>
          <Header></Header>
          <Outlet></Outlet>
          <Toaster></Toaster>
        </div>
      </div>
    );
};

export default Mainlayout;