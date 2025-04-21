import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer';

const Main = () => {
    return (
        <div className='max-w-7xl mx-auto'> 
            {/* navbar */}


            {/* main content */}
            <Outlet />

            {/* footer */}
            <Footer />

        </div>
    );
};

export default Main;