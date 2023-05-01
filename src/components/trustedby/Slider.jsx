import { useState } from "react";
import React  from 'react'
import { useEffect } from "react";


export const Slider = ({ slides, intervalTime }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide) => (currentSlide + 1) % slides.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [slides.length, intervalTime]);
    
    
  return (
    <div className="slider">
    {slides.map((slide, index) => (
      <div
        key={index}
        className={`slide ${index === currentSlide ? "active" : ""}`}
      >
        {slide}
      </div>
    ))}
  </div>
  )
}
