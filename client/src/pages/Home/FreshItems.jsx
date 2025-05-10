import React from 'react';
import img1 from '../../assets/freshitem/home1-main-icon1.png';
import img2 from '../../assets/freshitem/home1-main-icon2.png';
import img3 from '../../assets/freshitem/home1-main-icon3.png';
import img4 from '../../assets/freshitem/home1-main-icon4.png';

const features = [
  {
    img: img1,
    title: 'Fresh Vagies',
    desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.',
  },
  {
    img: img2,
    title: 'Healthy Meals',
    desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.',
  },
  {
    img: img3,
    title: 'Tasty Crops',
    desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.',
  },
  {
    img: img4,
    title: 'Harvest Fruits',
    desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.',
  },
];

const FreshItems = () => {
  return (
    <div className="bg-emerald-50 dark:bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
        {features.map((item, index) => (
          <div
            key={index}
            className="text-center px-4 transition-transform transform hover:-translate-y-1 duration-300"
          >
            <div className="mx-auto mb-5 w-20 h-20 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center">
              <img
                src={item.img}
                alt={item.title}
                className="h-12 object-contain"
              />
            </div>
            <h3 className="uppercase text-sm tracking-wide font-bold text-emerald-900 dark:text-emerald-400 mb-2">
              {item.title}
            </h3>
            <p className="text-emerald-800 dark:text-gray-300 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreshItems;
