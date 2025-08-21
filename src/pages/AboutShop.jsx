import React from 'react'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/DP.jpeg'
import dp from '../assets/dp.jpg'

import { Award, Users, Clock, Heart, Utensils, Star } from 'lucide-react'
const AboutShop = () => {
  return (
    <section>

      <div className='bg-gradient-to-r from-red-500 to-orange-500 flex justify-center items-center flex-col p-5 gap-4  mx-auto  select-none '>
        <span className='text-white text-5xl font-bold'>About <span className='text-amber-400 capitalize '>spice garden</span></span>
        <p className='capitalize text-xl text-white '>authentic flavors, memorable moments</p>
      </div>

      {/* Our journey */}
      <div className="p-4 mx-auto flex flex-col lg:flex-row lg:items-start gap-8">
        {/* Text section */}
        <div className="div1 p-2 lg:w-1/2 flex justify-center items-center flex-col">
          <span className="capitalize text-3xl font-bold">
            Our <span className="text-red-600">journey</span>
          </span>
          <p className="text-[17px] py-4 pb-0">
            Experience the finest culinary journey with our carefully crafted dishes made from fresh, locally sourced ingredients. We bring you authentic flavors that celebrate the rich heritage of traditional cooking.
          </p>
          <p className="text-[17px]">
            Founded with a passion for authentic flavors and exceptional service, we have been serving our community for over 5 years. Our journey began with a simple vision: to create a place where families and friends can come together to enjoy delicious food in a warm, welcoming atmosphere.
          </p>
          <p className="text-[17px]">
            Every dish on our menu tells a story of tradition, innovation, and love. We source our ingredients locally whenever possible, supporting our community while ensuring the freshest flavors reach your plate.
          </p>
          <img src={img6} alt="" className=' w-40 rounded-full  ' />
          <p className='text-[17px]   py-4 pb-0'>Founded in 2012 by childhood friends Aarav Mehta and Priya Kapoor, Fodii Restro began as a small roadside café in Jaipur, India, with just four tables and a borrowed stove. The duo shared a dream: to bring global flavors to their hometown without losing the warmth of Indian hospitality.</p>
          <p className='text-[17px]'>Word spread quickly. By 2015, Fodii Restro had moved to a larger space, adding an open kitchen and live music nights. In 2018, the restaurant earned a local “Best Fusion Dining” award, and in 2020, despite the pandemic, they launched an online delivery service that brought their signature flavors to homes across the city.</p>
          <p className='text-[17px]'>Today, Fodii Restro is more than just a restaurant—it’s a gathering place where every plate tells a story. Guests come for the bold flavors, stay for the cozy ambience, and leave as part of the Fodii family. Aarav and Priya still greet regulars by name, and every menu update is a love letter to the city that believed in their dream.</p>
        </div>

        {/* Image gallery */}
        <div className="div2 grid grid-cols-2 md:grid-cols-2 gap-4 lg:w-1/2">
          <div className="grid gap-4">
            <img className="h-auto w-full rounded-lg transition-transform duration-200 hover:scale-105" src={img1} alt="" />
            <img className="h-auto w-full rounded-lg transition-transform duration-200 hover:scale-105" src={img2} alt="" />
          </div>
          <div className="grid gap-4">
            <img className="h-auto w-full rounded-lg transition-transform duration-200 hover:scale-105" src={img4} alt="" />
            <img className="h-auto w-full rounded-lg transition-transform duration-200 hover:scale-105" src={img5} alt="" />
          </div>
        </div>
      </div>


      {/* Our Achievments */}

      <div className='pb-5  shadow border-t '>
        <div className='flex justify-center items-center flex-col p-5'>
          <span className='text-3xl capitalize font-bold'>our <span className='text-red-600'>Achievement</span></span>
          <p className='text-[17px]'>Recognition and milestones that reflect our commitment to excellence</p>
        </div>

        <div className=' grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4 px-5  '>
          <div className='flex justify-center items-center flex-col bg-blue-50 rounded-full p-5 transition-transform duration-200 hover:scale-105 hover:bg-pink-100  ease-in'>
            <span className='bg-gradient-to-r from-red-500 to-orange-500 rounded-full p-2 text-white'><Award size={50} /></span>
            <span className='capitalize'>excellence award</span>
            <p className='text-[17px]'>Best Restaurant 2023</p>
          </div>

          <div className='flex justify-center items-center flex-col bg-blue-50 rounded-full p-5 transition-transform duration-200 hover:scale-105 hover:bg-pink-100 ease-in '>
            <span className='bg-gradient-to-r from-red-500 to-orange-500 rounded-full p-2 text-white'><Users size={50} /></span>
            <span>10,000+</span>
            <p className='text-[17px]'>happy customers</p>
          </div>

          <div className='flex justify-center items-center flex-col bg-blue-50 rounded-full p-5 transition-transform duration-200 hover:scale-105 hover:bg-pink-100 ease-in'>
            <span className='bg-gradient-to-r from-red-500 to-orange-500 rounded-full p-2 text-white'><Clock size={50} /></span>
            <span>5+ years</span>
            <p className='text-[17px]'>Serving Community</p>
          </div>

          <div className='flex justify-center items-center flex-col bg-blue-50 rounded-full p-5 transition-transform duration-200 hover:scale-105 hover:bg-pink-100 ease-in'>
            <span className='bg-gradient-to-r from-red-500 to-orange-500 rounded-full p-2 text-white'><Heart size={50} /></span>
            <span>100%</span>
            <p className='text-[17px]'> Fresh Ingredients</p>
          </div>
        </div>
      </div>


      {/* our values */}
      <div className='bg-gray-900 text-white flex justify-center items-center flex-col py-5  '>
        <div className='p-2'>
          <span className='text-white font-bold text-5xl'>Our <span className='text-orange-400'>Values</span></span>
          <p className='text-[17px]'>The principles that guide everything we do</p>
        </div>

        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5 p-4'>
          <div className='flex gap-4  bg-gray-800 transition-transform duration-200 hover:bg-gray-700 hover:scale-105 rounded-2xl p-3'  >
            <span className='bg-orange-400 p-1 rounded-xl'><Star size={50} /> </span>
            <div>
              <span className='text-3xl font-bold'>Quality First</span>
              <p>We never compromise on the quality of our ingredients and cooking standards</p>
            </div>
          </div>

          <div className='flex gap-4  bg-gray-800 transition-transform duration-200 hover:bg-gray-700 hover:scale-105 rounded-2xl p-3'>
            <span className='bg-orange-400 p-1 rounded-xl'><Utensils size={50} /></span>
            <div>
              <span className='text-3xl font-bold'>Authentic Flavors</span>
              <p>Traditional recipes passed down through generations with a modern twist.</p>
            </div>
          </div>

          <div className='flex gap-4  bg-gray-800 transition-transform duration-200 hover:bg-gray-700 hover:scale-105 rounded-2xl p-3'>
            <span className='bg-orange-400 p-1 rounded-xl'><Heart size={50} /></span>
            <div>
              <span className='text-3xl font-bold'>
                Customer Love
              </span>
              <p>Every dish is prepared with love and care for our valued customers.</p>
            </div>
          </div>

          <div className='flex gap-4  bg-gray-800 transition-transform duration-200 hover:bg-gray-700 hover:scale-105 rounded-2xl p-3'>
            <span className='bg-orange-400 p-1 rounded-xl'><Users size={50} /></span>
            <div>
              <span className='text-3xl font-bold'>Commubity Focus</span>
              <p>Proud to be part of the local community and serve our neighbors.</p>
            </div>
          </div>
        </div>
      </div>


      {/* Team */}
      <div className='pb-5  shadow  '>
        <div className='flex justify-center items-center flex-col p-5'>
          <span className='text-3xl capitalize font-bold'>Meet Our <span className='text-red-600'>Team</span></span>
          <p className='text-[17px]'>The passionate people behind your favorite dishes</p>
        </div>

        <div className=' grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-4 px-5  '>
          <div className='flex justify-center items-center flex-col bg-blue-50 rounded-full p-5 transition-transform duration-200 hover:scale-105 hover:bg-pink-100  ease-in gap-2'>
            <img src={dp} alt="" className='h-40 w-40 rounded-full shadow-2xl' />
            <span className='font-bold text-2xl'>Chef Rajesh Kumar</span>
            <span className='font-semibold text-red-500 text-xl'>Head chef</span>
            <p className='p-4'>15+ years of culinary expertise specializing in authentic Indian cuisine</p>
          </div>

          <div className='flex justify-center items-center flex-col bg-blue-50 rounded-full p-5 transition-transform duration-200 hover:scale-105 hover:bg-pink-100  ease-in gap-2'>
            <img src={dp} alt="" className='h-40 w-40 rounded-full shadow-2xl' />
            <span className='font-bold text-2xl'>Ketan Kirty</span>
            <span className='font-semibold text-red-500 text-xl'>Resturent Manager</span>
            <p className='p-4'>Ensuring exceptional service and memorable dining experiences</p>
          </div>

          <div className='flex justify-center items-center flex-col bg-blue-50 rounded-full p-5 transition-transform duration-200 hover:scale-105 hover:bg-pink-100  ease-in gap-2'>
            <img src={dp} alt="" className='h-40 w-40 rounded-full shadow-2xl' />
            <span className='font-bold text-2xl'>Shruti Shrestha</span>
            <span className='font-semibold text-red-500 text-xl'>Sous Chef</span>
            <p className='p-4'>Master of spices and traditional cooking techniques</p>
          </div>

          
        </div>
      </div>

    </section>
  )
}

export default AboutShop