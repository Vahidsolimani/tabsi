"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './headr.css'
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='w-full bg-white shadow-sm sticky top-0 z-50'>
      <div className='container mx-auto px-4 py-3'>
        <div className='flex justify-between items-center'>
        
          <div className='flex-shrink-0'>
            <Link href="/">
              <Image 
                src='/logo.svg' 
                width={120} 
                height={40} 
                alt='تپسی' 
                className='cursor-pointer'
              />
            </Link>
          </div>

          <nav className='hidden md:flex items-center gap-8'>
            <ul className='flex gap-6 text-gray-700'>
              <li className='hover:text-primary transition-colors'>
                <Link href="/driver-car">ثبت‌نام راننده خودرو</Link>
              </li>
              <li className='hover:text-primary transition-colors'>
                <Link href="/driver-bike">ثبت‌نام راننده موتور</Link>
              </li>
              <li className='hover:text-primary transition-colors'>
                <Link href="/blog">وبلاگ</Link>
              </li>
              <li className='hover:text-primary transition-colors'>
                <Link href="/support">پشتیبانی</Link>
              </li>
            </ul>
            
            <button className='bg-primary text-white px-5 py-2 rounded-lg hover:bg-primary-dark transition-colors'>
              دانلود تپسی
            </button>
          </nav>

          <div className='md:hidden cursor-pointer'>
            <button 
              onClick={toggleMenu}
              className='text-gray-700 focus:outline-none'
              aria-label="منو"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>

        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} transition-all cursor-pointer duration-300 ease-in-out`}>
          <div className='pt-4 pb-6 space-y-3'>
            <Link href="/driver-car">
              <div className='block px-3 py-2 hover:bg-gray-100 rounded'>ثبت‌نام راننده خودرو</div>
            </Link>
            <Link href="/driver-bike">
              <div className='block px-3 py-2 hover:bg-gray-100 rounded'>ثبت‌نام راننده موتور</div>
            </Link>
            <Link href="/blog">
              <div className='block px-3 py-2 hover:bg-gray-100 rounded'>وبلاگ</div>
            </Link>
            <Link href="/support">
              <div className='block px-3 py-2 hover:bg-gray-100 rounded'>پشتیبانی</div>
            </Link>
            <button className='w-full bg-primary text-white px-5 py-2 rounded-lg hover:bg-primary-dark mt-2'>
              دانلود تپسی
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}