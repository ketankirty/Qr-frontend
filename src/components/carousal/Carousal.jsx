import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'https://c4.wallpaperflare.com/wallpaper/875/1016/956/food-pizza-wallpaper-preview.jpg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    title: ' Spicy veg-Pizza',
    description: '🌶️ A spicy veg pizza is a fiery flavor explosion loaded with vibrant veggies and a kick that lingers deliciously.'
  },
  {
    id: 2,
    image: 'https://i.pinimg.com/736x/95/40/de/9540de4dfa626f2165eed39474763fa4.jpg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    title: 'Blueberry Donuts',
    description: '🫐 Blueberry donuts are sweet, pillowy treats bursting with juicy berries and a glaze that glistens like morning dew.'
  },
  {
    id: 3,
    image: 'https://www.kannammacooks.com/wp-content/uploads/white-sauce-pasta-with-cheese.jpg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    title: 'White sauce pasta with cheese',
    description: '🧄 White sauce pasta with cheese is a dreamy fusion of creamy garlic béchamel and gooey richness that hugs every twirl of pasta.'
  },
  {
    id: 4,
    image: 'https://mealawe.com/wp-content/uploads/2025/01/Indian-Thali.jpg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    title: 'Desi Thali',
    description: '🍛 Desi thali food is a vibrant symphony of flavors served on a single platter, celebrating India’s rich culinary heritage with every bite.'
  },
  {
    id: 5,
    image: 'https://srmsweets.com/online/wp-content/uploads/2022/07/38985.jpg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    title: 'Sweets',
    description: '🍬 Indian sweets are a dazzling celebration of tradition, bursting with rich flavors like cardamom, saffron, and ghee in every melt-in-your-mouth bite'
  }
];

function Carousal() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div className=" bg-gray-50 flex flex-col">

      {/* Carousel Container */}
      <div className="flex justify-center px-4  md:py-4 lg:py-2">
        <div className="w-full max-w-6xl mx-auto">
          <div
            className="relative h-[66vh] max-h-[600px] min-h-[400px] overflow-hidden rounded-2xl shadow-2xl"
            style={{ perspective: "1200px" }}
          >
            {/* Slides Container */}
            <div
              className="flex h-full transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transformStyle: "preserve-3d",
              }}
            >
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className="min-w-full h-full relative"
                  style={{
                    transform:
                      index === currentIndex
                        ? "translateZ(0px) scale(1)"
                        : "translateZ(-100px) scale(0.95)",
                    transition: "transform 0.7s ease-out",
                  }}
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 flex items-end p-8 md:p-12">
                    <div className="max-w-3xl">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 md:p-8 border border-white/20">
                        <span className="text-2xl md:text-3xl font-semibold text-white mb-4 leading-tight">
                          {slide.title}
                        </span>
                        <p className="text-[15px] md:text-xl text-gray-100 leading-relaxed">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Slide Counter */}
                  <div className="absolute top-6 right-6 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                    <span className="text-white font-medium text-sm">
                      {index + 1} / {slides.length}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 z-10"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Bottom Controls */}
          <div className="flex items-center justify-center mt-4 md:mt-3 lg:mt-2 gap-6">
            {/* Dot Indicators */}
            <div className="flex gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                      ? "bg-blue-600 scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Carousal;