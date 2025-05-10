import Image from 'next/image'
import React from 'react'

export default function Section6() {
  return (
    <section className='py-16 bg-gradient-to-b from-blue-50 to-white'>
      <div className="container mx-auto px-4">
        <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-12'>

          {/* محتوا */}
          <div className='lg:w-1/2 space-y-6 text-center lg:text-right'>
            <h4 className='text-2xl md:text-3xl font-bold text-gray-800'>
              همین حالا <span className='text-primary'>تپسی</span> رو نصب کن!
            </h4>

            <p className='text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0'>
              با نصب سوپر اپلیکیشن تپسی می‌توانید علاوه بر درخواست خودرو، از سرویس‌های ارسال بسته، سفارش غذا، خرید، سوپرمارکت و داروخانه نیز استفاده کنید.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
              <button className='bg-primary cursor-pointer hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md flex items-center justify-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 2a2 2 0 012-2h8a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V2zm6 2a1 1 0 10-2 0 1 1 0 002 0zM8 4a1 1 0 100 2h4a1 1 0 100-2H8z" clipRule="evenodd" />
                </svg>
                اپلیکیشن تپسی
              </button>
              <button className='border cursor-pointer border-gray-300 hover:border-primary text-gray-700 hover:text-primary px-6 py-3 rounded-lg font-medium transition-colors'>
                اپلیکیشن رانندگان
              </button>
            </div>
          </div>

          {/* تصویر - نمایش در تمام دستگاه‌ها */}
          <div className="lg:w-1/2 w-full"> {/* اضافه کردن w-full */}
            <div className='relative w-full h-64 md:h-96'>
              <Image
                src='/instal.png'
                fill
                className='object-contain'
                alt="نصب اپلیکیشن"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}