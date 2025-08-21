import React, { useEffect, useState } from 'react'
import { Leaf } from 'lucide-react'
import localData from './dishes.json';

const Dishes = () => {

  const [dish, setDish] = useState([])

  useEffect(() => {
    setDish(localData.dish)
  }, [])


  return (

    <>
      {/* Show loading message if data is not yet loaded */}
      {!dish && <div> Loading...</div>}

      {/* Display list of dishes */}
      <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-4 gap-6 p-4   ">
        {dish.map((dis) => (
          <div
            key={dis.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className='transition-transform duration-300 hover:scale-105'>
              <img
              className="h-48 w-full object-cover"
              src={dis.image}
              alt={dis.name}
            />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900">{dis.name}</h2>
                <p className="mt-1 text-sm text-gray-600">{dis.description}</p>

                <div className="mt-2 flex items-center justify-between">
                  <span className="text-lg font-bold text-green-600">${dis.price}</span>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${dis.isVeg
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                      }`}
                  >
                    {dis.isVeg ? "Veg" : "Non-Veg"}
                  </span>
                </div>

                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm text-gray-500">{dis.category}</span>
                  <span className="text-sm text-yellow-500">⭐ {dis.rating}</span>
                </div>

                <button
                  disabled={!dis.isAvailable}
                  className={`mt-4 w-full px-4 py-2 rounded text-white transition-colors duration-200 ${dis.isAvailable
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-400 cursor-not-allowed"
                    }`}
                >
                  {dis.isAvailable ? "Order Now" : "Unavailable"}
                </button>
              </div></div>


          </div>
        ))}
      </div>
    </>
  )
}

export default Dishes