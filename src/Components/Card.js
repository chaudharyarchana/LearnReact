import React from 'react';
import IMAGES from '../images';
import { useNavigate } from 'react-router-dom';

const Card = ({ id, title, imageUrl }) => {
  const navigate = useNavigate();

  return (
    <div className='px-3 my-8'>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl ">

        <div className="h-44 w-44">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={IMAGES[imageUrl]} alt="" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>

        <div className="absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">

          <h1 className="font-dmserif text-3xl font-bold text-white">{title}</h1>

          <button className="rounded-full bg-neutral-900 py-3 px-3.5 font-com text-sm capitalize text-white shadow" onClick={() => navigate(id)}>Watch</button>

        </div>
      </div>
    </div>
  );
};

export default Card;
