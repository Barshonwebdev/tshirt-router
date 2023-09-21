import React from 'react';
import GeneralManager from '../GenMag/GeneralManager';

const Manager = ({power}) => {
    return (
        <div>
            <p>Manager {power}</p>
            <GeneralManager power={power}></GeneralManager>
        </div>
    );
};

export default Manager;