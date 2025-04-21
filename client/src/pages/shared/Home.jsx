import React from 'react';
import Carousel from '../../components/Carousel';
import Story from '../../components/Story';

const Home = () => {
    return (
        <div>
            <Carousel />

           <div className='text-center m-10  '>
            <Story />
           </div>
        </div>
    );
}

export default Home;