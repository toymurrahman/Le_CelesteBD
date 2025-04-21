import React from 'react';
import img1 from '../assets/image/story1.jpg';
import img2 from '../assets/image/story2.jpg';

const Story = () => {
    return (
        <div className='gap-6 flex flex-col items-center justify-center'>
            <h3 className='font-bold'>TASTY AND CRUNCHY</h3>
            <h1 className='text-4xl'>OUR STORY</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className='flex gap-6 justify-center items-center'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />

            </div>
        </div>
    );
};

export default Story;