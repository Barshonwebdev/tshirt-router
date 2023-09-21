import React, { createContext, useState } from 'react';
import './Boss.css'
import Manager from '../Manager/Manager';
import Ceo from '../CEO/Ceo';
import Cto from '../CTO/Cto';

export const Powercontext = createContext("");
export const MoneyContext= createContext(0);
const Boss = () => {
    
    const power='power';
    const [money,setMoney]= useState(0);
    return (
      <div className="container">
        <div className="boss">
          <p>Boss</p>
          <p>{power}</p>
          <p>Has money: {money}</p>
        </div>
        <MoneyContext.Provider value={[money,setMoney]}>
          <Powercontext.Provider value="Absolute Power">
            <div className="employee">
              <Manager power={power}></Manager>
              <Ceo></Ceo>
              <Cto></Cto>
            </div>
          </Powercontext.Provider>
        </MoneyContext.Provider>
      </div>
    );
};

export default Boss;