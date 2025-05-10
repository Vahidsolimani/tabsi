import Image from 'next/image'
import React from 'react'

const blogPosts = [
  {
    id: 1,
    title: 'کد تخفیف شانسی تپسی',
    discription: 'کمپین تازه تپسی با نام کد تخفیف شانسی در دسترس کاربران قرار گرفته است. برای دریافت کد تخفیف',
    image: '/tabsiii.jpg',
    alt: 'کد تخفیف تپسی'
  },
  {
    id: 2,
    title: 'راهنمای انتخاب باکس موتور؛ از کوچک تا حرفه‌ای!',
    discription: 'انتخاب باکس مناسب برای هر پیک موتوری تاثیر زیادی بر ایمنی و عملکرد دارد. اما آن‌قدر تنوع باکس موتورسیکلت از نظر ابعاد، جنس و شکل زیاد است، که انتخاب گزینه مناسب را سخت می‌‌کند.',
    image: '/motor.jpg',
    alt: 'باکس موتورسیکلت'
  },
  {
    id: 3,
    title: 'موزه خودروهای تاریخی کجاست؟ + ساعت کاری و قیمت بلیت',
    discription: 'موزه خودروهای تاریخی کجاست؟ احتمالا شما هم درمورد موزه‌ معروف تهران که مجموعه‌ای از خودروهای تاریخی را در خود جای داده است شنیده‌اید.',
    image: '/car.jpg',
    alt: 'موزه خودروهای تاریخی'
  }
]

export default function Section7() {
  return (
    <section className='py-16 bg-gray-50'>
      <div className="container mx-auto px-4">
        <h2 className='text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800'>
          تازه‌ترین‌های <span className='text-primary'>وبلاگ تپسی</span>
        </h2>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {blogPosts.map((post) => (
            <div 
              key={post.id}
              className='bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer'
            >
              <div className='relative h-48 w-full'>
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  className='object-cover'
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              
              <div className='p-6'>
                <h6 className='text-lg font-semibold mb-3 text-gray-800 line-clamp-2'>
                  {post.title}
                </h6>
                <p className='text-gray-600 text-sm line-clamp-3'>
                  {post.discription}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className='text-center mt-10'>
          <button className='border border-primary cursor-pointer  hover:bg-black hover:text-white px-6 py-2 rounded-lg transition-colors'>
            مشاهده همه مطالب
          </button>
        </div>
      </div>
    </section>
  )
}