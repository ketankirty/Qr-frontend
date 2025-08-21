import React from 'react'
import { Facebook, Instagram, Twitter, Linkedin, Store, Mail, Phone } from 'lucide-react';
// import './Footer.css'
import { NavLink } from 'react-router-dom';
import "tailwindcss";
const Footer = () => {


  return (
    <section className="w-full">
      {/* First Section */}
      <div className="flex items-center bg-[#0d0d38]  px-4 flex-wrap justify-center gap-4 p-4 ">
        <span className="text-2xl md:text-xl mx-auto font-semibold text-white">
          Get connected with us on social networks:
        </span>
        <section className="flex flex-row gap-2 ">
          <Facebook size={32} color="#2f6fee" strokeWidth={0.5} aria-label="Facebook"  className='transition-transform duration-300 hover:scale-105'/>
          <Instagram size={32} color="#ee2f95" strokeWidth={0.5} aria-label="Instagram" />
          <Twitter size={32} color="#2fc8ee" strokeWidth={0.5} aria-label="Twitter" />
          <Linkedin size={32} color="#2f4fee" strokeWidth={0.5} aria-label="LinkedIn" />
        </section>
      </div>

      {/* Second Section - GRID */}
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full bg-[#0d0d38] py-5 px-5">
        {/* About */}
        <div className="max-w-xs">
          <h5 className="text-orange-500 border-b-2 border-[rgb(43,137,195)] mb-2">
          <span className='text-orange-500'> About Spice Garden</span>
          </h5>
          <p className="text-white">
            Experience the finest culinary journey with our carefully crafted dishes made from fresh,
            locally sourced ingredients. We bring you authentic flavors that celebrate the rich heritage
            of traditional cooking.
          </p>
        </div>

        {/* Product Category */}
        <div>
          <h4 className="text-orange-500 border-b-2 border-[rgb(43,137,195)] mb-2">
          <span className='text-orange-500  capitalize'>product category</span>
          </h4>
          <ul className="space-y-1 list-none">
            {['Sweets', 'Lassi', 'South Indian Food', 'Thali', 'Snacks'].map((item) => (
              <li key={item}>
                <NavLink to="/menu" className="text-white hover:font-semibold " style={{textDecoration:'none'}}>
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-orange-500 border-b-2 border-[rgb(43,137,195)] mb-2">
          <span className='text-orange-500 capitalize'>useful links</span>
          </h4>
          <ul className="space-y-1 list-none">
            {['Menu', 'Shop Location', 'Offers', 'Services'].map((item) => (
              <li key={item}>
                <NavLink to="/" className="text-white hover:font-semibold" style={{textDecoration:'none'}}>
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-orange-500 border-b-2 border-[rgb(43,137,195)] mb-2">
          <span className='text-orange-500 capitalize'>contact</span>
          </h4>
          <ul className="space-y-2 list-none text-white">
            <li className="flex items-center gap-2">
              <Store color="#397fdb" /> Alpha 1, C-Market, Greater Noida, 201308
            </li>
            <li className="flex items-center gap-2">
              <Mail color="#397fdb" /> XYZ123@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Linkedin color="#397fdb" /> @Shopname
            </li>
            <li className="flex items-center gap-2">
              <Phone color="#397fdb" /> +91-88******96
            </li>
          </ul>
        </div>
      </div>

      {/* Third Section */}
      <div className="bg-[#0d0d28] text-white text-center py-2">
        <p>&copy; 2025 all rights reserved || Foodii</p>
      </div>
    </section>
  )
}

export default Footer