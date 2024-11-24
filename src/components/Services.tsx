import React from 'react';
import { Wind, Snowflake, WashingMachine } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Wind className="h-12 w-12 text-yellow-500" />,
      title: "صيانة المكيفات",
      description: "صيانة وإصلاح جميع أنواع المكيفات السبليت والشباك والمركزية"
    },
    {
      icon: <Snowflake className="h-12 w-12 text-yellow-500" />,
      title: "صيانة الثلاجات",
      description: "خدمات صيانة متخصصة للثلاجات والفريزرات بجميع أنواعها"
    },
    {
      icon: <WashingMachine className="h-12 w-12 text-yellow-500" />,
      title: "صيانة الغسالات",
      description: "إصلاح وصيانة الغسالات الأوتوماتيكية والنصف أوتوماتيكية"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">خدماتنا</h2>
          <p className="text-xl text-gray-600">نقدم خدمات صيانة احترافية لجميع الأجهزة المنزلية</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;