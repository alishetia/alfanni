import React from 'react';
import { Users, Wrench, Clock, Star } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-yellow-500" />,
      number: "1000+",
      label: "عميل راضٍ"
    },
    {
      icon: <Wrench className="h-8 w-8 text-yellow-500" />,
      number: "5000+",
      label: "جهاز تمت صيانته"
    },
    {
      icon: <Clock className="h-8 w-8 text-yellow-500" />,
      number: "10+",
      label: "سنوات خبرة"
    },
    {
      icon: <Star className="h-8 w-8 text-yellow-500" />,
      number: "4.9",
      label: "تقييم العملاء"
    }
  ];

  return (
    <section id="stats" className="py-20 stats-container">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;