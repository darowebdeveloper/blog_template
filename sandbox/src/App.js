import React from 'react';

import ImageHero from '../images/beach-work.jpg';
import Logo from '../images/logo-brand.svg';
import Image1 from '../images/post-img-1.jpg';
import Image2 from '../images/post-img-2.jpg';
import Image3 from '../images/post-img-3.jpg';
import Image4 from '../images/post-img-4.jpg';
import Image5 from '../images/post-img-5.jpg';
import Image6 from '../images/beach-work.jpg';

import destination from './destinations';
import Destination from './Destination';
const images = [Image1, Image2, Image3, Image4, Image5, Image6];

const App = (props) => {
  return (
    <>
      <div className="bg-gray-100 lg:grid lg:grid-cols-2 2xl:grid-cols-5">
        <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:px-12 lg:py-24 xl:mr-0 2xl:col-span-2">
          <div className="xl:max-w-xl">
            <img className="h-10" src={Logo} alt="Workcation" />
            <img
              className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"
              src={ImageHero}
              alt="Woman workcation on the beach"
            />
            <h1 className="mt-6 text-2xl font-headline tracking-tight font-semibold text-gray-900 sm:mt-8 sm:text-4xl lg:text-2x xl:text-4xl">
              You can work from anywhere.
              <br className="hidden lg:inline" />
              <span className="text-brand ">Take advantage of it</span>
            </h1>
            <p className="mt-2 text-gray-600 sm:text-xl sm:mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
              magnam minima aut a? Dolore ipsum eligendi ad. Praesentium nobis,
              at tenetur laboriosam necessitatibus dicta hic dolores odio neque,
              eos quidem.
            </p>
            <div className="mt-4 space-x-1 sm:mt-6">
              <a
                className="btn btn-primary shadow-lg hover:translate-y-0.5 transition transform"
                href="#"
              >
                Book your escape
              </a>
              <a className="btn btn-secondary" href="#">
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className="hidden relative lg:block 2xl:col-span-3">
          <img
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={ImageHero}
            alt="Woman workcation on the beach"
          />
        </div>
      </div>
      <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
        <h2 className="text-xl text-gray-900">Popular destinations</h2>
        <p className="mt-2 text-gray-600">
          A selection of great work-friendly cities with lots to see and
          explore!
        </p>
        <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {destination.map((d, i) => {
            return <Destination d={d} images={images} i={i} key={i} />;
          })}
        </div>
      </div>
    </>
  );
};

export default App;
