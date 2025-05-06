import React from 'react';

const SectionTitle = ({heading , subHeading}) => {
    return (
        <div  className='mx-auto text-center m-10 md:w-3/4 '>

             <p className="uppercase text-emerald-500  text-sm tracking-widest mb-2">
             ---{subHeading}---
          </p>
          <h2 className="uppercase  text-3xl lg:text-4xl font-bold mb-10 border-t border-b inline-block py-3 px-6">{heading} </h2>
          
        </div>
    );
};

export default SectionTitle;