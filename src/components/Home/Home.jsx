import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirts=useLoaderData();
    return (
        <div>
            <p>home. total tshirts: {tshirts.length}</p>
        </div>
    );
};

export default Home;