import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-white py-12'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'>
          

          <div className='col-span-2 md:col-span-3 lg:col-span-1 space-y-4'>
            <div className='cursor-pointer'>
              <Image 
                src='/foot.svg'
                width={120}
                height={40}
                alt='تپسی'
              />
            </div>
            <p className='text-gray-300'>اپلیکیشن درخواست خودرو و پیک</p>
            <p className='text-gray-400 text-sm'>
              تمام حقوق مادی و معنوی این وبسایت متعلق به تپسی است
            </p>
          </div>


          <div className='space-y-4'>
            <h5 className='text-lg font-semibold'>تپسی</h5>
            <ul className='space-y-3'>
              {['وبلاگ تپسی', 'فرصت شغلی', 'تماس با ما', 'لوگو و هویت سازمانی', 'استخدام بازاریاب', 'امور سهام'].map((item) => (
                <li key={item}>
                  <Link href="#" className='text-gray-300 hover:text-red-600 transition-colors text-sm'>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='space-y-4'>
            <h6 className='text-lg font-semibold'>مسافران</h6>
            <ul className='space-y-3'>
              {['دانلود اپ مسافر', 'نسخه وب تپسی', 'پرسش‌های متداول مسافران', 'شرایط و قوانین مسافران', 'باشگاه مشتریان'].map((item) => (
                <li key={item}>
                  <Link href="#" className='text-gray-300 hover:text-red-600 transition-colors text-sm'>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='space-y-4'>
            <h6 className='text-lg font-semibold'>رانندگان</h6>
            <ul className='space-y-3'>
              {['دانلود اپ سفیر', 'ثبت نام راننده تاکسی اینترنتی', 'پرسش‌های متداول سفیران', 'شرایط و قوانین سفیران', 'تپسی گاراژ', 'ثبت نام راننده موتور'].map((item) => (
                <li key={item}>
                  <Link href="#" className='text-gray-300 hover:text-red-600 transition-colors text-sm'>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='space-y-4'>
            <h6 className='text-lg font-semibold'>کسب و کارها</h6>
            <ul className='space-y-3'>
              {['پنل سازمانی تپسی', 'خرید کد اعتبار و تخفیف'].map((item) => (
                <li key={item}>
                  <Link href="#" className='text-gray-300 hover:text-red-600 transition-colors text-sm'>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>


        <div className='mt-12 border-t border-gray-800 flex flex-col md:flex-row items-center justify-center pt-4'>
          <div className=' md:mb-0'>
            <Image 
              src='/etehadiye.png'
              width={120}
              height={60}
              alt='اعتبارسنجی'
              className='object-contain cursor-pointer'
            />
          </div>
          <div className='text-gray-400 text-sm'>
            <p>تمام حقوق برای تپسی محفوظ است</p>
            <p className='text-white my-5'>توسعه یافته توسط وحید سلیمانی نیا</p>
          </div>
        </div>
      </div>
    </footer>
  )
}