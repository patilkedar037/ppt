import { useState, useEffect, useCallback } from 'react';
import { Slide1 } from './components/Slide1';
import { Slide2 } from './components/Slide2';
import { Slide3 } from './components/Slide3';
import { Slide4 } from './components/Slide4';
import { Slide5 } from './components/Slide5';
import { Slide6 } from './components/Slide6';
import { Slide7 } from './components/Slide7';
import { Slide8 } from './components/Slide8';
import { Slide9 } from './components/Slide9';
import { Slide10 } from './components/Slide10';

const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide10, Slide9];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const goToPrevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        goToNextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextSlide, goToPrevSlide]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col">
      {/* Main Slide Area */}
      <div className="flex-1 relative bg-white shadow-2xl">
        <CurrentSlideComponent />
      </div>

      {/* Bottom Control Bar */}
      <div className="bg-gray-900 px-8 py-4 flex items-center justify-between">
        {/* Slide Indicators */}
        <div className="flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide 
                  ? 'w-12 bg-red-600' 
                  : 'w-8 bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="text-white font-semibold text-lg">
          <span className="text-red-500">{currentSlide + 1}</span>
          <span className="text-gray-400"> / </span>
          <span>{totalSlides}</span>
        </div>

        {/* UpGrad Branding */}
        <div className="text-red-500 font-bold text-2xl tracking-wider">
          upGrad
        </div>
      </div>
    </div>
  );
}
