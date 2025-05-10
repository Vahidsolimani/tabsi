import Image from 'next/image'
import React from 'react'

export default function Section5() {
  return (
    <section className='py-12 mb-16 bg-white'>
      <div className="container mx-auto px-4">
        {/* چیدمان موبایل اول: تصویر بالا */}
        <div className='lg:hidden mb-8'>
          <div className='relative aspect-[4/3] rounded-xl overflow-hidden shadow-md'>
            <Image 
              src='/gril.webp'
              alt='خدمات سازمانی تپسی'
              fill
              className='object-cover'
              quality={100}
              priority
            />
          </div>
        </div>

        <div className='flex flex-col lg:flex-row items-center gap-12'>
          {/* محتوا */}
          <div className='lg:w-1/2 space-y-6 text-center lg:text-right'>
            <h3 className='text-2xl md:text-3xl font-bold text-gray-800'>
              خدمات ویژه <span className='text-primary'>کسب‌وکارها</span>
            </h3>
            
            <p className='text-gray-600 leading-relaxed'>
              شما می‌توانید از امکانات ویژه تپسی برای کسب‌وکارها مانند درخواست نامحدود خودرو و پیک به صورت همزمان و ایجاد کد تخفیف سازمانی استفاده کنید.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
              <button className='bg-gray-900 cursor-pointer hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md'>
                پنل سازمانی تپسی
              </button>
              <button className='border cursor-pointer border-gray-300 hover:border-primary text-gray-700 hover:text-primary px-6 py-3 rounded-lg font-medium transition-colors'>
                خرید کد تخفیف سازمانی
              </button>
            </div>
          </div>

          {/* تصویر - فقط در دسکتاپ نمایش داده شود */}
          <div className='hidden lg:block lg:w-1/2'>
            <div className='relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg'>
              <Image 
                src='/gril.webp'
                alt='خدمات سازمانی تپسی'
                fill
                className='object-cover'
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}