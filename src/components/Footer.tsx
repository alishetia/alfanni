import React from 'react';
import { Wrench } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Wrench className="h-8 w-8 text-yellow-500" />
              <span className="mr-2 text-2xl font-bold">الفني</span>
            </div>
            <p className="text-gray-400">
              خدمات صيانة احترافية للأجهزة المنزلية في الأحساء
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-yellow-500">الرئيسية</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-yellow-500">خدماتنا</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-yellow-500">آراء العملاء</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-yellow-500">اتصل بنا</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">خدماتنا</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">صيانة المكيفات</li>
              <li className="text-gray-400">صيانة الثلاجات</li>
              <li className="text-gray-400">صيانة الغسالات</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">تواصل معنا</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">الأحساء، المملكة العربية السعودية</li>
              <li className="text-gray-400">هاتف: 50XXXXXXX 966+</li>
              <li className="text-gray-400">info@alfanni.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            جميع الحقوق محفوظة © {new Date().getFullYear()} الفني لصيانة الأجهزة المنزلية
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;