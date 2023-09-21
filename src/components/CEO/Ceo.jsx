import React, { useContext } from 'react';
import Intern from '../Intern/Intern';
import { MoneyContext } from '../Boss/Boss';

const Ceo = () => {
    const [money,setMoney]=useContext(MoneyContext);
    return (
        <div>
            <p>CEO money: {money}</p>
            <button onClick={()=>setMoney(money+1000)}>Send 1000</button>
            <Intern></Intern>
        </div>
    );
};

export default Ceo;