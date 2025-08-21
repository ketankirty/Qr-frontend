import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, Star, Clock, Award, MoveRight } from 'lucide-react';
import Dish from "./dishes/Dishes"
import { NavLink } from 'react-router-dom';
import burger from '../assets/burger.png'
import cocktail from '../assets/cocktail.png'
import Carousal from '../components/carousal/Carousal.jsx';


const Home = () => {
  return (
    <section className="maindiv">
      <div className="text-center mt-2 p-1.5">
        <span className="text-6xl font-bold text-gray-900 mb-4">
          Welcome to <span className="text-red-600">Fodii Restro</span>
        </span>
        <div className="text-2xl text-gray-600  mb-8 ">
          Authentic Flavors, Memorable Moments
        </div>
      </div>

      

      <Carousal />
      {/* Rating */}
      <div className="dash flex flex-col lg:flex-row items-center justify-center text-center gap-10 px-6 py-12 bg-gradient-to-r from-red-500 to-orange-500 mt-3 w-full h-screen lg:h-auto">
        <div className="star flex flex-col items-center m-2 p-6 text-lg opacity-80">
          <span className="text-white">
            <Star size={50} />
          </span>
          <h2 className="font-bold text-white">4.8/5</h2>
          <p className="font-sans text-2xl text-white">Customer Rating</p>
        </div>
        <div className="clock flex flex-col items-center m-2 p-6 text-lg opacity-80">
          <span className="text-white">
            <Clock size={50} />
          </span>
          <h2 className="font-bold text-white">15-30 min</h2>
          <p className="font-sans text-2xl text-white">Average Delivery Time On Your table</p>
        </div>
        <div className="award flex flex-col items-center m-2 p-6 text-lg opacity-80">
          <span className="text-white">
            <Award size={50} />
          </span>
          <h2 className="font-bold text-white">100+</h2>
          <p className="font-sans text-2xl text-white">Menu items</p>
        </div>
      </div>



      <div className="dishes">

        <div className="info text-center m-5 p-2 ">
          <span className='text-3xl font-bold ' >Feature <span className='text-3xl font-bold text-red-600'>Dishes</span></span>
          <p className='text-xl font-sans mt-3 opacity-80 text-black'> Discover our most popular and delicious dishes, carefully prepared with fresh ingredients and authentic flavors</p>
        </div>

        {/*Foodcard  */}
        
          <>
            <Dish />
          </>
        
        <nav className='flex justify-center  mx-auto from-red-500 to-orange-400 m-4 py-2  '>
          <NavLink to='/menu' className="bg-gradient-to-r from-red-600 to-orange-500 px-5 py-2 text-white rounded-4xl text-2xl transition-transform duration-300 hover:scale-105 font-semibold flex  gap-2 items-center" style={{ textDecoration: 'none' }}>View Complete Menu<MoveRight /></NavLink>
        </nav>
      </div>

      {/* Our story */}
      <div className='story bg-gray-900 text-white grid md:grid-cols-3 gap-3 lg:grid-rows-1 p-4'>
        <div className="box1 flex flex-col gap-3 p-4">
          <h1 className="text-3xl font-semibold">
            Our <span className='text-red-500'>Story</span>
          </h1>
          <p className='text-lg'>
            Experience the finest culinary journey with our carefully crafted dishes made from fresh, locally sourced ingredients. We bring you authentic flavors that celebrate the rich heritage of traditional cooking.
          </p>
          <NavLink
            to='/aboutshop'
            className='flex items-center gap-2 text-white bg-gradient-to-r from-red-600 to-orange-500 p-2 rounded-xl w-fit text-lg transition-transform duration-300 hover:scale-105 ' style={{ textDecoration: 'none' }}
          >
            Learn More About Us <MoveRight />
          </NavLink>
        </div>

        <div className="flex ">
          <img
            src={cocktail}
            alt="cocktail"
            className='m-4 px-2 transition-transform duration-300 hover:scale-105 rounded-xl sm:w-5/6 '
          />
        </div>

        <div className="flex  ">
          <img
            src={burger}
            alt="burger"
            className='my-4 px-2 transition-transform duration-300 hover:scale-105 rounded-xl w-3/4 lg:h-3/4 sm:ml-7  '
          />
        </div>
      </div>

      {/* Ready to order */}
      <div className='bg-gradient-to-r from-orange-400 to-red-500 flex justify-center items-center flex-col p-5 '>
        <h1 className='text-white m-3'>Ready to Order?</h1>
        <p className='text-white text-xl'>
          Scan our QR code or browse our complete menu to place your order
        </p>
        
        <div className='Nav m-3 p-3  transition-transform duration-300 hover:scale-105   flex items-center gap-4 justify-center  flex-wrap'>
          
          <NavLink
            to='/menu'
            style={{ textDecoration: 'none', color: 'rgb(229, 57, 53)' }}
            className='text-red-600 mx-auto bg-white p-4 py-3 m-3 rounded-3xl font-semibold '
          >
            Browse Menu
          </NavLink>

          <NavLink
            to='/contact'
            style={{ textDecoration: 'none' }}
            className='p-4 py-3  border-2 text-white border-white rounded-3xl font-semibold hover:bg-blue-500'
          >
            Contact Us
          </NavLink>

        </div>
      </div>






    </section>

  );
};

export default Home;
