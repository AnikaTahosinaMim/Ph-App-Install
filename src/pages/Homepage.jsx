import React from 'react';
import Banner from '../componet/home/Banner';
import Stats from '../componet/home/Stats';
import Trending from '../componet/home/Trending';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <Stats></Stats>
            <Trending></Trending>
        </div>
    );
};

export default Homepage;