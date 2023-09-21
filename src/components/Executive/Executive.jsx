import React, { useContext } from 'react';
import { Powercontext } from '../Boss/Boss';

const Executive = () => {
    const getpower=useContext(Powercontext);
    return (
        <div>
            <p>Executive {getpower}</p>
        </div>
    );
};

export default Executive;