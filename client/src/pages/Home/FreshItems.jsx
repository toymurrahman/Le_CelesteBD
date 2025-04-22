import React from 'react';
import img1 from '../../assets/freshitem/home1-main-icon1.png';
import img2 from '../../assets/freshitem/home1-main-icon2.png';
import img3 from '../../assets/freshitem/home1-main-icon3.png';
import img4 from '../../assets/freshitem/home1-main-icon4.png';


const features = [
    {
      img:img1 ,
      title: 'Fresh Ingredients',
      desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque',
    },
    {
      img: img2,
      title: 'Healthy Meals',
      desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque',
    },
    {
      img: img3,
      title: 'Mediterranean Taste',
      desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque',
    },
    {
      img: img4,
      title: 'Eating Well',
      desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque',
    },
  ];

const FreshItems = () => {
    return (
        <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        {features.map((item, index) => (
          <div key={index} className="text-center px-4">
            <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center">
              <img src={item.img} alt={item.title} className="h-16 object-contain" />
            </div>
            <h3 className="uppercase text-sm tracking-widest font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-500 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
    );
};

export default FreshItems;