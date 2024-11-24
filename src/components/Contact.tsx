import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">اتصل بنا</h2>
          <p className="text-xl text-gray-600">نحن هنا لخدمتك على مدار الساعة</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="flex items-center space-x-4 space-x-reverse">
              <Phone className="h-6 w-6 text-yellow-500" />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">اتصل بنا</h3>
                <p className="text-gray-600">+966 50 XXX XXXX</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 space-x-reverse">
              <Mail className="h-6 w-6 text-yellow-500" />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">البريد الإلكتروني</h3>
                <p className="text-gray-600">info@alfanni.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 space-x-reverse">
              <MapPin className="h-6 w-6 text-yellow-500" />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">العنوان</h3>
                <p className="text-gray-600">الأحساء، المملكة العربية السعودية</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 space-x-reverse">
              <Clock className="h-6 w-6 text-yellow-500" />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">ساعات العمل</h3>
                <p className="text-gray-600">السبت - الخميس: 8 صباحاً - 10 مساءً</p>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">الاسم</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-yellow-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">رقم الجوال</label>
              <input
                type="tel"
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-yellow-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">نوع الخدمة</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:border-yellow-500">
                <option>صيانة مكيفات</option>
                <option>صيانة ثلاجات</option>
                <option>صيانة غسالات</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">الرسالة</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-yellow-500"
                rows={4}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition duration-300"
            >
              إرسال الرسالة
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;