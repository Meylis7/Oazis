"use client";

import Link from 'next/link';
import Image from "next/image";
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header mt-5!">
      <div className="auto_container">
        <div className="wrap relative flex items-center justify-between pb-5 gap-4 border-solid border-0 border-b border-[#9DB7BC]/40">
          <Link href="/" className="h-[30px] block relative z-50">
            <Image
              width={260}
              height={30}
              src="/images/logo.png"
              className='w-full h-full object-contain'
              alt="logo"
            />
          </Link>

          <nav className={`
            absolute top-full left-0 w-full bg-white shadow-xl rounded-b-xl py-6 px-4 z-40
            transition-all duration-300 ease-in-out origin-top
            md:static md:w-fit md:bg-transparent md:shadow-none md:p-0 md:opacity-100 md:visible md:scale-y-100 md:translate-y-0
            ${isMenuOpen ? "opacity-100 visible scale-y-100 translate-y-4" : "opacity-0 invisible scale-y-95 translate-y-0"}
          `}>
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-[17px]">
              <Link href="/schedule" className="text-base md:text-sm font-medium block w-full md:w-auto text-center hover:text-[#FF6A00] transition-colors">
                Расписание
              </Link>
              <Link href="/contacts" className="text-base md:text-sm font-medium block w-full md:w-auto text-center hover:text-[#FF6A00] transition-colors">
                Контакты
              </Link>
              <Link href="/registration" className="text-base md:text-sm font-medium block w-full md:w-auto text-center hover:text-[#FF6A00] transition-colors">
                Регистрация
              </Link>
              
              {/* Mobile "Забронировать место" button inside nav */}
              <Link href="#" className="md:hidden mt-2 text-sm font-medium text-center block border-solid border border-[#9DB7BC] py-3 w-[220px] rounded-lg">
                Забронировать место
              </Link>
            </div>
          </nav>

          <Link href="#" className="hidden md:block text-sm font-medium text-center  border-solid border border-[#9DB7BC] py-3 w-[220px] rounded-lg relative z-50 hover:bg-[#9DB7BC] hover:text-white transition-colors">
            Забронировать место
          </Link>

          <button 
            className="menu cursor-pointer  md:hidden relative z-50 w-[42px] h-[42px] flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="relative w-[42px] h-[42px]">
              {/* Hamburger Icon */}
              <svg 
                className={`absolute top-0 left-0 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}
                width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.5 21H35.4375" stroke="#FF6A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.5625 10.5H35.4375" stroke="#FF6A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.5625 31.5H35.4375" stroke="#FF6A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {/* Close (X) Icon */}
              <svg 
                className={`absolute top-0 left-0 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}
                width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 12L30 30" stroke="#FF6A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M30 12L12 30" stroke="#FF6A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
