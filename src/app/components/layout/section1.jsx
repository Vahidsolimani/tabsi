import Image from 'next/image'
import React from 'react'

export default function Section1() {
  return (
    <section className='w-full bg-gradient-to-l from-blue-50 to-white py-12'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row items-center gap-8 md:gap-16'>
          

          <div className='md:w-1/2 space-y-6 text-center md:text-right'>
            <h1 className='text-3xl md:text-5xl font-bold text-gray-800 leading-tight'>
              با سوپر اپلیکیشن تپسی،
              <br />
              زندگی <span className='text-primary'>به فرمان تو!</span>
            </h1>
            
            <p className='text-lg text-gray-600'>
              تمام خدمات حمل و نقل، خرید و پرداخت در یک اپلیکیشن
            </p>
            
            <div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
              <button className='bg-black cursor-pointer hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md'>
                دانلود اپلیکیشن مسافر
              </button>
              <button className='border-2 cursor-pointer border-primary text-primary hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors'>
                نسخه وب اپلیکیشن (PWA)
              </button>
            </div>
            
            <div className='flex items-center justify-center md:justify-start gap-2'>
              <span className='text-sm text-gray-500'>همراه اول</span>
              <span className='text-sm text-gray-500'>ایرانسل</span>
              <span className='text-sm text-gray-500'>رایتل</span>
            </div>
          </div>
          

          <div className='md:w-1/2 flex  justify-center'>
            <Image 
              src='/hero.webp' 
              width={500} 
              height={500} 
              alt='سوپر اپلیکیشن تپسی'
              className='drop-shadow-xl rounded-2xl'
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}