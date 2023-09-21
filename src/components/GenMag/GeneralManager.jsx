import React, { useContext } from 'react';
import { MoneyContext } from '../Boss/Boss';

const GeneralManager = ({power}) => {
    const [money]=useContext(MoneyContext);
    return (
        <div>
            <p>General Manager{power}</p>
            <p>has money: {money}</p>
        </div>
    );
};

export default GeneralManager;