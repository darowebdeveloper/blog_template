import React from 'react';

const Destination = ({ d, images, i }) => {
  return (
    <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
      <img
        className="h-32 w-32 flex-shrink-0"
        src={images[i]}
        alt="{d.imageAlt}"
      />
      <div className="px-6 py-4">
        <h3 className="text-lg font-semibold text-gray-800">{d.city}</h3>
        <p className="text-gray-600">${d.averagePrice} / night average</p>
        <div className="mt-4">
          <a
            className="text-brand hover:text-brand-dark font-semibold text-sm"
            href="#"
          >
            Explore {d.propertyCount} properties
          </a>
        </div>
      </div>
    </div>
  );
};

export default Destination;
