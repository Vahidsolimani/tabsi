import Image from 'next/image'
import React from 'react'

export default function Section3() {
  return (
    <section className='py-16 my-16 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row items-center gap-8 md:gap-16'>
          
          {/* متن و توضیحات */}
          <div className='md:w-1/2 space-y-6 text-center md:text-right'>
            <h2 className='text-2xl md:text-3xl font-bold text-gray-800'>
              <span className='text-primary'>تپسی تلفنی</span>
            </h2>
            
            <p className='text-lg text-gray-600 leading-relaxed'>
              سرویس تپسی تلفنی یا ۱۶۳۰، این امکان را به شما می‌دهد که بدون نیاز به اینترنت و اپلیکیشن، درخواست خودرو بدهید. کافیست با شماره ۱۶۳۰ تماس بگیرید.
            </p>
            
            <div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
              <button className='bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md flex items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                شماره ۱۶۳۰
              </button>
            </div>
          </div>
          
          {/* تصویر */}
          <div className='md:w-1/2 rounded flex justify-center'>
            <Image 
              src='/tel.webp'
              width={500}
              height={400}
              alt='تپسی تلفنی'
              className='rounded-lg shadow-xl'
              quality={100}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}