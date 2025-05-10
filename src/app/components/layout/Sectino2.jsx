import Image from 'next/image'
import React from 'react'

const services = [
  { id: 1, title: 'تپسی', image: '/1.png', desc: 'درخواست خودرو' },
  { id: 2, title: 'تپسی موتور', image: '/2.png', desc: 'درخواست موتور' },
  { id: 3, title: 'تپسی کلاب', image: '/3.png', desc: 'درخواست خودرو ویژه' },
  { id: 4, title: 'تپسی تاکسی', image: '/4.png', desc: 'درخواست تاکسی' },
  { id: 5, title: 'تپسی پیک', image: '/5.png', desc: 'پیک موتوری' },
  { id: 6, title: 'تپسی من', image: '/6.webp', desc: 'درخواست همسفر' }
]

export default function Section2() {
  return (
    <section className='py-12 bg-gray-50'>
      <div className="container mx-auto px-4">
        <div className='text-center mb-10'>
          <h2 className='text-2xl md:text-3xl font-bold text-gray-800'>
            سرویس‌های <span className='text-primary'>تپسی</span>
          </h2>
          <p className='text-gray-600 mt-2'>
            تمام خدمات حمل و نقل در یک اپلیکیشن
          </p>
        </div>
        
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4'>
          {services.map((service) => (
            <div 
              key={service.id}
              className='bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 text-center cursor-pointer'
            >
              <div className='relative h-20 mx-auto mb-3'>
                <Image 
                  src={service.image}
                  alt={service.title}
                  fill
                  className='object-contain'
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
              </div>
              <h3 className='font-medium text-gray-800'>{service.title}</h3>
              <p className='text-sm text-gray-500 mt-1'>{service.desc}</p>
            </div>
          ))}
        </div>

        <div className='text-center mt-10'>
          <button className='border border-blue-700 text-black hover:bg-blue-500 hover:text-white px-6 py-2 rounded-lg transition-colors'>
            مشاهده همه سرویس‌ها
          </button>
        </div>
      </div>
    </section>
  )
}