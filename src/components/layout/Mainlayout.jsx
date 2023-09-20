import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import './Main.css'
const Mainlayout = () => {
    return (
      <div className="main">
        <div>
          <Header></Header>
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default Mainlayout;