import React, { useState } from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    comment: ''
  });

  const testimonials = [
    {
      name: "أحمد محمد",
      rating: 5,
      comment: "خدمة ممتازة وسريعة، تم إصلاح المكيف بشكل احترافي"
    },
    {
      name: "سارة علي",
      rating: 5,
      comment: "فريق عمل محترف ومتعاون، أنصح بالتعامل معهم"
    },
    {
      name: "خالد عبدالله",
      rating: 4,
      comment: "خدمة جيدة وأسعار معقولة"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle review submission
    console.log(formData);
    setFormData({ name: '', rating: 5, comment: '' });
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">آراء العملاء</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card rounded-lg p-6">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.comment}</p>
              <p className="font-bold text-gray-800">{testimonial.name}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">أضف رأيك</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">الاسم</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-yellow-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">التقييم</label>
              <select
                value={formData.rating}
                onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-yellow-500"
              >
                {[5, 4, 3, 2, 1].map((num) => (
                  <option key={num} value={num}>{num} نجوم</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">التعليق</label>
              <textarea
                value={formData.comment}
                onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-yellow-500"
                rows={4}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition duration-300"
            >
              إرسال التقييم
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;