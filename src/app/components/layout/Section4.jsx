import Image from 'next/image'
import React from 'react'

export default function Section4() {
  return (
    <section className='py-16 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col lg:flex-row items-center gap-12'>
        
          <div className='bg-gray-50 lg:w-1/2'>
            <div className='relative bg-gray-50 aspect-[4/3] rounded-xl overflow-hidden shadow-lg'>
              <Image 
                src='/driver.webp'
                alt='ثبت‌نام راننده تپسی'
                fill
                className='object-cover rounded-xl'
                quality={100}
                priority
              />
            </div>
          </div>


          <div className='lg:w-1/2 space-y-6'>
            <h3 className='text-2xl md:text-3xl font-bold text-gray-800'>
              در کمتر از <span className='text-primary'>۱۰ دقیقه</span> ثبت‌نام کنید
            </h3>
            
            <ul className='space-y-4'>
              <li className='flex items-start gap-3'>
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className='text-gray-700'>کسب درآمد بالا تا ۶۵ میلیون تومان</span>
              </li>
              <li className='flex items-start gap-3'>
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className='text-gray-700'>۵ مرتبه تسویه آنی در روز</span>
              </li>
              <li className='flex items-start gap-3'>
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className='text-gray-700'>تخفیف لوازم مصرفی خودرو از تپسی گاراژ</span>
              </li>
              <li className='flex items-start gap-3'>
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className='text-gray-700'>استفاده از امکانات باشگاه سفیران تپسی</span>
              </li>
            </ul>

            <div className='flex flex-col sm:flex-row gap-4 pt-4'>
              <button className='bg-primary cursor-pointer hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md'>
                ثبت نام راننده خودرو
              </button>
              <button className='border cursor-pointer border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-medium transition-colors'>
                دانلود برنامه رایگان
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}