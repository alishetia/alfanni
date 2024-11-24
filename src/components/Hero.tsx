import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
      title: "خدمات صيانة احترافية",
      description: "نقدم خدمات صيانة متميزة للأجهزة المنزلية في الأحساء"
    },
    {
      image: "https://images.unsplash.com/photo-1635048424329-a9bfb146d7aa?auto=format&fit=crop&q=80",
      title: "تكييف وتبريد",
      description: "صيانة وإصلاح جميع أنواع المكيفات والثلاجات"
    },
    {
      image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&q=80",
      title: "غسالات ومجففات",
      description: "خدمات صيانة متخصصة لجميع أنواع الغسالات"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-carousel relative h-screen">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="max-w-3xl px-4">
              <h1 className="text-5xl font-bold text-white mb-4">{slide.title}</h1>
              <p className="text-xl text-white mb-8">{slide.description}</p>
              <a
                href="#contact"
                className="bg-yellow-500 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-yellow-600 transition duration-300"
              >
                احجز خدمة الآن
              </a>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2 space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-yellow-500' : 'bg-white'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;